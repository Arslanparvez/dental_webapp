import { Link } from 'react-router-dom'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'

export function ServiceCard({ service }) {
  return (
    <Card hoverable className="group flex h-full flex-col p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
        <Icon name={service.icon} size={24} />
      </span>
      <h3 className="mt-5 font-heading text-xl font-semibold text-navy">{service.title}</h3>
      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-navy/70">{service.summary}</p>
      <Link
        to={`/services#${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
      >
        Learn more
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </Card>
  )
}
