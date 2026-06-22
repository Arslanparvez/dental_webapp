import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Icon } from '../components/ui/Icon'
import { FadeIn } from '../components/ui/FadeIn'
import { Reveal } from '../components/ui/Reveal'
import { PageHeader } from '../components/sections/PageHeader'
import { Timeline } from '../components/sections/Timeline'
import { GlobalPresence } from '../components/sections/GlobalPresence'
import { CtaBand } from '../components/sections/CtaBand'
import { values } from '../data/values'
import { team } from '../data/team'
import { siteImages } from '../data/siteImages'

const initials = (name) =>
  name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Digiart Design Services — a Dubai-based digital dental CAD/CAM design studio. Our story, values, team, and journey."
        path="/about"
      />

      <PageHeader
        eyebrow="About"
        title="A digital-first dental design partner"
        subtitle="Combining years of expertise with modern technology, from our studio in Bur Dubai, Dubai."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Story */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading align="left" eyebrow="Our Story" title="Built on precision, driven by technology" />
              <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-zinc-600">
                <p>
                  Founded in Dubai in 2012, Digiart Design Services began as a specialist dental CAD/CAM design
                  studio with a simple goal: bring world-class digital design to laboratories and clinics that
                  demanded a perfect fit, every time.
                </p>
                <p>
                  Over the years we have grown into a complete design partner — covering fixed, implant, removable,
                  surgical-guide, and appliance design — and added a premium zirconia materials line. Today our
                  designers support hundreds of clients across 25+ countries.
                </p>
                <p>
                  Whether you are modernizing a laboratory, scaling design capacity, or outsourcing complex cases,
                  we treat your success as our own.
                </p>
              </div>
            </div>
            <FadeIn delay={0.1}>
              <img
                src={siteImages.studio}
                alt="Digiart Design Services digital design studio at work"
                loading="lazy"
                width={800}
                height={640}
                className="aspect-[5/4] w-full rounded-2xl border border-zinc-200 object-cover shadow-soft"
              />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Mission + Vision */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red text-white">
                  <Icon name="precision" size={22} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-ink">Our Mission</h3>
                <p className="mt-3 font-body leading-relaxed text-zinc-600">
                  To empower dental laboratories and clinics with precise digital design and premium materials —
                  raising the standard of restorative care worldwide.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red text-white">
                  <Icon name="globe" size={22} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-ink">Our Vision</h3>
                <p className="mt-3 font-body leading-relaxed text-zinc-600">
                  To be the most trusted digital dentistry design partner across the region and beyond — recognized
                  for precision, innovation, and lasting partnerships.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our core values"
            subtitle="The principles that shape every case and partnership."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 0.06}>
                <Card hoverable className="h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-teal">
                    <Icon name={value.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-ink">{value.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-zinc-500">{value.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="The People Behind Digiart"
            title="Meet our team"
            subtitle="Experienced CAD/CAM designers and specialists at our Dubai studio."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={(i % 4) * 0.05}>
                <Card hoverable className="group h-full overflow-hidden">
                  <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-red-600 to-teal">
                    <span className="font-heading text-4xl font-bold tracking-tight text-white/90">
                      {initials(member.name)}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-semibold tracking-tight text-ink">{member.name}</h3>
                    <p className="mt-1 font-body text-sm text-zinc-500">{member.role}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones along the way"
            subtitle="How Digiart Design Services grew into a global digital design partner."
          />
          <div className="mt-14">
            <Timeline />
          </div>
        </Container>
      </Section>

      {/* Presence */}
      <Section tone="paper">
        <Container>
          <GlobalPresence />
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
