import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60'

const variants = {
  primary: 'bg-teal text-white hover:bg-teal/90',
  secondary: 'bg-navy text-white hover:bg-navy/90',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  ghost: 'bg-transparent text-navy hover:bg-lightgray',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  children,
  ...rest
}) {
  const classes = cn(base, variants[variant] || variants.primary, sizes[size] || sizes.md, className)

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
