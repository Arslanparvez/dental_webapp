import { services } from '../../data/services'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { ServiceCard } from './ServiceCard'

export function ServicesGrid() {
  return (
    <div>
      <SectionHeading
        eyebrow="What We Do"
        title="Our Services"
        subtitle="From digital design to dependable supply, we support dental laboratories and clinics at every stage of the modern workflow."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={i * 0.08}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
