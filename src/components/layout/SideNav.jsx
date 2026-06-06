import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { NAV } from '../../data/nav'
import { locations } from '../../data/locations'
import { useLockBody } from '../../hooks/useLockBody'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
    </svg>
  )
}

function ChevronIcon({ open, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn('transition-transform duration-300', open && 'rotate-90')}
      {...props}
    >
      <polyline points="9 6 15 12 9 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M13.5 9H16l.5-3h-3V4.2c0-.8.3-1.3 1.5-1.3H16V.2C15.6.1 14.6 0 13.5 0 11.2 0 9.7 1.4 9.7 4v2H7v3h2.7v8h3.8V9z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 5 5 .06 1.3.07 1.6.07 4.8s0 3.5-.07 4.8c-.15 3.3-1.7 4.8-5 5-1.3.06-1.6.07-4.9.07s-3.6 0-4.9-.07c-3.3-.15-4.8-1.7-5-5C2.04 15.6 2 15.2 2 12s0-3.5.07-4.8c.15-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.8-10.9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9V9z',
  },
  {
    label: 'WhatsApp',
    href: '#',
    path: 'M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.7.8-2.8-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 01-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.2 1.6 2.5 4 3.5.5.2 1 .4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.3-.4z',
  },
]

export function SideNav({ isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const reduced = useReducedMotion()
  const location = useLocation()
  const panelRef = useRef(null)
  const closeBtnRef = useRef(null)
  const previousFocusRef = useRef(null)

  useLockBody(isOpen)

  // Close on route change while open.
  const routeKey = `${location.pathname}${location.search}${location.hash}`
  useEffect(() => {
    if (isOpen) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey])

  // Reset expanded item whenever the drawer closes.
  useEffect(() => {
    if (!isOpen) setActiveIndex(null)
  }, [isOpen])

  // Escape to close + simple focus trap; restore focus on close.
  useEffect(() => {
    if (!isOpen) return
    previousFocusRef.current = document.activeElement

    // Move focus into the panel.
    const focusTimer = window.setTimeout(() => closeBtnRef.current?.focus(), 0)

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusables = panel.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      const previous = previousFocusRef.current
      if (previous && typeof previous.focus === 'function') previous.focus()
    }
  }, [isOpen, onClose])

  const toggleIndex = (index) =>
    setActiveIndex((current) => (current === index ? null : index))

  const overlayTransition = reduced ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }
  const panelTransition = reduced ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="sidenav-overlay"
            className="fixed inset-0 z-40 bg-navy/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            key="sidenav-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="fixed top-0 left-0 z-50 flex h-full w-full flex-col overflow-y-auto bg-offwhite md:w-[46vw] md:max-w-xl"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={panelTransition}
          >
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-black/10 px-6 py-5 sm:px-8">
              <Link
                to="/"
                onClick={onClose}
                className="font-heading text-xl font-bold text-navy"
              >
                Digiart <span className="text-teal">Centre</span>
              </Link>

              <div className="relative ml-auto hidden flex-1 sm:block md:max-w-[14rem]">
                <SearchIcon
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/50"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  className="w-full rounded-full border border-black/10 bg-white py-2 pl-9 pr-4 font-body text-sm text-navy transition focus:outline-none focus:ring-2 focus:ring-teal"
                />
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-navy transition hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:ml-0"
              >
                <CloseIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Primary nav */}
            <nav className="flex-1 px-6 py-8 sm:px-8" aria-label="Primary">
              <ul className="space-y-1">
                {NAV.map((item, index) => {
                  const hasChildren = Array.isArray(item.children) && item.children.length > 0
                  const isActive = activeIndex === index

                  if (!hasChildren) {
                    return (
                      <li key={item.label}>
                        <Link
                          to={item.to}
                          onClick={onClose}
                          className="block py-2 font-heading text-2xl font-semibold text-navy transition-colors hover:text-teal md:text-3xl"
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  }

                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => toggleIndex(index)}
                        aria-expanded={isActive}
                        className="flex w-full items-center justify-between gap-3 py-2 text-left font-heading text-2xl font-semibold text-navy transition-colors hover:text-teal md:text-3xl"
                      >
                        <span>{item.label}</span>
                        <ChevronIcon
                          open={isActive}
                          className="h-5 w-5 shrink-0 text-teal"
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.ul
                            key={`${item.label}-children`}
                            initial={reduced ? false : { height: 0, opacity: 0 }}
                            animate={reduced ? {} : { height: 'auto', opacity: 1 }}
                            exit={reduced ? {} : { height: 0, opacity: 0 }}
                            transition={reduced ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="ml-1 mt-1 mb-3 space-y-0.5 border-l-2 border-teal/40 pl-5">
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    to={child.to}
                                    onClick={onClose}
                                    className="block py-1.5 font-body text-base text-navy/80 transition-colors hover:text-teal"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div className="mt-auto border-t border-black/10 bg-white px-6 py-6 sm:px-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {locations.map((loc) => (
                  <div key={loc.id}>
                    <p className="font-heading text-sm font-semibold text-navy">{loc.name}</p>
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                      className="mt-1 block font-body text-sm text-navy/70 transition-colors hover:text-teal"
                    >
                      {loc.phone}
                    </a>
                    <a
                      href={`mailto:${loc.email}`}
                      className="block font-body text-sm text-navy/70 transition-colors hover:text-teal"
                    >
                      {loc.email}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy transition hover:bg-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
