import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../ui/FadeIn'
import { Icon } from '../ui/Icon'
import { getLocation } from '../../data/locations'

export function GlobalPresence() {
  const hq = getLocation('HQ')

  const rows = [
    { icon: 'pin', label: 'Address', value: hq.address },
    { icon: 'phone', label: 'Phone', value: hq.phone, href: `tel:${hq.phone.replace(/\s+/g, '')}` },
    { icon: 'mail', label: 'Email', value: hq.email, href: `mailto:${hq.email}` },
    { icon: 'clock', label: 'Hours', value: hq.hours },
  ]

  return (
    <div>
      <SectionHeading
        eyebrow="Where to Find Us"
        title="Headquartered in Bur Dubai"
        subtitle="Delivering precise digital design to laboratories and clinics across 25+ countries."
      />
      <FadeIn className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
        <div className="flex flex-col justify-center rounded-2xl border border-zinc-200 bg-white p-8 shadow-soft">
          <ul className="space-y-5">
            {rows.map((row) => (
              <li key={row.label} className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-teal">
                  <Icon name={row.icon} size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{row.label}</p>
                  {row.href ? (
                    <a href={row.href} className="font-body text-ink transition hover:text-teal">
                      {row.value}
                    </a>
                  ) : (
                    <p className="font-body text-ink">{row.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-soft">
          <iframe
            title={`Map showing ${hq.name}`}
            src={hq.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[320px] w-full border-0"
          />
        </div>
      </FadeIn>
    </div>
  )
}
