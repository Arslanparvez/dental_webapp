import { cn } from '../../lib/cn'
import { FadeIn } from './FadeIn'

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', tone = 'light' }) {
  const centered = align === 'center'
  const dark = tone === 'dark'

  return (
    <FadeIn className={cn('flex flex-col', centered ? 'items-center text-center' : 'items-start text-left')}>
      {eyebrow && (
        <span
          className={cn(
            'mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider',
            dark ? 'border-white/15 bg-white/5 text-mint' : 'border-zinc-200 bg-white text-teal'
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={cn(
            'text-balance font-heading text-3xl font-bold leading-[1.1] tracking-tightest md:text-[2.6rem]',
            dark ? 'text-white' : 'text-ink'
          )}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl font-body text-base leading-relaxed md:text-lg',
            dark ? 'text-white/65' : 'text-zinc-500',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
