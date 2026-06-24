import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { FadeIn } from '../components/ui/FadeIn'
import { Icon } from '../components/ui/Icon'
import { PageHeader } from '../components/sections/PageHeader'
import { ProcessFlow } from '../components/sections/ProcessFlow'
import { CtaBand } from '../components/sections/CtaBand'
import { serviceCategories, getServicesByGroup, offerings } from '../data/services'
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
        description="Digiart Design Services: crown & bridge, dental bars, implant screw-retained, Emax veneer, partial frame, diagnostic wax-up, model, denture, clear retainer, and bite-splint CAD/CAM design — moving the world of dentistry in a digital way."
        path="/services"
      />

      <PageHeader
        eyebrow="Services"
        title="Move the world of dentistry in a digital way"
        subtitle="Design solutions with an advanced digital workflow — your digital support to take your work to the next level, A to Z."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      {/* About — What is Digiart Dental Design */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <img
                src="/images/home/hero-1.jpg"
                alt="Digiart digital dental design workflow"
                loading="lazy"
                width={800}
                height={600}
                className="aspect-[4/3] w-full rounded-2xl border border-zinc-200 object-cover shadow-soft"
              />
            </FadeIn>
            <div>
              <SectionHeading align="left" eyebrow="About" title="What is Digiart Dental Design" />
              <p className="mt-4 font-body leading-relaxed text-zinc-600">
                Digiart Design Service provides a wide range of customized solutions that help you grow and save you
                time. Our aesthetic dental solutions cover all aspects of digital dentistry — such as crown and bridges,
                orthodontics, veneers, implant milling, mouth guards, Valplast, and wax-up.
              </p>
              <p className="mt-3 font-body text-sm font-semibold text-zinc-500">License No. 1233610</p>
              <div className="mt-8">
                <Button to="/materials" variant="outline" size="md" withArrow>
                  Explore Materials
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits of using Digiart Design Service — 4 category cards */}
      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="Benefits of using Digiart Design Service"
            subtitle="Four families of fully digital design — pick a category to jump to the full range of services."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 4) * 0.06}>
                <Link
                  to={`/services#${cat.slug}`}
                  className="group relative block h-80 overflow-hidden rounded-2xl border border-zinc-200 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                >
                  {/* Image (default state) */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full bg-zinc-50 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Title bar (always visible) */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-5 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="font-heading text-lg font-bold tracking-tight text-white">{cat.name}</h3>
                  </div>
                  {/* Data revealed on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-red/95 p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                      <Icon name={cat.icon} size={22} />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-white">{cat.name}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-white/90 line-clamp-5">{cat.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                      Learn More
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Animation video — exocad full-arch design */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="In Action"
            title="See our full-arch digital workflow"
            subtitle="A look at our exocad full-arch design — the digital craft behind every Digiart restoration."
          />
          <FadeIn className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-ink shadow-lift">
              <video
                className="pointer-events-none aspect-video w-full object-cover"
                src="/videos/exocad-full-arch-design.mp4"
                poster="/images/home/hero-2.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Digiart exocad full-arch design animation"
              />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Our Services — all designs grouped by category */}
      <Section tone="paper">
        <Container>
          <SectionHeading eyebrow="Our Services" title="Our Services" subtitle="The full range of designs we deliver, manufacturer-ready in your preferred format." />
        </Container>
      </Section>

      {serviceCategories.map((cat, i) => {
        const items = getServicesByGroup(cat.slug)
        if (!items.length) return null
        return (
          <Section key={cat.slug} id={cat.slug} tone={i % 2 === 0 ? 'white' : 'paper'} className="scroll-mt-24 !pt-0">
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

      {/* Our offerings */}
      <Section tone="ink">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Our Offerings"
            title="Our offerings"
            subtitle="From everyday single units to complex full-arch implant cases — we have got you covered."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-ink">
                    <Icon name={o.icon} size={24} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-white">{o.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/65">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section tone="white">
        <Container>
          <SectionHeading eyebrow="Workflow" title="How it works" subtitle="A simple, predictable workflow from case upload to production-ready files." />
          <div className="mt-14">
            <ProcessFlow steps={process} />
          </div>
        </Container>
      </Section>

      {/* Need help */}
      <Section tone="white" className="!pt-0">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red text-white">
                  <Icon name="headset" size={24} />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-ink">Need help?</h2>
                <p className="mt-3 font-body leading-relaxed text-zinc-600">
                  We are elevating dentistry by giving dentists, labs, and manufacturers the digital support they need to
                  take control of their production, digitize their existing workflows, and personalize their CAD designs.
                </p>
                <div className="mt-6">
                  <Button to="/contact" variant="primary" size="md" withArrow>
                    Contact Us Now
                  </Button>
                </div>
              </div>
              <FadeIn>
                <img
                  src="/images/home/need-help.png"
                  alt="Digiart digital dental support"
                  loading="lazy"
                  width={600}
                  height={450}
                  className="w-full rounded-2xl object-contain"
                />
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
