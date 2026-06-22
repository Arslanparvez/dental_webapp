import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { tools } from '../../data/tools'

function ToolCard({ tool }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lift">
      <div className="flex items-center gap-4 border-b border-zinc-100 p-5">
        <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded-xl bg-zinc-50 p-1.5">
          <img
            src={tool.image}
            alt={`${tool.brand} milling burs`}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold tracking-tight text-ink">{tool.brand}</h3>
          <p className="mt-1 font-body text-xs leading-relaxed text-zinc-500">Compatible milling burs</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap gap-1.5">
          {tool.functions.map((f) => (
            <Badge key={f} tone="neutral">{f}</Badge>
          ))}
        </div>

        <dl className="divide-y divide-zinc-100 rounded-xl border border-zinc-200">
          {Object.entries(tool.specs).map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-4 px-3.5 py-2">
              <dt className="text-xs text-zinc-500">{k}</dt>
              <dd className="text-right text-xs font-semibold text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export function MillingTools() {
  return (
    <div>
      <SectionHeading
        eyebrow="Milling Tools"
        title="Milling burs for every CAD/CAM system"
        subtitle="Carbide milling burs for zirconia, Emax, metal, and PMMA — matched to the major milling machines. Talk to us for tip diameters, coatings, and quantities."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, i) => (
          <Reveal key={tool.slug} delay={(i % 3) * 0.06}>
            <ToolCard tool={tool} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
