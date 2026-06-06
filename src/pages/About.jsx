import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Icon } from '../components/ui/Icon'
import { FadeIn } from '../components/ui/FadeIn'
import { Reveal } from '../components/ui/Reveal'
import { PageHeader } from '../components/sections/PageHeader'
import { Timeline } from '../components/sections/Timeline'
import { GlobalPresence } from '../components/sections/GlobalPresence'
import { values } from '../data/values'
import { team } from '../data/team'

const techHighlights = [
  {
    icon: 'cpu',
    title: 'Enterprise Design Software',
    text: 'Industry-leading CAD platforms power precise, repeatable restoration design across our studios.',
  },
  {
    icon: 'scan',
    title: 'Digital Capture',
    text: 'Intraoral and desktop scanning integration brings every case into a fully digital pipeline.',
  },
  {
    icon: 'cube',
    title: 'Milling & Printing',
    text: 'Validated milling parameters and 3D printing workflows turn designs into accurate physical results.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Digiart Centre — our story, mission, values, team, and global journey in digital dentistry and dental trading."
        path="/about"
      />

      <PageHeader
        title="About Digiart Centre"
        subtitle="A digital-first dental partner combining years of expertise with modern technology, from our Dubai head office to our Philippines branch."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
      />

      {/* Company story */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="Built on Precision, Driven by Technology"
              />
              <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-navy/75">
                <p>
                  Founded in Dubai in 2012, Digiart Centre began as a specialist dental CAD/CAM
                  design studio with a simple goal: bring world-class digital dentistry to
                  laboratories that demanded a perfect fit, every time.
                </p>
                <p>
                  Over the years we have grown into a full-service partner — adding a trading
                  division, a complete digital dentistry suite, and a dedicated Philippines branch
                  to serve Southeast Asia. Today our expert technicians and designers support
                  hundreds of clients across 25+ countries.
                </p>
                <p>
                  Whether you are modernizing a laboratory, sourcing premium materials, or
                  outsourcing complex design work, we treat your success as our own.
                </p>
              </div>
            </div>
            <FadeIn delay={0.1}>
              <img
                src="https://picsum.photos/seed/about-story/800/640"
                alt="Digiart Centre digital design studio at work"
                loading="lazy"
                width={800}
                height={640}
                className="w-full rounded-2xl object-cover shadow-lg"
              />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Mission + Vision */}
      <Section tone="light">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <Card className="h-full p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Icon name="precision" size={24} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">Our Mission</h3>
                <p className="mt-3 font-body leading-relaxed text-navy/75">
                  To empower dental laboratories and clinics with precise digital design, premium
                  products, and dependable support — raising the standard of restorative care
                  worldwide.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Icon name="globe" size={24} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">Our Vision</h3>
                <p className="mt-3 font-body leading-relaxed text-navy/75">
                  To be the most trusted digital dentistry partner across the region and beyond,
                  recognized for precision, innovation, and lasting partnerships.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Core values */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="The principles that shape every case, product, and partnership."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.05}>
                <Card hoverable className="h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Icon name={value.icon} size={24} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-navy/70">
                    {value.text}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="The People Behind Digiart"
            title="Meet Our Team"
            subtitle="Experienced technicians, designers, and specialists across our offices."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={(i % 4) * 0.05}>
                <Card hoverable className="group h-full overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      loading="lazy"
                      width={400}
                      height={400}
                      className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-semibold text-navy">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-body text-sm text-navy/70">{member.role}</p>
                    <Badge tone={member.location === 'HQ' ? 'navy' : 'mint'} className="mt-3">
                      {member.location === 'HQ' ? 'Head Office' : 'Philippines'}
                    </Badge>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technology & infrastructure */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Technology & Infrastructure"
                title="A Fully Digital Pipeline"
                subtitle="From scan to finished restoration, our validated digital workflow connects software, milling, and printing into one seamless process — reducing remakes and accelerating turnaround."
              />
            </div>
            <div className="grid gap-5">
              {techHighlights.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <Card className="flex gap-4 p-6">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      <Icon name={item.icon} size={24} />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-navy/70">
                        {item.text}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Journey timeline */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones Along the Way"
            subtitle="A timeline of how Digiart Centre grew into a global digital dentistry partner."
          />
          <div className="mt-14">
            <Timeline />
          </div>
        </Container>
      </Section>

      {/* Global presence */}
      <Section tone="white">
        <Container>
          <GlobalPresence />
        </Container>
      </Section>
    </>
  )
}
