import { Reveal } from '../ui/Reveal'
import { CardSkeleton } from '../ui/Skeleton'
import { MaterialCard } from './MaterialCard'

export function MaterialGrid({ products, loading = false, onSelect }) {
  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center">
        <p className="font-heading text-lg font-semibold text-ink">No materials found</p>
        <p className="mt-2 font-body text-sm text-zinc-500">Try a different search term or family.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <Reveal key={product.id} delay={Math.min(i, 5) * 0.05}>
          <MaterialCard product={product} onSelect={onSelect} />
        </Reveal>
      ))}
    </div>
  )
}
