import { Reveal } from '../ui/Reveal'
import { cn } from '../../lib/cn'

export function ProcessFlow({ steps = [], className }) {
  if (!steps.length) return null

  return (
    <ol className={cn('grid gap-8 md:grid-cols-2 lg:grid-cols-4', className)}>
      {steps.map((step, i) => {
        const last = i === steps.length - 1
        return (
          <Reveal as="li" key={step.step} delay={i * 0.08} className="relative flex flex-col">
            {/* Connector to next step (desktop only) */}
            {!last && (
              <span
                aria-hidden="true"
                className="absolute right-0 top-6 hidden h-px w-8 translate-x-full bg-teal/30 lg:block"
              />
            )}
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal font-heading text-lg font-bold text-white">
                {step.step}
              </span>
              <h4 className="font-heading text-base font-semibold text-navy">{step.title}</h4>
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed text-navy/70">{step.text}</p>
          </Reveal>
        )
      })}
    </ol>
  )
}
