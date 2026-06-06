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
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }, [hash, reduced])

  return (
    <>
      <Seo
        title="Services"
        description="Digiart Centre services: CAD/CAM designing, dental laboratory solutions, digital dentistry, trading, and technical support."
        path="/services"
      />

      <PageHeader
        title="Our Services"
        subtitle="End-to-end digital dentistry — from precise CAD/CAM design and lab modernization to trading and dedicated technical support."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />

      {services.map((service, i) => {
        const tone = i % 2 === 0 ? 'white' : 'light'
        const imageRight = i % 2 === 0
        return (
          <Section key={service.slug} id={service.slug} tone={tone} className="scroll-mt-28">
            <Container>
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className={imageRight ? '' : 'lg:order-2'}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                    <Icon name={service.icon} size={28} />
                  </span>
                  <SectionHeading align="left" title={service.title} />
                  <p className="mt-4 font-body leading-relaxed text-navy/75">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Icon name="check" size={20} className="mt-0.5 shrink-0 text-teal" />
                        <span className="font-body text-sm text-navy/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <FadeIn delay={0.1} className={imageRight ? '' : 'lg:order-1'}>
                  <img
                    src={`https://picsum.photos/seed/service-${service.slug}/800/640`}
                    alt={`${service.title} at Digiart Centre`}
                    loading="lazy"
                    width={800}
                    height={640}
                    className="w-full rounded-2xl object-cover shadow-lg"
                  />
                </FadeIn>
              </div>

              <div className="mt-16">
                <h3 className="mb-10 text-center font-heading text-2xl font-bold text-navy">
                  How It Works
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
