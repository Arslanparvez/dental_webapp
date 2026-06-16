import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Loader() {
  const reduced = useReducedMotion()

  return (
    <div role="status" className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4">
      <span className="relative inline-flex h-10 w-10">
        <span className="absolute inset-0 rounded-full border-2 border-zinc-200" />
        <span
          className={cn(
            'absolute inset-0 rounded-full border-2 border-transparent border-t-teal',
            !reduced && 'animate-spin'
          )}
        />
      </span>
      <span className="font-heading text-sm font-medium tracking-tight text-zinc-400">Loading…</span>
    </div>
  )
}

export default Loader
