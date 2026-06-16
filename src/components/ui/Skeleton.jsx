import { cn } from '../../lib/cn'

// Shimmering placeholder block. Respects reduced motion via the global CSS rule.
export function Skeleton({ className, rounded = 'rounded-lg' }) {
  return (
    <div className={cn('relative overflow-hidden bg-zinc-100', rounded, className)} aria-hidden="true">
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  )
}

// Card-shaped skeleton matching the material/feature card layout.
export function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-soft">
      <Skeleton className="aspect-[4/3] w-full" rounded="rounded-none" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-4 w-20" rounded="rounded-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  )
}
