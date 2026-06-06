import { cn } from '../../lib/cn'
import { FadeIn } from './FadeIn'

export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const centered = align === 'center'

  return (
    <FadeIn
      className={cn(
        'flex flex-col',
        centered ? 'items-center text-center' : 'items-start text-left'
      )}
    >
      {eyebrow && (
        <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="font-heading text-3xl font-bold md:text-4xl">{title}</h2>
      )}
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl font-body text-base text-navy/70',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
