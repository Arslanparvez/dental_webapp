import { cn } from '../../lib/cn'

const tones = {
  white: 'bg-white text-ink',
  paper: 'bg-zinc-50 text-ink',
  ink: 'bg-ink text-white',
  // legacy aliases
  light: 'bg-zinc-50 text-ink',
  navy: 'bg-ink text-white',
}

export function Section({ id, tone = 'white', className, children, ...rest }) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-28', tones[tone] || tones.white, className)}
      {...rest}
    >
      {children}
    </section>
  )
}
