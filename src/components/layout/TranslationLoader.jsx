import { useEffect, useState } from 'react'
import { onBusy } from '../../lib/translate'

// Small top-center pill shown while the page is being translated.
export function TranslationLoader() {
  const [busy, setBusy] = useState(false)
  useEffect(() => onBusy(setBusy), [])

  if (!busy) return null
  return (
    <div
      className="notranslate pointer-events-none fixed inset-x-0 top-0 z-[60] flex justify-center"
      translate="no"
      aria-live="polite"
    >
      <div className="mt-20 flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/95 px-5 py-2.5 shadow-lift backdrop-blur">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-red" />
        <span className="text-sm font-semibold text-ink">Translating…</span>
      </div>
    </div>
  )
}
