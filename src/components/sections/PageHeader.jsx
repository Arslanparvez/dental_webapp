import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { FadeIn } from '../ui/FadeIn'

// Dark "ink" page header band with a radial teal glow and faint grid.
export function PageHeader({ title, subtitle, breadcrumb, eyebrow }) {
  return (
    <header className="relative overflow-hidden bg-metallic-red-panel pb-20 pt-36 text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-[0.15]" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-24 h-64 bg-[radial-gradient(60%_140%_at_50%_0%,rgba(255,255,255,0.12),transparent)]"
      />
      <Container className="relative">
        <FadeIn>
          {breadcrumb && breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
                {breadcrumb.map((crumb, i) => {
                  const last = i === breadcrumb.length - 1
                  return (
                    <li key={crumb.label} className="flex items-center gap-2">
                      {crumb.to && !last ? (
                        <Link to={crumb.to} className="transition hover:text-mint">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span aria-current={last ? 'page' : undefined} className={last ? 'text-white' : undefined}>
                          {crumb.label}
                        </span>
                      )}
                      {!last && <span aria-hidden="true" className="text-white/30">/</span>}
                    </li>
                  )
                })}
              </ol>
            </nav>
          )}
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tightest md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-white/65">{subtitle}</p>
          )}
        </FadeIn>
      </Container>
    </header>
  )
}
