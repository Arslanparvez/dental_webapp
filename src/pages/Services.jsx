import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { Reveal } from '../components/ui/Reveal'
import { PageHeader } from '../components/sections/PageHeader'
import { ProcessFlow } from '../components/sections/ProcessFlow'
import { CtaBand } from '../components/sections/CtaBand'
import { serviceCategories, getServicesByGroup } from '../data/services'
import { useReducedMotion } from '../hooks/useReducedMotion'

const process = [
  { step: 1, title: 'Receive Case', text: 'You upload scans, records, and the prescription details.' },
  { step: 2, title: 'Design', text: 'Our technicians design the restoration to your clinical and esthetic requirements.' },
  { step: 3, title: 'Quality Check', text: 'A senior designer reviews fit, margins, occlusion, and anatomy before approval.' },
  { step: 4, title: 'Deliver', text: 'Production-ready files are returned in your preferred format, ready to mill or print.' },
]

function ServiceTile({ service }) {
  return (
    <div
      id={service.slug}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lift scroll-mt-28"
    >
      <div className="aspect-[5/4] overflow-hidden bg-zinc-50">
        <img
          src={service.image}
          alt={`${service.title} — Digiart Design Services`}
          loading="lazy"
          width={800}
          height={640}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold tracking-tight text-ink">{service.title}</h3>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-zinc-500">{service.description}</p>
        {service.features && (
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-4">
            {service.features.map((f) => (
              <Badge key={f} tone="neutral">{f}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

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
        description="Digiart Design Services: crown & bridge, dental bars, implant screw-retained, Emax veneer, partial frame, diagnostic wax-up, model, denture, clear retainer, and bite-splint CAD/CAM design."
        path="/services"
      />

      <PageHeader
        eyebrow="Services"
        title="End-to-end dental CAD/CAM design"
        subtitle="Fixed, removable, surgical-guide, and appliance designs — returned manufacturer-ready in your preferred format."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      {serviceCategories.map((cat, i) => {
        const items = getServicesByGroup(cat.slug)
        if (!items.length) return null
        return (
          <Section key={cat.slug} id={cat.slug} tone={i % 2 === 0 ? 'white' : 'paper'} className="scroll-mt-24">
            <Container>
              <SectionHeading align="left" eyebrow={cat.name} title={cat.name} subtitle={cat.description} />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, j) => (
                  <Reveal key={service.slug} delay={(j % 3) * 0.06}>
                    <ServiceTile service={service} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </Section>
        )
      })}

      <Section tone="white">
        <Container>
          <SectionHeading eyebrow="Workflow" title="How it works" subtitle="A simple, predictable workflow from case upload to production-ready files." />
          <div className="mt-14">
            <ProcessFlow steps={process} />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
