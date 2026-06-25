import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'
import { getLanguage, setLanguage } from '../../lib/translate'

// Languages offered, with their flag-icons country code.
const LANGUAGES = [
  { code: 'en', label: 'English', cc: 'gb' },
  { code: 'fr', label: 'Français', cc: 'fr' },
  { code: 'es', label: 'Español', cc: 'es' },
  { code: 'it', label: 'Italiano', cc: 'it' },
  { code: 'de', label: 'Deutsch', cc: 'de' },
]

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('en')
  const ref = useRef(null)

  useEffect(() => {
    setActive(getLanguage())
  }, [])

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = LANGUAGES.find((l) => l.code === active) || LANGUAGES[0]

  const choose = (code) => {
    setOpen(false)
    setActive(code)
    setLanguage(code) // translates live (or reloads for English)
  }

  return (
    <div ref={ref} className="relative notranslate" translate="no">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-2 text-sm font-semibold text-ink transition hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      >
        <span className={`fi fi-${current.cc} rounded-sm`} style={{ width: '1.25rem', height: '0.9rem' }} />
        <span className="uppercase">{current.code}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn('h-3.5 w-3.5 text-zinc-400 transition-transform', open && 'rotate-180')} aria-hidden="true">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-zinc-200 bg-white py-1 shadow-lift"
        >
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === active
            return (
              <li key={lang.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => choose(lang.code)}
                  className={cn(
                    'flex w-full items-center gap-3 px-3.5 py-2.5 text-left text-sm transition',
                    isActive ? 'bg-red/10 font-semibold text-red' : 'text-zinc-600 hover:bg-zinc-50 hover:text-ink'
                  )}
                >
                  <span className={`fi fi-${lang.cc} rounded-sm`} style={{ width: '1.4rem', height: '1rem' }} />
                  <span className="flex-1">{lang.label}</span>
                  {isActive && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
