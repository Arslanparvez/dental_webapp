import { cn } from '../../lib/cn'

const tones = {
  teal: 'bg-teal/10 text-teal-600 border border-teal/20',
  neutral: 'bg-zinc-100 text-zinc-600 border border-zinc-200',
  ink: 'bg-metallic-red text-white',
  outline: 'border border-zinc-200 text-zinc-600',
  // legacy aliases
  mint: 'bg-teal/10 text-teal-600 border border-teal/20',
  navy: 'bg-metallic-red text-white',
  sky: 'bg-zinc-100 text-zinc-600 border border-zinc-200',
}

export function Badge({ tone = 'teal', className, children, ...rest }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold',
        tones[tone] || tones.teal,
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
