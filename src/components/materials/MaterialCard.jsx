import { useState } from 'react'
import { Badge } from '../ui/Badge'
import { Skeleton } from '../ui/Skeleton'
import { categories } from '../../data/categories'
import { cn } from '../../lib/cn'

const familyName = (slug) => categories.find((c) => c.slug === slug)?.name || slug

export function MaterialCard({ product, onSelect }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {!loaded && <Skeleton className="absolute inset-0" rounded="rounded-none" />}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={600}
          onLoad={() => setLoaded(true)}
          className={cn(
            'h-full w-full object-contain p-5 transition-all duration-500 group-hover:scale-105',
            loaded ? 'opacity-100' : 'opacity-0'
          )}
        />
        <div className="absolute left-3 top-3">
          <Badge tone="ink">{familyName(product.category)}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold tracking-tight text-ink">{product.name}</h3>
        <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-zinc-500">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-zinc-100 pt-4">
          <Badge tone="neutral">{product.specs.Aesthetic}</Badge>
          <Badge tone="teal">{product.specs['Bending Strength']}</Badge>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-all group-hover:gap-2.5">
          View specs
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </button>
  )
}
