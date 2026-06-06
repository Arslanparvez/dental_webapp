import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const shapes = [
  { className: 'left-[8%] top-[12%] h-40 w-40 bg-teal/30', delay: '0s' },
  { className: 'right-[12%] top-[20%] h-56 w-56 bg-mint/30', delay: '1.5s' },
  { className: 'left-[20%] bottom-[10%] h-48 w-48 bg-sky/50', delay: '3s' },
  { className: 'right-[18%] bottom-[16%] h-32 w-32 bg-navy/20', delay: '0.8s' },
]

export function FloatingShapes({ className }) {
  const reduced = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {shapes.map((shape, i) => (
        <span
          key={i}
          className={cn(
            'absolute rounded-full blur-3xl',
            !reduced && 'animate-float',
            shape.className
          )}
          style={reduced ? undefined : { animationDelay: shape.delay }}
        />
      ))}
    </div>
  )
}
