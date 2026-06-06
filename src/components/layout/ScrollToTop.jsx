import { AnimatePresence, motion } from 'framer-motion'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function ArrowUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="12" y1="19" x2="12" y2="5" strokeLinecap="round" />
      <polyline points="6 11 12 5 18 11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ScrollToTop() {
  const visible = useScrollPosition(400)
  const reduced = useReducedMotion()

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  const transition = reduced ? { duration: 0 } : { duration: 0.25, ease: 'easeOut' }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={transition}
          className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-colors hover:bg-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
