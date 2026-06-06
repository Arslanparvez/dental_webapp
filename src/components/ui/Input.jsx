import { useId } from 'react'
import { cn } from '../../lib/cn'

const controlClasses =
  'w-full rounded-lg border border-black/10 px-4 py-3 font-body text-navy transition focus:outline-none focus:ring-2 focus:ring-teal'

export function Input({ label, id, error, className, ...rest }) {
  const generatedId = useId()
  const inputId = id || generatedId
  const errorId = `${inputId}-error`

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="font-heading text-sm font-semibold text-navy">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(controlClasses, error && 'border-red-500 focus:ring-red-500', className)}
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
