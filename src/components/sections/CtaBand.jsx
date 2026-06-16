import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { FadeIn } from '../ui/FadeIn'

export function CtaBand() {
  return (
    <Section tone="ink" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-[0.12]" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,166,166,0.28),transparent)] blur-2xl"
      />
      <Container className="relative">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-balance font-heading text-3xl font-bold leading-[1.1] tracking-tightest text-white md:text-[2.6rem]">
            Let&apos;s design better smiles together
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-white/65">
            Partner with Digiart for precise CAD/CAM design, premium zirconia, fast turnaround, and
            senior-reviewed quality on every case.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="accent" size="lg" withArrow>
              Request a Quote
            </Button>
            <Button to="/materials" variant="outline-light" size="lg">
              Explore Materials
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
