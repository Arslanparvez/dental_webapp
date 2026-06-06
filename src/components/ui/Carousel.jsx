import { useState } from 'react'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// perView: either a single number, or a responsive object like { base: 1, md: 2, lg: 3 }.
// To keep paging math simple we treat the *base* count as the authoritative number of
// slides shown per page (Tailwind responsive widths handle the visual md/lg breakpoints).
function resolvePerView(perView) {
  if (typeof perView === 'number') return Math.max(1, perView)
  if (perView && typeof perView === 'object') return Math.max(1, perView.base || 1)
  return 1
}

// Map base perView to responsive width utilities so the visual layout matches.
const widthClasses = {
  1: 'w-full',
  2: 'w-full sm:w-1/2',
  3: 'w-full sm:w-1/2 lg:w-1/3',
  4: 'w-full sm:w-1/2 lg:w-1/4',
}

export function Carousel({ items = [], renderItem, perView = 1, ariaLabel = 'Carousel' }) {
  const reduced = useReducedMotion()
  const base = resolvePerView(perView)
  const pageCount = Math.max(1, Math.ceil(items.length / base))
  const [page, setPage] = useState(0)

  const goTo = (next) => {
    const clamped = (next + pageCount) % pageCount
    setPage(clamped)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goTo(page - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      goTo(page + 1)
    }
  }

  if (items.length === 0) return null

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className="relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="overflow-hidden">
        <div
          className={cn('flex', !reduced && 'transition-transform duration-500 ease-out')}
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={cn('shrink-0 px-2', widthClasses[base] || widthClasses[1])}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(page - 1)}
        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-navy shadow-md transition hover:bg-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(page + 1)}
        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-navy shadow-md transition hover:bg-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {pageCount > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === page ? 'true' : undefined}
              onClick={() => goTo(i)}
              className={cn(
                'h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal',
                i === page ? 'w-6 bg-teal' : 'w-2.5 bg-navy/20 hover:bg-navy/40'
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
