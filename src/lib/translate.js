// Lightweight, self-contained page translator.
// Translates every visible text node into the chosen language via Google's
// public (CORS-enabled) translate endpoint, then keeps new/changed content
// translated via a MutationObserver. Translations are fetched in parallel and
// cached in localStorage, so repeat switches/navigation are instant.
// English = original DOM (a reload restores it).

const ENDPOINT = 'https://translate.googleapis.com/translate_a/single'
const STORE = {} // lang -> { sourceText: translatedText }
const ORIG = new WeakMap() // textNode -> original English value
const busySubs = new Set()
let observer = null
let pendingTimer = null
let translating = false

function getStored() {
  try { return localStorage.getItem('siteLang') || 'en' } catch { return 'en' }
}
function setStored(lang) {
  try { localStorage.setItem('siteLang', lang) } catch { /* ignore */ }
}

export function getLanguage() { return getStored() }
export function onBusy(cb) { busySubs.add(cb); return () => busySubs.delete(cb) }
function setBusy(b) { busySubs.forEach((cb) => { try { cb(b) } catch { /* ignore */ } }) }

// --- persistent cache ------------------------------------------------------
function loadStore(lang) {
  if (STORE[lang]) return STORE[lang]
  let obj = {}
  try { const raw = localStorage.getItem('tcache_' + lang); if (raw) obj = JSON.parse(raw) || {} } catch { /* ignore */ }
  STORE[lang] = obj
  return obj
}
function saveStore(lang) {
  try { localStorage.setItem('tcache_' + lang, JSON.stringify(STORE[lang])) } catch { /* ignore */ }
}

// --- network ---------------------------------------------------------------
async function fetchJoined(texts, lang) {
  const url = `${ENDPOINT}?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(texts.join('\n'))}`
  try {
    const res = await fetch(url)
    const data = await res.json()
    const joined = (data[0] || []).map((s) => s[0]).join('')
    const lines = joined.split('\n')
    if (lines.length === texts.length) return lines
  } catch { /* fall through */ }
  return null
}
async function fetchOne(text, lang) {
  const url = `${ENDPOINT}?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`
  try {
    const res = await fetch(url)
    const data = await res.json()
    return (data[0] || []).map((s) => s[0]).join('')
  } catch { return text }
}
// Run async task factories with limited concurrency.
async function runPool(tasks, limit) {
  let i = 0
  const workers = Array.from({ length: Math.min(limit, tasks.length) || 0 }, async () => {
    while (i < tasks.length) { const idx = i++; await tasks[idx]() }
  })
  await Promise.all(workers)
}

// --- DOM walking -----------------------------------------------------------
function skip(node) {
  const p = node.parentElement
  if (!p) return true
  if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'CODE'].includes(p.tagName)) return true
  if (p.closest('.notranslate, [translate="no"]')) return true
  return false
}
function collect() {
  const nodes = []
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  let n
  while ((n = walker.nextNode())) {
    if (n.nodeValue && n.nodeValue.trim() && !skip(n)) nodes.push(n)
  }
  return nodes
}

// --- core ------------------------------------------------------------------
async function translateNow(lang) {
  if (lang === 'en' || translating) return
  translating = true
  try {
    const store = loadStore(lang)
    const nodes = collect()
    for (const n of nodes) if (!ORIG.has(n)) ORIG.set(n, n.nodeValue)

    // strings not yet cached
    const missing = []
    const seen = new Set()
    for (const n of nodes) {
      const src = ORIG.get(n).trim()
      if (!(src in store) && !seen.has(src)) { seen.add(src); missing.push(src) }
    }

    if (missing.length) {
      setBusy(true)
      // build char-budgeted batches, fetch them in parallel
      const batches = []
      let cur = []
      let budget = 0
      for (const src of missing) {
        cur.push(src); budget += src.length + 1
        if (budget > 1800 || cur.length >= 60) { batches.push(cur); cur = []; budget = 0 }
      }
      if (cur.length) batches.push(cur)

      const tasks = batches.map((b) => async () => {
        let out = await fetchJoined(b, lang)
        if (!out) out = await Promise.all(b.map((t) => fetchOne(t, lang)))
        b.forEach((t, i) => { store[t] = (out && out[i]) || t })
      })
      await runPool(tasks, 8)
      saveStore(lang)
      setBusy(false)
    }

    // apply in place (pause observer to avoid a feedback loop)
    if (observer) observer.disconnect()
    for (const n of nodes) {
      const orig = ORIG.get(n)
      const tr = store[orig.trim()]
      if (tr) {
        const target = orig.replace(orig.trim(), tr)
        if (n.nodeValue !== target) n.nodeValue = target
      }
    }
    if (observer) observer.observe(document.body, { childList: true, subtree: true, characterData: true })
  } finally {
    translating = false
    setBusy(false)
  }
}

function schedule(lang) {
  if (pendingTimer) clearTimeout(pendingTimer)
  pendingTimer = setTimeout(() => translateNow(lang), 200)
}
function startObserver(lang) {
  if (observer) observer.disconnect()
  observer = new MutationObserver(() => schedule(lang))
  observer.observe(document.body, { childList: true, subtree: true, characterData: true })
}
function stopObserver() {
  if (observer) { observer.disconnect(); observer = null }
}

// --- public API ------------------------------------------------------------
export function setLanguage(lang) {
  setStored(lang)
  if (lang === 'en') {
    stopObserver()
    window.location.reload() // restore the original English DOM
    return
  }
  startObserver(lang)
  translateNow(lang)
}

export function initTranslation() {
  const lang = getStored()
  if (lang && lang !== 'en') {
    loadStore(lang) // warm cache from localStorage
    startObserver(lang)
    setTimeout(() => translateNow(lang), 250)
  }
}
