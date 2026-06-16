import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Icon } from '../components/ui/Icon'
import { FadeIn } from '../components/ui/FadeIn'
import { PageHeader } from '../components/sections/PageHeader'
import { ProcessFlow } from '../components/sections/ProcessFlow'
import { CtaBand } from '../components/sections/CtaBand'
import { services } from '../data/services'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Services() {
  const { hash } = useLocation()
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }, [hash, reduced])

  return (
    <>
      <Seo
        title="Services"
        description="Digiart Design Services: fixed prosthetic, implant & All-on-X, removable, surgical guide, and splint & appliance CAD/CAM design."
        path="/services"
      />

      <PageHeader
        eyebrow="Services"
        title="End-to-end dental CAD/CAM design"
        subtitle="Fixed, implant, removable, surgical-guide, and appliance designs — returned manufacturer-ready in your preferred format."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      {services.map((service, i) => {
        const tone = i % 2 === 0 ? 'white' : 'paper'
        const imageRight = i % 2 === 0
        return (
          <Section key={service.slug} id={service.slug} tone={tone} className="scroll-mt-24">
            <Container>
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className={imageRight ? '' : 'lg:order-2'}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white">
                    <Icon name={service.icon} size={26} />
                  </span>
                  <SectionHeading align="left" title={service.title} />
                  <p className="mt-4 font-body leading-relaxed text-zinc-600">{service.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Icon name="check" size={18} className="mt-0.5 shrink-0 text-teal" />
                        <span className="font-body text-sm text-zinc-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <FadeIn delay={0.1} className={imageRight ? '' : 'lg:order-1'}>
                  <img
                    src={service.image}
                    alt={`${service.title} at Digiart Design Services`}
                    loading="lazy"
                    width={800}
                    height={640}
                    className="aspect-[5/4] w-full rounded-2xl border border-zinc-200 object-cover shadow-soft"
                  />
                </FadeIn>
              </div>

              <div className="mt-16">
                <h3 className="mb-10 text-center font-heading text-xl font-bold tracking-tight text-ink">
                  How it works
                </h3>
                <ProcessFlow steps={service.process} />
              </div>
            </Container>
          </Section>
        )
      })}

      <CtaBand />
    </>
  )
}
