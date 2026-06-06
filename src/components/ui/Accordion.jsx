import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Accordion({ items = [], allowMultiple = false }) {
  const reduced = useReducedMotion()
  const [open, setOpen] = useState([])

  const isOpen = (id) => open.includes(id)

  const toggle = (id) => {
    setOpen((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      return allowMultiple ? [...prev, id] : [id]
    })
  }

  return (
    <div className="divide-y divide-black/10 rounded-2xl border border-black/5 bg-white">
      {items.map((item) => {
        const expanded = isOpen(item.id)
        const headerId = `accordion-header-${item.id}`
        const panelId = `accordion-panel-${item.id}`

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading font-semibold text-navy transition hover:bg-lightgray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-inset"
              >
                <span>{item.title}</span>
                <svg
                  className={cn('shrink-0 transition-transform duration-200', expanded && 'rotate-180')}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </h3>

            {reduced ? (
              expanded && (
                <div id={panelId} role="region" aria-labelledby={headerId} className="px-5 pb-4 font-body text-navy/80">
                  {item.content}
                </div>
              )
            ) : (
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 font-body text-navy/80">{item.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        )
      })}
    </div>
  )
}
