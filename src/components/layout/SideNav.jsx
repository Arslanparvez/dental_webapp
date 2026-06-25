import { useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { NAV } from '../../data/nav'
import { Button } from '../ui/Button'
import { getLocation } from '../../data/locations'
import { useLockBody } from '../../hooks/useLockBody'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
    </svg>
  )
}

export function SideNav({ isOpen, onClose }) {
  const reduced = useReducedMotion()
  const location = useLocation()
  const panelRef = useRef(null)
  const closeBtnRef = useRef(null)
  const previousFocusRef = useRef(null)
  const hq = getLocation('HQ')

  useLockBody(isOpen)

  const routeKey = `${location.pathname}${location.hash}`
  useEffect(() => {
    if (isOpen) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey])

  useEffect(() => {
    if (!isOpen) return
    previousFocusRef.current = document.activeElement
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0)
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(t)
      document.removeEventListener('keydown', onKeyDown)
      const prev = previousFocusRef.current
      if (prev?.focus) prev.focus()
    }
  }, [isOpen, onClose])

  const overlayT = reduced ? { duration: 0 } : { duration: 0.25 }
  const panelT = reduced ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayT}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-white lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={panelT}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
              <Link to="/" onClick={onClose} className="flex items-center" aria-label="Digiart Center — home">
                <img src="/images/logo-full.png" alt="Digiart Center" className="h-12 w-auto" />
              </Link>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              >
                <CloseIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6" aria-label="Primary">
              <ul className="space-y-1">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={onClose}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 font-heading text-base font-semibold tracking-tight transition-colors',
                          isActive ? 'bg-zinc-100 text-ink' : 'text-zinc-600 hover:bg-zinc-50 hover:text-ink'
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-zinc-200 px-6 py-6">
              <Button to="/contact" variant="primary" size="md" className="w-full" onClick={onClose}>
                Request a Quote
              </Button>
              <Button to="/contact" variant="outline" size="md" className="mt-3 w-full" onClick={onClose}>
                Send Your Case
              </Button>
              <div className="mt-5 space-y-1 text-sm text-zinc-500">
                <a href={`tel:${hq.phone.replace(/\s+/g, '')}`} className="block transition hover:text-teal">
                  {hq.phone}
                </a>
                <a href={`mailto:${hq.email}`} className="block transition hover:text-teal">
                  {hq.email}
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
