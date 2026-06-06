import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

const LEFT_PILLS = [
  { label: 'SCANS', y: 92 },
  { label: 'IMPRESSIONS', y: 256 },
  { label: 'MODELS', y: 420 },
]

const RIGHT_PILLS = [
  { label: 'CROWNS', y: 92 },
  { label: 'BRIDGES', y: 256 },
  { label: 'IMPLANTS', y: 420 },
]

const NODES = [
  { label: 'SCAN', x: 430 },
  { label: 'PLAN', x: 575 },
  { label: 'DESIGN', x: 720, active: true },
  { label: 'REVIEW', x: 865 },
  { label: 'DELIVER', x: 1010 },
]

const NODE_Y = 540

/**
 * Decorative "digital workflow" connector graphic, rendered as a single SVG so
 * the pills, curved connectors, and pipeline nodes stay perfectly aligned.
 * Purely ornamental — hidden from assistive tech and on small screens.
 */
function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 1440 620"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    >
      {/* connectors: left pills -> first node */}
      <g fill="none" stroke="#00A6A6" strokeOpacity="0.35" strokeWidth="2">
        <path d="M205,92 C330,92 330,540 430,540" />
        <path d="M205,256 C345,256 345,540 430,540" />
        <path d="M205,420 C365,420 365,540 430,540" />
        {/* last node -> right pills */}
        <path d="M1010,540 C1115,540 1115,92 1235,92" />
        <path d="M1010,540 C1105,540 1105,256 1235,256" />
        <path d="M1010,540 C1085,540 1085,420 1235,420" />
      </g>

      {/* horizontal pipeline line */}
      <line
        x1="430"
        y1={NODE_Y}
        x2="1010"
        y2={NODE_Y}
        stroke="#0F2B46"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />

      {/* travelling dots along the connectors */}
      <g fill="#7ED6C2">
        <circle cx="300" cy="118" r="4" />
        <circle cx="330" cy="300" r="4" />
        <circle cx="1120" cy="160" r="4" />
        <circle cx="1100" cy="330" r="4" />
      </g>

      {/* pipeline nodes */}
      {NODES.map((n) => (
        <g key={n.label}>
          {n.active && (
            <circle cx={n.x} cy={NODE_Y} r="22" fill="#00A6A6" fillOpacity="0.12" />
          )}
          <circle
            cx={n.x}
            cy={NODE_Y}
            r={n.active ? 11 : 8}
            fill={n.active ? '#00A6A6' : '#ffffff'}
            stroke={n.active ? '#00A6A6' : '#0F2B46'}
            strokeOpacity={n.active ? 1 : 0.35}
            strokeWidth="2"
          />
          <text
            x={n.x}
            y={NODE_Y + 42}
            textAnchor="middle"
            className="font-heading"
            fontSize="14"
            fontWeight="700"
            letterSpacing="1.5"
            fill={n.active ? '#00A6A6' : '#0F2B46'}
            fillOpacity={n.active ? 1 : 0.55}
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* left + right labelled pills */}
      {LEFT_PILLS.map((p) => (
        <Pill key={p.label} x={30} y={p.y} label={p.label} />
      ))}
      {RIGHT_PILLS.map((p) => (
        <Pill key={p.label} x={1235} y={p.y} label={p.label} align="end" />
      ))}
    </svg>
  )
}

function Pill({ x, y, label, align = 'start' }) {
  const width = 175
  const height = 52
  const top = y - height / 2
  const dotX = align === 'end' ? x + width - 26 : x + 26
  const textX = align === 'end' ? x + width - 44 : x + 44
  const textAnchor = align === 'end' ? 'end' : 'start'
  return (
    <g>
      <rect
        x={x}
        y={top}
        width={width}
        height={height}
        rx="16"
        fill="#ffffff"
        stroke="#DCEFFD"
        strokeWidth="2"
      />
      <circle cx={dotX} cy={y} r="5" fill="#00A6A6" />
      <text
        x={textX}
        y={y + 5}
        textAnchor={textAnchor}
        className="font-heading"
        fontSize="15"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#0F2B46"
      >
        {label}
      </text>
    </g>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-white">
      <HeroGraphic />

      <Container className="relative z-10 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-navy/45">
            Welcome to Digiart Centre
          </p>
          <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            CAD/CAM &bull; Trading &bull; Dental Products
          </p>

          <h1 className="mt-7 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-navy md:text-7xl">
            Designing the future of
            <br />
            <span className="italic text-teal">digital dentistry.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl font-body text-lg text-navy/70 md:text-xl">
            Advanced Dental CAD/CAM Design, Trading Solutions, and Premium Dental Products for
            laboratories worldwide.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button to="/products" variant="outline" size="lg">
              Explore Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
