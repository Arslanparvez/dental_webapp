import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { NAV } from '../../data/nav'
import { getLocation } from '../../data/locations'

const socials = [
  { label: 'Facebook', href: '#', path: 'M13.5 9H16l.5-3h-3V4.2c0-.8.3-1.3 1.5-1.3H16V.2C15.6.1 14.6 0 13.5 0 11.2 0 9.7 1.4 9.7 4v2H7v3h2.7v8h3.8V9z' },
  { label: 'Instagram', href: '#', path: 'M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 5 5 .06 1.3.07 1.6.07 4.8s0 3.5-.07 4.8c-.15 3.3-1.7 4.8-5 5-1.3.06-1.6.07-4.9.07s-3.6 0-4.9-.07c-3.3-.15-4.8-1.7-5-5C2.04 15.6 2 15.2 2 12s0-3.5.07-4.8c.15-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.8-10.9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' },
  { label: 'YouTube', href: '#', path: 'M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8zM10 15V9l5 3-5 3z' },
  { label: 'WhatsApp', href: '#', path: 'M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.7.8-2.8-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 01-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.2 1.6 2.5 4 3.5.5.2 1 .4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.3-.4z' },
]

export function Footer() {
  const hq = getLocation('HQ')
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-metallic-red-panel text-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-32 h-64 bg-[radial-gradient(50%_120%_at_50%_0%,rgba(255,255,255,0.10),transparent)]"
      />
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold tracking-tightest text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ink">
                <span className="text-base font-black">D</span>
              </span>
              Digiart Design Services
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              A Dubai-based digital dental CAD/CAM design studio — moving the world of dentistry in a digital way for
              laboratories and clinics worldwide.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-teal hover:bg-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/40">Pages</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-white/65 transition-colors hover:text-mint">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/40">Get in touch</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li>{hq.address}</li>
              <li>
                <a href={`tel:${hq.phone.replace(/\s+/g, '')}`} className="transition-colors hover:text-mint">
                  {hq.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${hq.email}`} className="transition-colors hover:text-mint">
                  {hq.email}
                </a>
              </li>
              <li className="text-white/45">{hq.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
          <p>© {year} Digiart Design Services. All rights reserved.</p>
          <p>Move the world of dentistry in a digital way.</p>
        </div>
      </Container>
    </footer>
  )
}
