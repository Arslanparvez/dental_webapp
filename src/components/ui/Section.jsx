import { cn } from '../../lib/cn'

const tones = {
  light: 'bg-lightgray',
  navy: 'bg-navy text-offwhite',
  white: 'bg-offwhite',
}

export function Section({ id, tone = 'white', className, children, ...rest }) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', tones[tone] || tones.white, className)}
      {...rest}
    >
      {children}
    </section>
  )
}
