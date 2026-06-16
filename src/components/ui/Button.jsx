import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl font-heading font-semibold tracking-tight transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 active:translate-y-0'

const variants = {
  // Solid ink — the primary SaaS action
  primary: 'bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lift',
  // Brand accent
  accent: 'bg-teal text-white shadow-soft hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-glow',
  // Outline on light
  outline: 'border border-zinc-300 bg-white text-ink hover:-translate-y-0.5 hover:border-ink hover:shadow-soft',
  // Outline on dark bands
  'outline-light': 'border border-white/25 text-white hover:bg-white/10 hover:border-white/50',
  ghost: 'text-ink hover:bg-zinc-100',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-6 py-3.5 text-base',
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  children,
  withArrow = false,
  ...rest
}) {
  const classes = cn(base, variants[variant] || variants.primary, sizes[size] || sizes.md, className)
  const content = (
    <>
      {children}
      {withArrow && <Arrow />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
