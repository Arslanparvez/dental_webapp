import { cn } from '../../lib/cn'

export function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag
      className={cn('mx-auto w-full max-w-container px-5 sm:px-8', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
