// Pluggable form adapter. Set VITE_FORM_ENDPOINT to enable real POST (e.g. Formspree).
const REQUIRED = {
  contact: ['name', 'email', 'message'],
  inquiry: ['name', 'email'],
  newsletter: ['email'],
}
export async function submitForm(type, data) {
  const required = REQUIRED[type] || []
  const missing = required.filter((f) => !data?.[f]?.toString().trim())
  if (missing.length) throw new Error(`Required fields missing: ${missing.join(', ')}`)
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 600))
    return { ok: true, mock: true }
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ formType: type, ...data }),
  })
  if (!res.ok) throw new Error('Submission failed. Please try again.')
  return { ok: true }
}
