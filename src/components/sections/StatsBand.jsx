import { stats } from '../../data/stats'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { FadeIn } from '../ui/FadeIn'
import { cn } from '../../lib/cn'

export function StatsBand({ tone = 'light' }) {
  const onDark = tone === 'navy'

  return (
    <FadeIn>
      <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={cn(
              'rounded-2xl border p-6 text-center',
              onDark ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white shadow-sm'
            )}
          >
            <dd className="font-heading text-3xl font-bold text-teal md:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </dd>
            <dt className={cn('mt-2 text-sm font-medium', onDark ? 'text-offwhite/70' : 'text-navy/70')}>
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </FadeIn>
  )
}
