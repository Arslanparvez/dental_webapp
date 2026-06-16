import { services } from '../../data/services'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { ServiceCard } from './ServiceCard'

export function ServicesGrid() {
  return (
    <div>
      <SectionHeading
        eyebrow="What We Do"
        title="Design services for every indication"
        subtitle="From single crowns to full-arch implant cases, our CAD/CAM team delivers manufacturer-ready designs in the format your production needs."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={i * 0.06}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
