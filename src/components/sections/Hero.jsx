import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { FloatingShapes } from '../ui/FloatingShapes'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden text-offwhite">
      {/* Animated gradient base */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-navy via-[#0c3a5e] to-teal',
          !reduced && 'bg-[length:200%_200%] animate-gradient-shift'
        )}
      />
      {/* Faint dental/lab image layer */}
      <img
        src="https://picsum.photos/seed/digiart-hero/1600/900"
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/40" />
      <FloatingShapes />

      <Container className="relative py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-mint/40 bg-white/10 px-4 py-1.5 text-sm font-semibold text-mint backdrop-blur">
            Digital Dentistry • CAD/CAM • Trading
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
            Transforming Digital Dentistry Through Precision &amp; Innovation
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-offwhite/85 md:text-xl">
            Advanced Dental CAD/CAM Design, Trading Solutions, and Premium Dental Products for
            Laboratories Worldwide.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button
              to="/products"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
