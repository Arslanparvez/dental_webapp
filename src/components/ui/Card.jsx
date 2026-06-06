import { cn } from '../../lib/cn'

export function Card({ as: Tag = 'div', hoverable = false, className, children, ...rest }) {
  return (
    <Tag
      className={cn(
        'rounded-2xl border border-black/5 bg-white shadow-sm transition duration-200',
        hoverable && 'hover:-translate-y-1 hover:shadow-xl',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
