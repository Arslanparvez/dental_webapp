import { Input } from '../ui/Input'
import { cn } from '../../lib/cn'
import { categories } from '../../data/categories'

const chips = [{ slug: 'all', name: 'All' }, ...categories]

export function MaterialFilters({ query, onQueryChange, category, onCategoryChange }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by family">
        {chips.map((chip) => {
          const active = category === chip.slug
          return (
            <button
              key={chip.slug}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(chip.slug)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2',
                active
                  ? 'bg-ink text-white shadow-soft'
                  : 'border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-ink'
              )}
            >
              {chip.name}
            </button>
          )
        })}
      </div>

      <div className="w-full md:max-w-xs">
        <Input
          type="search"
          placeholder="Search materials…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="Search materials"
        />
      </div>
    </div>
  )
}
