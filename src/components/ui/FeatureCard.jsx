import { Icon } from './Icon'
import { cn } from '../../lib/cn'

// Icon + title + text card with a subtle hover lift and accent glow.
export function FeatureCard({ icon, title, text, className }) {
  return (
    <div
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lift',
        className
      )}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red text-white transition-colors duration-300 group-hover:bg-teal">
        <Icon name={icon} size={22} />
      </span>
      <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-zinc-500">{text}</p>
    </div>
  )
}
