import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { FloatingShapes } from '../ui/FloatingShapes'
import { FadeIn } from '../ui/FadeIn'

export function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <header className="relative overflow-hidden bg-navy bg-gradient-to-br from-navy to-[#10395c] pb-16 pt-32 text-offwhite">
      <FloatingShapes />
      <Container className="relative">
        <FadeIn>
          {breadcrumb && breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-offwhite/70">
                {breadcrumb.map((crumb, i) => {
                  const last = i === breadcrumb.length - 1
                  return (
                    <li key={crumb.label} className="flex items-center gap-2">
                      {crumb.to && !last ? (
                        <Link to={crumb.to} className="transition hover:text-mint">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span aria-current={last ? 'page' : undefined} className={last ? 'text-mint' : undefined}>
                          {crumb.label}
                        </span>
                      )}
                      {!last && <span aria-hidden="true">/</span>}
                    </li>
                  )
                })}
              </ol>
            </nav>
          )}
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl font-body text-lg text-offwhite/80">{subtitle}</p>
          )}
        </FadeIn>
      </Container>
    </header>
  )
}
