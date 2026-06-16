import { AnimatedCounter } from './AnimatedCounter'
import { cn } from '../../lib/cn'

// Stat tile. `tone="dark"` for use on ink bands.
export function StatCard({ value, suffix = '', prefix = '', label, tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <div
      className={cn(
        'rounded-2xl border p-6 text-center transition-colors',
        dark ? 'border-white/10 bg-white/[0.03]' : 'border-zinc-200 bg-white shadow-soft'
      )}
    >
      <dd className={cn('font-heading text-3xl font-bold tracking-tightest md:text-4xl', dark ? 'text-white' : 'text-ink')}>
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </dd>
      <dt className={cn('mt-2 text-sm font-medium', dark ? 'text-white/55' : 'text-zinc-500')}>{label}</dt>
    </div>
  )
}
