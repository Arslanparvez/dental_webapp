import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { NAV } from '../../data/nav'
import { services } from '../../data/services'
import { getLocation } from '../../data/locations'
import { submitForm } from '../../lib/submitForm'

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

const quickLinks = NAV.filter((item) =>
  ['Home', 'About', 'Services', 'Products', 'Gallery', 'Blog', 'Contact'].includes(item.label)
)

export function Footer() {
  const hq = getLocation('HQ')
  const year = new Date().getFullYear()

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      await submitForm('newsletter', { email })
      setStatus('success')
      setMessage('Thanks for subscribing!')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <footer className="bg-navy text-offwhite">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-2xl font-bold text-white">
              Digiart <span className="text-mint">Centre</span>
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm text-offwhite/70">
              Advanced dental CAD/CAM design, trading solutions, and premium products for
              laboratories and clinics worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-mint">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="font-body text-sm text-offwhite/70 transition-colors hover:text-mint"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-mint">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="font-body text-sm text-offwhite/70 transition-colors hover:text-mint"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-mint">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-offwhite/70">
              <li>{hq.address}</li>
              <li>
                <a
                  href={`tel:${hq.phone.replace(/\s+/g, '')}`}
                  className="transition-colors hover:text-mint"
                >
                  {hq.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${hq.email}`} className="transition-colors hover:text-mint">
                  {hq.email}
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="mt-6" noValidate>
              <label
                htmlFor="footer-newsletter-email"
                className="font-heading text-sm font-semibold text-white"
              >
                Subscribe to our newsletter
              </label>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <Input
                  id="footer-newsletter-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-describedby="footer-newsletter-status"
                  className="bg-white"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === 'loading'}
                  className="shrink-0"
                >
                  {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
                </Button>
              </div>
              <p
                id="footer-newsletter-status"
                role="status"
                aria-live="polite"
                className={
                  status === 'error'
                    ? 'mt-2 text-sm text-red-300'
                    : 'mt-2 text-sm text-mint'
                }
              >
                {message}
              </p>
            </form>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-offwhite/60 sm:flex-row">
          <p>© {year} Digiart Centre. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-mint">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-mint">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
