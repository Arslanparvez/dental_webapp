import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { FloatingShapes } from '../ui/FloatingShapes'
import { FadeIn } from '../ui/FadeIn'

export function CtaBand() {
  return (
    <Section tone="navy" className="relative overflow-hidden">
      <FloatingShapes />
      <Container className="relative">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="font-heading text-3xl font-bold text-offwhite md:text-4xl">
            Let&apos;s Build Better Smiles Together
          </h2>
          <p className="mt-4 font-body text-lg text-offwhite/80">
            Partner with Digiart Centre for precision CAD/CAM design, premium products, and
            dependable global support.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Request Consultation
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
