import { timeline } from '../../data/timeline'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'

export function Timeline() {
  return (
    <ol className="relative mx-auto max-w-2xl">
      <span aria-hidden="true" className="absolute left-[7px] top-1 h-full w-px bg-zinc-200" />
      {timeline.map((entry, i) => (
        <li key={entry.year} className="relative pl-10 pb-10 last:pb-0">
          <Reveal delay={i * 0.05}>
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-white bg-teal shadow-soft ring-1 ring-zinc-200"
            />
            <Badge tone="neutral">{entry.year}</Badge>
            <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-ink">{entry.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-zinc-500">{entry.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
