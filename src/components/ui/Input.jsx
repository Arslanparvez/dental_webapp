import { useId } from 'react'
import { cn } from '../../lib/cn'

const controlClasses =
  'w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 font-body text-[15px] text-ink placeholder:text-zinc-400 transition-shadow duration-200 focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/10'

export function Input({ label, id, error, className, ...rest }) {
  const generatedId = useId()
  const inputId = id || generatedId
  const errorId = `${inputId}-error`

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="font-heading text-sm font-medium text-zinc-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(controlClasses, error && 'border-red-400 focus:border-red-500 focus:ring-red-500/10', className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
