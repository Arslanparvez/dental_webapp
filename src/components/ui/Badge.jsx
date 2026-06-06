import { cn } from '../../lib/cn'

const tones = {
  teal: 'bg-teal/10 text-teal',
  mint: 'bg-mint/20 text-navy',
  sky: 'bg-sky text-navy',
  navy: 'bg-navy/10 text-navy',
}

export function Badge({ tone = 'teal', className, children, ...rest }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        tones[tone] || tones.teal,
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
