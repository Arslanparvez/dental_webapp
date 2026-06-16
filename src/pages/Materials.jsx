import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/sections/PageHeader'
import { MaterialFilters } from '../components/materials/MaterialFilters'
import { MaterialGrid } from '../components/materials/MaterialGrid'
import { MaterialDrawer } from '../components/materials/MaterialDrawer'
import { products } from '../data/products'
import { useProductSearch } from '../hooks/useProductSearch'

export default function Materials() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'
  const query = searchParams.get('query') || ''

  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(null)

  const filtered = useProductSearch(products, { category, query })

  // Brief skeleton pass on mount and whenever filters change.
  useEffect(() => {
    setLoading(true)
    const t = window.setTimeout(() => setLoading(false), 320)
    return () => window.clearTimeout(t)
  }, [category, query])

  const updateParam = (key, value) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (!value || value === 'all') next.delete(key)
        else next.set(key, value)
        return next
      },
      { replace: true }
    )
  }

  return (
    <>
      <Seo
        title="Zirconia Materials"
        description="Digiart Design Services' zirconia materials — white, preshade, and multilayer discs, from high-strength framework grades to 7-layer multilayer-gradient esthetic blocks."
        path="/materials"
      />

      <PageHeader
        eyebrow="Materials"
        title="Premium zirconia, engineered for every indication."
        subtitle="White, preshade, and multilayer discs — high-strength framework grades through ultra-translucent and multilayer-gradient esthetic blocks."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Materials' }]}
      />

      <Section tone="white">
        <Container>
          <MaterialFilters
            query={query}
            onQueryChange={(v) => updateParam('query', v)}
            category={category}
            onCategoryChange={(v) => updateParam('category', v)}
          />

          <p className="mt-8 font-body text-sm text-zinc-400">
            {loading ? 'Loading materials…' : `${filtered.length} ${filtered.length === 1 ? 'material' : 'materials'}`}
          </p>

          <div className="mt-6">
            <MaterialGrid products={filtered} loading={loading} onSelect={setActive} />
          </div>
        </Container>
      </Section>

      <MaterialDrawer product={active} open={!!active} onClose={() => setActive(null)} />
    </>
  )
}
