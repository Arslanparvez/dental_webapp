import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Loader() {
  const reduced = useReducedMotion()

  return (
    <div
      role="status"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4"
    >
      <span className="relative inline-flex h-14 w-14">
        {/* Track */}
        <span className="absolute inset-0 rounded-full border-4 border-lightgray" />
        {/* Spinning arc */}
        <span
          className={cn(
            'absolute inset-0 rounded-full border-4 border-transparent border-t-teal border-r-teal',
            !reduced && 'animate-spin'
          )}
        />
        {/* Brand mark */}
        <span className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-navy" fill="currentColor" aria-hidden="true">
            <path d="M11 3h2v8h8v2h-8v8h-2v-8H3v-2h8z" />
          </svg>
        </span>
      </span>
      <span className="sr-only">Loading…</span>
    </div>
  )
}

export default Loader
