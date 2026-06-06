import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const DURATION = 1600

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  immediate = false,
  className,
}) {
  const reduced = useReducedMotion()
  const instant = immediate || reduced

  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(instant ? value : 0)

  useEffect(() => {
    if (instant) {
      setDisplay(value)
      return
    }
    if (!inView) return

    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION, 1)
      setDisplay(Math.round(progress * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [instant, inView, value])

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}
