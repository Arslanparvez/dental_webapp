import { useState } from 'react'
import { locations } from '../../data/locations'
import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../ui/FadeIn'
import { Icon } from '../ui/Icon'
import { cn } from '../../lib/cn'

// Approximate marker positions on the world-map panel (percentages).
const markerPos = {
  HQ: { left: '58%', top: '44%' },
  Branch: { left: '78%', top: '56%' },
}

export function GlobalPresence() {
  const [activeType, setActiveType] = useState('HQ')
  const active = locations.find((l) => l.type === activeType) || locations[0]

  return (
    <div>
      <SectionHeading
        eyebrow="Where We Operate"
        title="Global Presence"
        subtitle="Headquartered in Dubai with a dedicated branch in the Philippines, delivering support across time zones."
      />

      <FadeIn className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
        {/* Map panel */}
        <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-navy">
          <img
            src="https://picsum.photos/seed/worldmap/1200/600"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1200}
            height={600}
            className="h-full min-h-[260px] w-full object-cover opacity-25"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy/70 to-teal/30" />
          {locations.map((loc) => {
            const pos = markerPos[loc.type]
            const selected = loc.type === activeType
            return (
              <button
                key={loc.id}
                type="button"
                aria-pressed={selected}
                aria-label={`Show ${loc.name}`}
                onClick={() => setActiveType(loc.type)}
                className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
                style={{ left: pos.left, top: pos.top }}
              >
                <span
                  className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white transition',
                    selected ? 'scale-125 bg-teal' : 'bg-mint hover:scale-110'
                  )}
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
              </button>
            )
          })}
        </div>

        {/* Info panel + tabs */}
        <div className="flex flex-col">
          <div role="tablist" aria-label="Locations" className="mb-5 flex gap-2">
            {locations.map((loc) => {
              const selected = loc.type === activeType
              return (
                <button
                  key={loc.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-pressed={selected}
                  onClick={() => setActiveType(loc.type)}
                  className={cn(
                    'rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2',
                    selected ? 'bg-navy text-white' : 'bg-lightgray text-navy hover:bg-sky'
                  )}
                >
                  {loc.type === 'HQ' ? 'Head Office' : 'Philippines'}
                </button>
              )
            })}
          </div>

          <div className="flex-1 rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-navy">{active.name}</h3>
            <ul className="mt-5 space-y-4 font-body text-sm text-navy/80">
              <li className="flex gap-3">
                <Icon name="pin" size={20} className="mt-0.5 text-teal" />
                <span>{active.address}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" size={20} className="mt-0.5 text-teal" />
                <a href={`tel:${active.phone.replace(/\s+/g, '')}`} className="transition hover:text-teal">
                  {active.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" size={20} className="mt-0.5 text-teal" />
                <a href={`mailto:${active.email}`} className="transition hover:text-teal">
                  {active.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" size={20} className="mt-0.5 text-teal" />
                <span>{active.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
