import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Let in-page anchor links (e.g. /services#cadcam) scroll to their target.
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
