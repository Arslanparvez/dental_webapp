import { stats } from '../../data/stats'
import { StatCard } from '../ui/StatCard'
import { FadeIn } from '../ui/FadeIn'

export function StatsBand({ tone = 'light' }) {
  return (
    <FadeIn>
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            tone={tone === 'navy' || tone === 'dark' ? 'dark' : 'light'}
          />
        ))}
      </dl>
    </FadeIn>
  )
}
