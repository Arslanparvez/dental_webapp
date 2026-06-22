// Digiart Trading's zirconia disc catalog, grouped into three families:
// White (Classic), Preshade, and Multilayer. Specs are taken directly from
// the official Digiart disc labels; descriptions from the Digiart price list.
// Disc imagery is the real Digiart product-label artwork served from /public.
const Z = '/images/zirconia'

const base = [
  // ---------------- White / Classic ----------------
  {
    slug: 'classic-ht',
    name: 'Classic HT',
    category: 'white-zirconia',
    image: `${Z}/disc-classic-ht.png`,
    shortDescription: 'High-translucent white zirconia for full-contour crowns and long bridges.',
    description:
      'A high-translucent white zirconia with 1350 MPa flexural strength and 40% translucency. Engineered for full-contour restorations and long-span bridges where strength is the priority, then characterised with shade liquids for natural results.',
    specs: { Family: 'White (Classic)', Aesthetic: 'High-translucent (HT)', 'Bending Strength': '1350 MPa', 'Light Transmittance': '40%', Shade: 'White (uncolored)' },
    features: [
      'High strength — 1350 MPa',
      'Suitable for full-contour crowns',
      'Ideal for long-span bridges',
      'Color with 16-shade dipping liquids',
    ],
    benefits: ['Dependable long-span frameworks', 'Strong monolithic restorations', 'Flexible shading workflow'],
    featured: true,
  },
  {
    slug: 'classic-st',
    name: 'Classic ST',
    category: 'white-zirconia',
    image: `${Z}/disc-classic-st.png`,
    shortDescription: 'Super-translucent white zirconia for full-contour crowns and bridges.',
    description:
      'A super-translucent white zirconia with 1200 MPa flexural strength and 43% translucency. Balances esthetics and strength for full-contour crowns and bridges, finished with shade liquids for lifelike results.',
    specs: { Family: 'White (Classic)', Aesthetic: 'Super-translucent (ST)', 'Bending Strength': '1200 MPa', 'Light Transmittance': '43%', Shade: 'White (uncolored)' },
    features: [
      'Balanced strength and translucency',
      'Suitable for full-contour crowns',
      'Ideal for crowns and bridges',
      'Color with 16-shade dipping liquids',
    ],
    benefits: ['Esthetic monolithic restorations', 'Versatile across indications', 'Lifelike translucency'],
    featured: true,
  },

  // ---------------- Preshade ----------------
  {
    slug: 'preshade-ht',
    name: 'Preshade HT',
    category: 'preshade-zirconia',
    image: `${Z}/disc-preshade-ht.png`,
    shortDescription: 'Preshaded high-translucent zirconia — colored for accuracy, no dipping step.',
    description:
      'A preshaded high-translucent zirconia with 1350 MPa flexural strength and 40% translucency. The disc is colored after sintering, making the shade of the blocks more accurate and easier for technicians to handle. Suitable for full-contour crowns and bridges.',
    specs: { Family: 'Preshade', Aesthetic: 'High-translucent (HT)', 'Bending Strength': '1350 MPa', 'Light Transmittance': '40%', Shade: 'VITA 16 + BL1–BL3' },
    features: [
      'Preshaded — no dipping or coloring',
      'Accurate, consistent shade through the disc',
      'High strength — 1350 MPa',
      'Full-contour crowns and bridges',
    ],
    benefits: ['Faster, cleaner workflow', 'Predictable shade matching', 'Easy for technicians to operate'],
    featured: false,
  },
  {
    slug: 'preshade-st',
    name: 'Preshade ST',
    category: 'preshade-zirconia',
    image: `${Z}/disc-preshade-st.png`,
    shortDescription: 'Preshaded super-translucent zirconia for full-contour crowns and bridges.',
    description:
      'A preshaded super-translucent zirconia with 1100 MPa flexural strength and 43% translucency. Colored consistently through the disc, so there is no need for coloring. Suitable for full-contour crowns and bridges.',
    specs: { Family: 'Preshade', Aesthetic: 'Super-translucent (ST)', 'Bending Strength': '1100 MPa', 'Light Transmittance': '43%', Shade: 'VITA 16 + BL1–BL3' },
    features: [
      'Preshaded — no coloring required',
      'Consistent shade through the disc',
      'Super-translucent esthetics',
      'Full-contour crowns and bridges',
    ],
    benefits: ['Time-saving workflow', 'Accurate, repeatable shade', 'Reliable esthetics'],
    featured: true,
  },

  // ---------------- Multilayer ----------------
  {
    slug: 'essential-ml',
    name: 'Essential ML',
    category: 'multilayer-zirconia',
    image: `${Z}/disc-essential-ml.png`,
    shortDescription: 'Multilayer zirconia with a natural color gradient for everyday esthetics.',
    description:
      'A multilayer zirconia with 1000 MPa flexural strength and 46% translucency. A natural color gradient is built through the disc — from cervical to incisal — removing the dyeing step while delivering reliable strength for full-contour crowns and bridges across the arch.',
    specs: { Family: 'Multilayer', Aesthetic: 'Multilayer gradient (ML)', 'Bending Strength': '1000 MPa', 'Light Transmittance': '46%', Shade: 'VITA 16 shades' },
    features: [
      'Built-in natural color gradient',
      'No dyeing step required',
      'Reliable strength — 1000 MPa',
      'Anterior and posterior full-contour work',
    ],
    benefits: ['Esthetic results with less effort', 'Seamless cervical-to-incisal transition', 'Streamlined workflow'],
    featured: true,
  },
  {
    slug: 'prestige-ml',
    name: 'Prestige ML',
    category: 'multilayer-zirconia',
    image: `${Z}/disc-prestige-ml.png`,
    shortDescription: 'Premium multilayer zirconia with combined translucency and strength gradients.',
    description:
      'Our premium multilayer zirconia, with a translucency gradient from 57% down to 43% and a strength gradient from 750 up to 1200 MPa across the disc. The high-translucency incisal zone delivers top-tier anterior esthetics while the high-strength cervical zone supports posterior loads — an all-in-one disc for restorations across the whole arch.',
    specs: { Family: 'Multilayer', Aesthetic: 'Premium gradient (ML)', 'Bending Strength': '750–1200 MPa', 'Light Transmittance': '43–57%', Shade: 'VITA 16 shades' },
    features: [
      'Translucency gradient: 57% → 43%',
      'Strength gradient: 750 → 1200 MPa',
      'All-in-one anterior-to-posterior disc',
      'Premium natural esthetics',
    ],
    benefits: ['Top-tier anterior translucency', 'High-strength posterior support', 'One disc for the whole arch'],
    featured: true,
  },
]

function buildProducts() {
  const expanded = base.map((b, i) => ({
    ...b,
    id: i + 1,
    images: [b.image],
  }))

  // relatedIds: other discs in the same family.
  for (const p of expanded) {
    p.relatedIds = expanded
      .filter((o) => o.id !== p.id && o.category === p.category)
      .slice(0, 3)
      .map((o) => o.id)
  }
  return expanded
}

export const products = buildProducts()

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product) {
  if (!product) return []
  const ids = new Set(product.relatedIds || [])
  return products.filter((p) => ids.has(p.id))
}
