import { testimonials } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Icon } from '../ui/Icon'

const initials = (name) =>
  name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

function TestimonialCard({ item }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex gap-0.5 text-teal" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" size={16} />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 font-body text-[15px] leading-relaxed text-zinc-600">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-teal font-heading text-sm font-bold text-white">
          {initials(item.name)}
        </span>
        <div>
          <p className="font-heading text-sm font-semibold text-ink">{item.name}</p>
          <p className="text-sm text-zinc-500">
            {item.role}, {item.company}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}

export function TestimonialsSlider() {
  return (
    <div>
      <SectionHeading
        eyebrow="Client Stories"
        title="Trusted by dental professionals"
        subtitle="Laboratories, clinics, and dentists worldwide rely on Digiart Design Services every day."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 0.06}>
            <TestimonialCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
