import { Drawer } from '../ui/Drawer'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { categories } from '../../data/categories'

const familyName = (slug) => categories.find((c) => c.slug === slug)?.name || slug

export function MaterialDrawer({ product, open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose} title="Material details">
      {product && (
        <div>
          <div className="overflow-hidden rounded-2xl border border-zinc-200">
            <img
              src={product.image}
              alt={product.name}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="mt-5">
            <Badge tone="teal">{familyName(product.category)}</Badge>
            <h3 className="mt-3 font-heading text-2xl font-bold tracking-tightest text-ink">{product.name}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-zinc-500">{product.description}</p>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Specifications</h4>
            <dl className="mt-3 divide-y divide-zinc-100 rounded-xl border border-zinc-200">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 px-4 py-2.5">
                  <dt className="text-sm text-zinc-500">{k}</dt>
                  <dd className="text-right text-sm font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Highlights</h4>
            <ul className="mt-3 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-600">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-teal" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button to="/contact" variant="primary" size="md" className="w-full" onClick={onClose} withArrow>
              Request a Quote
            </Button>
          </div>
        </div>
      )}
    </Drawer>
  )
}
