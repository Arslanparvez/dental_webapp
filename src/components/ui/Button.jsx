import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl font-heading font-semibold tracking-tight transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 active:translate-y-0'

const variants = {
  // Brushed metallic red — the primary brand action
  primary: 'bg-metallic-red text-white shadow-soft hover:-translate-y-0.5 hover:bg-metallic-red-hover hover:shadow-glow',
  // Brand accent (solid red)
  accent: 'bg-red text-white shadow-soft hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-glow',
  // Outline on light — red border + red text, fills metallic red on hover
  outline: 'border border-red/40 bg-white text-red hover:-translate-y-0.5 hover:border-transparent hover:bg-metallic-red hover:text-white hover:shadow-glow',
  // Outline on dark bands (white border + white text)
  'outline-light': 'border border-white/30 text-white hover:bg-white/10 hover:border-white/60',
  // Ghost — red text
  ghost: 'text-red hover:bg-red/10',
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
