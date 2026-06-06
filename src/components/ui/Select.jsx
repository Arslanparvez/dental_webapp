import { useId } from 'react'
import { cn } from '../../lib/cn'

const controlClasses =
  'w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-body text-navy transition focus:outline-none focus:ring-2 focus:ring-teal'

export function Select({ label, id, error, options, className, children, ...rest }) {
  const generatedId = useId()
  const selectId = id || generatedId
  const errorId = `${selectId}-error`

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="font-heading text-sm font-semibold text-navy">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cn(controlClasses, error && 'border-red-500 focus:ring-red-500', className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      >
        {options
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
      {error && (
        <p id={errorId} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
