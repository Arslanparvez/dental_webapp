import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FadeIn } from '../components/ui/FadeIn'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Hero } from '../components/sections/Hero'
import { StatsBand } from '../components/sections/StatsBand'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { FeaturedProducts } from '../components/sections/FeaturedProducts'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { GlobalPresence } from '../components/sections/GlobalPresence'
import { TestimonialsSlider } from '../components/sections/TestimonialsSlider'
import { CtaBand } from '../components/sections/CtaBand'

const aboutHighlights = [
  { icon: 'clock', text: 'Years of hands-on experience in digital dental design and trading.' },
  { icon: 'globe', text: 'International operations with a dedicated Philippines branch.' },
  { icon: 'users', text: 'Expert dental technicians and CAD/CAM designers on every case.' },
  { icon: 'cpu', text: 'Modern technology and validated digital workflows end to end.' },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Digital Dentistry, CAD/CAM Design & Dental Trading"
        description="Digiart Centre delivers advanced dental CAD/CAM design, digital dentistry workflows, trading solutions, and premium products for laboratories worldwide."
        path="/"
      />

      <Hero />

      {/* About snapshot */}
      <Section tone="light">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="About Digiart Centre"
                title="A Digital-First Dental Partner"
                subtitle="Digiart Centre combines years of dental expertise with modern digital technology. From our Head Office to our Philippines branch, our expert technicians deliver precise CAD/CAM design, trading solutions, and premium products to laboratories and clinics around the world."
              />
              <FadeIn className="mt-8">
                <Button to="/about" variant="primary">
                  Learn more about us
                </Button>
              </FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <li
                    key={item.text}
                    className="flex gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <p className="font-body text-sm leading-relaxed text-navy/75">{item.text}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <StatsBand tone="light" />
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <ServicesGrid />
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <FeaturedProducts />
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <WhyChooseUs />
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <GlobalPresence />
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <TestimonialsSlider />
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
