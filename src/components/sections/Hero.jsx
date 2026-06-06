import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-white">
      <Container className="relative z-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-navy/40">
            Welcome to Digiart Centre
          </p>
          <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            CAD/CAM &bull; Trading &bull; Dental Products
          </p>

          <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.04] tracking-tight text-navy sm:text-6xl md:text-8xl">
            We shape
            <br />
            <span className="italic">better smiles.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl font-body text-lg text-navy/65 md:text-xl">
            Advanced Dental CAD/CAM Design, Trading Solutions, and Premium Dental Products for
            laboratories worldwide.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button to="/products" variant="outline" size="lg">
              Explore Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
