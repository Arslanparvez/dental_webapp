import { Reveal } from '../ui/Reveal'
import { cn } from '../../lib/cn'

export function ProcessFlow({ steps = [], className }) {
  if (!steps.length) return null

  return (
    <ol className={cn('grid gap-6 md:grid-cols-2 lg:grid-cols-4', className)}>
      {steps.map((step, i) => (
        <Reveal as="li" key={step.step} delay={i * 0.08} className="relative">
          <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red font-heading text-sm font-bold text-white">
                {step.step}
              </span>
              <h4 className="font-heading text-base font-semibold tracking-tight text-ink">{step.title}</h4>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-zinc-500">{step.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
