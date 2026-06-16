import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const EASE = [0.22, 1, 0.36, 1]

function Word({ children, delay, reduced }) {
  if (reduced) return <span>{children}</span>
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  )
}

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Backdrop */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-[0.12]" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,166,166,0.30),transparent)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <Container className="relative flex min-h-[88vh] flex-col items-center justify-center py-32 text-center">
        <motion.span
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-mint backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
          Digital Dental CAD/CAM Design · Dubai
        </motion.span>

        <h1 className="mt-8 max-w-4xl text-balance font-heading text-5xl font-bold leading-[1.02] tracking-tightest sm:text-6xl md:text-7xl">
          <Word delay={0.05} reduced={reduced}>Move&nbsp;dentistry</Word>{' '}
          <Word delay={0.13} reduced={reduced}>the</Word>{' '}
          <span className="bg-gradient-to-r from-mint to-teal bg-clip-text text-transparent">
            <Word delay={0.21} reduced={reduced}>digital&nbsp;way.</Word>
          </span>
        </h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
          className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-white/65 md:text-xl"
        >
          A digital dental design studio delivering precise crown &amp; bridge, implant, All-on-X, removable,
          and surgical-guide designs — plus premium zirconia materials — for labs and clinics worldwide.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.42 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button to="/contact" variant="accent" size="lg" withArrow>
            Request a Quote
          </Button>
          <Button to="/materials" variant="outline-light" size="lg">
            Explore Materials
          </Button>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/45"
        >
          <span>500+ clients worldwide</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/25" />
          <span>25+ countries</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/25" />
          <span>exocad &amp; 3Shape</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/25" />
          <span>24–48 hr turnaround</span>
        </motion.div>
      </Container>
    </section>
  )
}
