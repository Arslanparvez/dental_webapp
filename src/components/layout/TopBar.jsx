import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { useDisclosure } from '../../hooks/useDisclosure'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { SideNav } from './SideNav'

function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" strokeLinecap="round" />
    </svg>
  )
}

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
          'fixed inset-x-0 top-0 z-30 text-white transition-colors duration-300',
          scrolled ? 'bg-navy/95 shadow-md backdrop-blur' : 'bg-transparent'
        )}
      >
        <Container className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            Digiart <span className="text-mint">Centre</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={open}
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            >
              <SearchIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <Button
              variant="primary"
              size="sm"
              to="/contact"
              className="hidden sm:inline-flex"
            >
              Request a Quote
            </Button>

            <button
              type="button"
              onClick={open}
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-haspopup="dialog"
              className="flex items-center gap-2 rounded-full px-3 py-2 font-heading text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            >
              <span>Menu</span>
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <SideNav isOpen={isOpen} onClose={close} />
    </>
  )
}
