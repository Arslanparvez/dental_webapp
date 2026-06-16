import { cn } from '../../lib/cn'

export function Card({ as: Tag = 'div', hoverable = false, className, children, ...rest }) {
  return (
    <Tag
      className={cn(
        'rounded-2xl border border-zinc-200 bg-white shadow-soft transition-all duration-300',
        hoverable && 'hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lift',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
