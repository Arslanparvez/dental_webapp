import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function FadeIn({ as = 'div', className, delay = 0, children, ...rest }) {
  const reduced = useReducedMotion()

  if (reduced) {
    const Tag = as
    return (
      <Tag className={cn(className)} {...rest}>
        {children}
      </Tag>
    )
  }

  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
