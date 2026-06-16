import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FadeIn } from '../components/ui/FadeIn'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Hero } from '../components/sections/Hero'
import { StatsBand } from '../components/sections/StatsBand'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { FeaturedMaterials } from '../components/sections/FeaturedMaterials'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { TestimonialsSlider } from '../components/sections/TestimonialsSlider'
import { CtaBand } from '../components/sections/CtaBand'

const highlights = [
  { icon: 'clock', text: 'Years of hands-on digital dental CAD/CAM design experience.' },
  { icon: 'globe', text: 'Trusted by laboratories and clinics across 25+ countries.' },
  { icon: 'users', text: 'Expert designers with a senior review on every case.' },
  { icon: 'cpu', text: 'exocad & 3Shape workflows with open-format output.' },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Dental CAD/CAM Design Studio"
        description="Digiart Design Services is a Dubai-based digital dental CAD/CAM design studio — crown & bridge, implant, All-on-X, removable, and surgical-guide design, plus premium zirconia materials."
        path="/"
      />

      <Hero />

      {/* About snapshot */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="About Digiart"
                title="A digital-first design partner"
                subtitle="We combine years of dental expertise with modern technology. From our Bur Dubai studio, our CAD/CAM designers deliver precise crown & bridge, implant, removable, and surgical-guide designs to labs and clinics worldwide."
              />
              <FadeIn className="mt-8">
                <Button to="/about" variant="outline" withArrow>
                  Learn more about us
                </Button>
              </FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li
                    key={item.text}
                    className="flex gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-teal">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <p className="font-body text-sm leading-relaxed text-zinc-600">{item.text}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Stats on a dark band */}
      <Section tone="ink" className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-[0.1]" />
        <Container className="relative">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-balance font-heading text-2xl font-bold tracking-tightest text-white md:text-3xl">
              The numbers behind the work
            </h2>
          </Reveal>
          <StatsBand tone="dark" />
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <ServicesGrid />
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <FeaturedMaterials />
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <WhyChooseUs />
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <TestimonialsSlider />
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
