import { Link } from 'react-router-dom'
import { Icon } from '../ui/Icon'

export function ServiceCard({ service }) {
  return (
    <Link
      to={`/services#${service.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white transition-colors duration-300 group-hover:bg-teal">
        <Icon name={service.icon} size={22} />
      </span>
      <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-zinc-500">{service.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-all group-hover:gap-2.5">
        Learn more
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  )
}
