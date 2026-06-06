import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { TopBar } from './TopBar'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'
import { ScrollToTop } from './ScrollToTop'
import { ScrollRestoration } from '../ScrollRestoration'
import { Loader } from '../ui/Loader'
import { pageTransition } from '../../lib/motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Layout() {
  const location = useLocation()
  const reduced = useReducedMotion()

  return (
    <>
      <ScrollRestoration />
      <TopBar />
      <main className="min-h-screen">
        <AnimatePresence mode="wait" initial={false}>
          {reduced ? (
            <div key={location.pathname}>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
          ) : (
            <motion.div
              key={location.pathname}
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
            >
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
