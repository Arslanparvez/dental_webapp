import { useState } from 'react'
import { products } from '../../data/products'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { MaterialCard } from '../materials/MaterialCard'
import { MaterialDrawer } from '../materials/MaterialDrawer'

const featured = products.filter((p) => p.featured).slice(0, 6)

export function FeaturedMaterials() {
  const [active, setActive] = useState(null)

  return (
    <div>
      <SectionHeading
        eyebrow="Materials"
        title="Premium zirconia, ready to mill"
        subtitle="A selection of the white, preshade, and multilayer zirconia discs we offer for laboratories and clinics."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) * 0.06}>
            <MaterialCard product={product} onSelect={setActive} />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button to="/materials" variant="outline" size="lg" withArrow>
          View all materials
        </Button>
      </div>

      <MaterialDrawer product={active} open={!!active} onClose={() => setActive(null)} />
    </div>
  )
}
