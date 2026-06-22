import { NavLink, Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { NAV } from '../../data/nav'
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

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Digiart Design Services — home">
      <img src="/images/logo-icon.png" alt="Digiart Design Services" width={70} height={98} className="h-9 w-auto" />
      <span className="font-heading text-lg font-bold tracking-tightest text-ink">Digiart</span>
    </Link>
  )
}

export function TopBar() {
  const { isOpen, open, close } = useDisclosure()
  const scrolled = useScrollPosition(20)

  const links = NAV.filter((item) => item.to)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-30 transition-all duration-300',
          scrolled
            ? 'border-b border-zinc-200 bg-white/90 shadow-soft backdrop-blur-xl'
            : 'border-b border-zinc-200 bg-white'
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <Wordmark />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-ink' : 'text-zinc-500 hover:text-ink'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-3.5 -bottom-px h-px bg-teal" aria-hidden="true" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button to="/contact" variant="primary" size="sm" className="hidden sm:inline-flex">
              Request a Quote
            </Button>
            <button
              type="button"
              onClick={open}
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-haspopup="dialog"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-ink transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal lg:hidden"
            >
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <SideNav isOpen={isOpen} onClose={close} />
    </>
  )
}
