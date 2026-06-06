import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { useDisclosure } from '../../hooks/useDisclosure'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { SideNav } from './SideNav'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="3" y1="7" x2="21" y2="7" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
      <line x1="3" y1="17" x2="21" y2="17" strokeLinecap="round" />
    </svg>
  )
}

export function TopBar() {
  const { isOpen, open, close } = useDisclosure()
  const scrolled = useScrollPosition(40)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-30 transition-colors duration-300',
          scrolled ? 'bg-navy/95 text-white shadow-md backdrop-blur' : 'bg-transparent text-navy'
        )}
      >
        <Container className="flex items-center justify-between py-4">
          {/* Left: boxed menu toggle + logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={open}
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-haspopup="dialog"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-navy shadow-sm transition hover:bg-lightgray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <Link
              to="/"
              className={cn(
                'font-heading text-xl font-bold tracking-tight transition-colors sm:text-2xl',
                scrolled ? 'text-white' : 'text-navy'
              )}
            >
              Digiart <span className="text-teal">Centre</span>
            </Link>
          </div>

          {/* Right: primary CTA */}
          <Button
            variant="primary"
            size="sm"
            to="/contact"
            className="hidden sm:inline-flex"
          >
            Request a Quote
          </Button>
        </Container>
      </header>

      <SideNav isOpen={isOpen} onClose={close} />
    </>
  )
}
