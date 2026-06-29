import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const EASE = [0.22, 1, 0.36, 1]

const INTERVAL = 3400

// Premium auto-advancing product showcase shown on the side of the hero
// (desktop only). Frosted-glass card, clean product stage, caption + progress.
function ProductStepper({ items, side, reduced, delay }) {
  const isLeft = side === 'left'
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (reduced || items.length < 2) return
    const id = window.setInterval(() => setIdx((p) => (p + 1) % items.length), INTERVAL)
    return () => window.clearInterval(id)
  }, [items.length, reduced])

  const item = items[idx]

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, x: isLeft ? -28 : 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={`absolute top-1/2 z-20 hidden -translate-y-1/2 xl:block ${
        isLeft ? 'left-6 2xl:left-16' : 'right-6 2xl:right-16'
      }`}
    >
      <div className="w-56 overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 backdrop-blur-md 2xl:w-64">
        {/* Product stage */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white to-zinc-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              src={item.src}
              alt={item.name}
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? {} : { opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute inset-0 h-full w-full object-contain p-7"
            />
          </AnimatePresence>
        </div>
        {/* Caption */}
        <div className="flex items-center justify-between gap-2 px-4 py-3">
          <span className="truncate font-heading text-sm font-semibold tracking-tight text-white">{item.name}</span>
          <span className="shrink-0 text-[11px] font-semibold tabular-nums text-white/45">
            {String(idx + 1).padStart(2, '0')}/{String(items.length).padStart(2, '0')}
          </span>
        </div>
        {/* Auto-advance progress */}
        <div className="h-1 w-full bg-white/10">
          <motion.div
            key={idx}
            className="h-full bg-red"
            style={{ transformOrigin: 'left' }}
            initial={reduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduced ? 0 : INTERVAL / 1000, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

const LEFT_ITEMS = [
  { src: '/images/services/crown-bridge.png', name: 'Crown & Bridge' },
  { src: '/images/services/emax-veneer.png', name: 'Emax Veneer' },
  { src: '/images/services/denture.png', name: 'Denture' },
  { src: '/images/services/partial-frame.png', name: 'Partial Frame' },
]
const RIGHT_ITEMS = [
  { src: '/images/services/implant-screw-retain.png', name: 'Implant Screw-Retained' },
  { src: '/images/services/model.png', name: 'Model' },
  { src: '/images/services/bite-splint.png', name: 'Bite Splint' },
  { src: '/images/services/clear-retainer.png', name: 'Clear Retainer' },
]

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
    <section className="relative overflow-hidden bg-metallic-red-panel text-white">
      {/* Backdrop */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-[0.12]" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Floating product showcases — auto-cycling, desktop only */}
      <ProductStepper side="left" items={LEFT_ITEMS} reduced={reduced} delay={0.5} />
      <ProductStepper side="right" items={RIGHT_ITEMS} reduced={reduced} delay={0.65} />

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
