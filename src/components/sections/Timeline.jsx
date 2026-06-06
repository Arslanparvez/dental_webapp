import { timeline } from '../../data/timeline'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'
import { cn } from '../../lib/cn'

export function Timeline() {
  return (
    <ol className="relative mx-auto max-w-4xl">
      {/* Connecting line: left on mobile, centered on desktop */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-4 h-full w-px bg-teal/25 md:left-1/2 md:-translate-x-1/2"
      />

      {timeline.map((entry, i) => {
        const left = i % 2 === 0
        return (
          <li key={entry.year} className="relative">
            <Reveal
              delay={i * 0.05}
              className={cn(
                'relative flex pl-12 pb-12 last:pb-0 md:w-1/2 md:pl-0',
                left ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              )}
            >
              {/* Node dot */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-1.5 left-4 h-3 w-3 -translate-x-1/2 rounded-full bg-teal ring-4 ring-lightgray',
                  left ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                )}
              />
              <div className="flex-1">
                <Badge tone="teal">{entry.year}</Badge>
                <h3 className="mt-3 font-heading text-lg font-semibold text-navy">
                  {entry.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-navy/70">
                  {entry.text}
                </p>
              </div>
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}
