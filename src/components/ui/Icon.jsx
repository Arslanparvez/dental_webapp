import { cn } from '../../lib/cn'

// Inline SVG path content keyed by the `icon` strings used across the data layer.
// Each entry renders inside a 24x24 viewBox with currentColor stroke (and fill
// where noted via the `solid` flag). Keep shapes simple and recognizable.
const paths = {
  // Services
  'pen-tool': <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.5 7.5" />,
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21.5h11.6a2 2 0 0 0 1.7-3L14 9V3M7.5 14h9" />,
  scan: <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10" />,
  truck: <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7M5.5 19a2 2 0 1 0 0-.01M18.5 19a2 2 0 1 0 0-.01" />,
  headset: <path d="M3 14v-3a9 9 0 0 1 18 0v3M21 16a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM3 16a2 2 0 0 1 2-2h1v5H5a2 2 0 0 1-2-2zM12 21h3" />,

  // Why choose us / values
  spark: <path d="M12 2l1.8 5.6L19.5 9l-4.7 3.4 1.7 5.6L12 14.6 7.5 18l1.7-5.6L4.5 9l5.7-1.4L12 2z" />,
  precision: <path d="M12 2v3M12 19v3M2 12h3M19 12h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 11.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" />,
  globe: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9z" />,
  shield: <path d="M12 3l8 3v6c0 4.4-3.1 7.9-8 9-4.9-1.1-8-4.6-8-9V6l8-3zM9 12l2 2 4-4" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2" />,
  users: <path d="M16 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM22 19v-2a4 4 0 0 0-3-3.9M16 2.1a4 4 0 0 1 0 7.8" />,

  // Categories
  cube: <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zM3.3 7L12 12l8.7-5M12 12v10" />,
  cpu: <path d="M6 6h12v12H6zM9 9h6v6H9M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L3 18l3 3 6.4-6.4a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.8-.7-.7-2.8 2.5-2.5z" />,
  screw: <path d="M12 2l3 3v3l-3 1-3-1V5l3-3zM9 9h6l-1 13-2 2-2-2-1-13zM9.5 12h5M10 15h4M10.5 18h3" />,
  box: <path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />,

  // Extra generic dental / lab keys
  tooth: <path d="M12 3c-2.5 0-3.5 1.5-5.5 1.5S3 3.5 3 7c0 4 1.5 6 2.5 9S6.5 21 8 21s1.2-4 4-4 2.5 4 4 4 1.5-2 2.5-5S21 11 21 7c0-3.5-1.5-2.5-3.5-2.5S14.5 3 12 3z" />,
  crown: <path d="M3 8l4 4 5-7 5 7 4-4-2 12H5L3 8zM5 20h14" />,
  bridge: <path d="M2 10a10 10 0 0 1 20 0M2 10v4h20v-4M6 14v5M12 14v5M18 14v5" />,
  implant: <path d="M9 2h6l-1 4h-4L9 2zM10 6h4l-.5 4h-3L10 6zM11 10h2l-.5 6h-1L11 10zM12 16v6" />,
  tools: <path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L3 18l3 3 6.4-6.4a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.8-.7-.7-2.8 2.5-2.5z" />,
  star: <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7l3-7z" />,
  check: <path d="M20 6L9 17l-5-5" />,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
  mail: <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 6L2 7" />,
  pin: <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
}

const fallback = <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 8v5M12 16h.01" />

export function Icon({ name, size = 24, className, title, ...rest }) {
  const decorative = !title
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('shrink-0', className)}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? 'true' : undefined}
      aria-label={title}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name] || fallback}
    </svg>
  )
}
