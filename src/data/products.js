// Digiart Trading's full material catalog, transcribed from the Digiart Zircon
// price list. Six families: White & Preshade & Multilayer zirconia, PMMA,
// Flexible acetal resin, and Lithium disilicate. Specs are taken from the
// price list / disc labels; pricing is intentionally omitted. Each card shows
// two short `badges`; the drawer shows the full `specs` table.
const Z = '/images/zirconia'
const M = '/images/materials'

const base = [
  // ---------------- White / Classic ----------------
  {
    slug: 'classic-ht',
    name: 'Classic HT',
    category: 'white-zirconia',
    image: `${Z}/disc-classic-ht.png`,
    badges: ['High-translucent', '1350 MPa'],
    shortDescription: 'High-translucent white zirconia for full-contour crowns and long bridges.',
    description:
      'A high-translucent white zirconia with 1350 MPa flexural strength and 40% translucency. Engineered for full-contour restorations and long-span bridges where strength is the priority, then characterised with shade liquids for natural results.',
    specs: { Family: 'White (Classic)', Aesthetic: 'High-translucent (HT)', 'Bending Strength': '1350 MPa', 'Light Transmittance': '40%', Shade: 'White (uncolored)' },
    features: ['High strength — 1350 MPa', 'Suitable for full-contour crowns', 'Ideal for long-span bridges', 'Color with 16-shade dipping liquids'],
    featured: true,
  },
  {
    slug: 'classic-st',
    name: 'Classic ST',
    category: 'white-zirconia',
    image: `${Z}/disc-classic-st.png`,
    badges: ['Super-translucent', '1200 MPa'],
    shortDescription: 'Super-translucent white zirconia for full-contour crowns and bridges.',
    description:
      'A super-translucent white zirconia with 1200 MPa flexural strength and 43% translucency. Balances esthetics and strength for full-contour crowns and bridges, finished with shade liquids for lifelike results.',
    specs: { Family: 'White (Classic)', Aesthetic: 'Super-translucent (ST)', 'Bending Strength': '1200 MPa', 'Light Transmittance': '43%', Shade: 'White (uncolored)' },
    features: ['Balanced strength and translucency', 'Suitable for full-contour crowns', 'Ideal for crowns and bridges', 'Color with 16-shade dipping liquids'],
    featured: true,
  },

  // ---------------- Preshade ----------------
  {
    slug: 'preshade-ht',
    name: 'Preshade HT',
    category: 'preshade-zirconia',
    image: `${Z}/disc-preshade-ht.png`,
    badges: ['Preshaded', '1350 MPa'],
    shortDescription: 'Preshaded high-translucent zirconia — colored for accuracy, no dipping step.',
    description:
      'A preshaded high-translucent zirconia with 1350 MPa flexural strength and 40% translucency. The disc is colored so the shade of the blocks is more accurate and easier for technicians to handle. Suitable for full-contour crowns and bridges.',
    specs: { Family: 'Preshade', Aesthetic: 'High-translucent (HT)', 'Bending Strength': '1350 MPa', 'Light Transmittance': '40%', Shade: 'VITA 16 + BL1–BL3' },
    features: ['Preshaded — no dipping or coloring', 'Accurate, consistent shade through the disc', 'High strength — 1350 MPa', 'Full-contour crowns and bridges'],
    featured: false,
  },
  {
    slug: 'preshade-st',
    name: 'Preshade ST',
    category: 'preshade-zirconia',
    image: `${Z}/disc-preshade-st.png`,
    badges: ['Preshaded', '1100 MPa'],
    shortDescription: 'Preshaded super-translucent zirconia for full-contour crowns and bridges.',
    description:
      'A preshaded super-translucent zirconia with 1100 MPa flexural strength and 43% translucency. Colored consistently through the disc, so there is no need for coloring. Suitable for full-contour crowns and bridges.',
    specs: { Family: 'Preshade', Aesthetic: 'Super-translucent (ST)', 'Bending Strength': '1100 MPa', 'Light Transmittance': '43%', Shade: 'VITA 16 + BL1–BL3' },
    features: ['Preshaded — no coloring required', 'Consistent shade through the disc', 'Super-translucent esthetics', 'Full-contour crowns and bridges'],
    featured: true,
  },

  // ---------------- Multilayer ----------------
  {
    slug: 'essential-ml',
    name: 'Essential ML',
    category: 'multilayer-zirconia',
    image: `${Z}/disc-essential-ml.png`,
    badges: ['Multilayer', '1000 MPa'],
    shortDescription: 'Multilayer zirconia with a natural color gradient for everyday esthetics.',
    description:
      'A multilayer zirconia with 1000 MPa flexural strength and 46% translucency. A natural color gradient is built through the disc — from cervical to incisal — removing the dyeing step while delivering reliable strength for full-contour crowns and bridges, anterior and posterior.',
    specs: { Family: 'Multilayer', Aesthetic: 'Multilayer gradient (ML)', 'Bending Strength': '1000 MPa', 'Light Transmittance': '46%', Shade: 'VITA 16 + BL1–BL4' },
    features: ['Built-in natural color gradient', 'No dyeing step required', 'Reliable strength — 1000 MPa', 'Anterior and posterior full-contour work'],
    featured: true,
  },
  {
    slug: 'premium-ml',
    name: 'Premium ML',
    category: 'multilayer-zirconia',
    image: `${M}/premium-ml.png`,
    badges: ['5-layer gradient', '700–1200 MPa'],
    shortDescription: 'Five-layer multilayer zirconia with combined color and strength gradients.',
    description:
      'A five-layer multilayer zirconia with a 43–55% translucency gradient and a 700–1200 MPa strength gradient across the disc. An all-in-one block well suited to both anterior and posterior restorations.',
    specs: { Family: 'Multilayer', Aesthetic: '5-layer gradient (ML)', 'Bending Strength': '700–1200 MPa', 'Light Transmittance': '43–55%', Shade: 'VITA 16 + BL1–BL4' },
    features: ['Five-layer color gradient', 'Strength gradient: 700 → 1200 MPa', 'All-in-one anterior-to-posterior disc', 'Natural esthetic transitions'],
    featured: false,
  },
  {
    slug: 'prestige-ml',
    name: 'Prestige ML',
    category: 'multilayer-zirconia',
    image: `${Z}/disc-prestige-ml.png`,
    badges: ['7-layer gradient', '750–1200 MPa'],
    shortDescription: 'Premium seven-layer multilayer zirconia — our most esthetic, all-in-one block.',
    description:
      'Our most advanced multilayer zirconia, with a seven-layer gradient: 43–57% translucency and 750–1200 MPa strength across the disc. Its balance of translucency and strength suits all-ceramic restorations across the whole arch, with extra tooth powder added in the incisal area for lifelike anterior esthetics.',
    specs: { Family: 'Multilayer', Aesthetic: '7-layer gradient (ML)', 'Bending Strength': '750–1200 MPa', 'Light Transmittance': '43–57%', Shade: 'VITA 16 + BL1–BL4' },
    features: ['Seven-layer natural gradient', 'Translucency 43–57%, strength 750–1200 MPa', 'Extra tooth powder in the incisal zone', 'Premium anterior and posterior esthetics'],
    featured: true,
  },

  // ---------------- PMMA ----------------
  {
    slug: 'pmma-multilayer',
    name: 'PMMA Multilayer',
    category: 'pmma',
    image: `${M}/pmma-multilayer.png`,
    badges: ['Multilayer PMMA', 'VITA 16 + BL1'],
    shortDescription: 'Multilayer PMMA with a natural color gradient for long-term temporaries.',
    description:
      'A multilayer PMMA disc with a built-in color gradient, for long-term temporaries, try-ins, and provisional crowns and bridges. Mills cleanly and finishes quickly, with a lifelike cervical-to-incisal transition.',
    specs: { Family: 'PMMA', Type: 'Multilayer', Shade: 'VITA 16 + BL1', Use: 'Temporaries & try-ins', Sizes: '98 mm · Ø10–25 mm' },
    features: ['Built-in color gradient', 'Long-term temporaries and provisionals', 'Try-ins and mock-ups', 'Clean, fast dry milling'],
    featured: false,
  },
  {
    slug: 'pmma-monolayer',
    name: 'PMMA Monolayer',
    category: 'pmma',
    image: `${M}/pmma-monolayer.png`,
    badges: ['Monolayer PMMA', 'VITA 16 / Pink'],
    shortDescription: 'Single-shade PMMA for provisionals, try-ins, and bite planning.',
    description:
      'A single-shade PMMA disc for provisional restorations, try-ins, and bite planning. Available across the VITA shade range plus pink and bleach shades for flexible, economical chairside and lab workflows.',
    specs: { Family: 'PMMA', Type: 'Monolayer', Shade: 'VITA 16 / A0 / BL1–BL3 / Pink', Use: 'Provisionals & try-ins', Sizes: '98 mm · Ø10–35 mm' },
    features: ['Consistent single shade', 'Provisional crowns and bridges', 'Try-ins and bite planning', 'Wide shade range including pink'],
    featured: false,
  },
  {
    slug: 'pmma-pink',
    name: 'PMMA Multilayer (Pink + 16 shades)',
    category: 'pmma',
    image: `${M}/pmma-pink.png`,
    badges: ['Denture base PMMA', 'Pink + VITA 16'],
    shortDescription: 'Pink multilayer PMMA with tooth shades for digital denture bases.',
    description:
      'A pink multilayer PMMA combined with the VITA 16 tooth shades — designed for digital denture bases, try-ins, and combination cases with a natural gingival-to-tooth transition built into the disc.',
    specs: { Family: 'PMMA', Type: 'Pink multilayer', Shade: 'Pink + VITA 16', Use: 'Denture bases & try-ins', Sizes: '98 mm · 20–25 mm' },
    features: ['Pink gingiva + tooth shades in one disc', 'Digital denture bases', 'Natural gingival transition', 'Try-ins and combination cases'],
    featured: false,
  },

  // ---------------- Flexible acetal resin ----------------
  {
    slug: 'flexible-acetal-resin',
    name: 'Flexible Acetal Resin',
    category: 'flexible-resin',
    image: `${M}/flexible-resin.png`,
    badges: ['Flexible partial', '16 shades + Pink/Clear'],
    shortDescription: 'Flexible acetal resin for metal-free partial dentures and clasps.',
    description:
      'A flexible acetal resin disc for metal-free partial dentures and clasps — biocompatible, durable, and esthetic. Available across the full range of tooth shades plus pink and clear for discreet, comfortable removable work.',
    specs: { Family: 'Flexible resin', Type: 'Acetal', Shade: 'A0–D3, BL1–BL3, Pink, Clear', Use: 'Flexible partials & clasps' },
    features: ['Metal-free flexible partials', 'Biocompatible and durable', 'Discreet tooth-colored clasps', 'Full shade range incl. pink & clear'],
    featured: false,
  },

  // ---------------- Lithium disilicate ----------------
  {
    slug: 'lithium-disilicate-c14',
    name: 'Lithium Disilicate C14',
    category: 'lithium-disilicate',
    image: `${M}/lithium-disilicate.png`,
    badges: ['Glass-ceramic', 'HT / LT / MT'],
    shortDescription: 'High-esthetic lithium-disilicate blocks for crowns, veneers, and inlays.',
    description:
      'Lithium-disilicate glass-ceramic blocks (C14) for highly esthetic crowns, veneers, inlays, and onlays. Available in HT, LT, and MT translucencies across the VITA A–D, bleach, and MT shade ranges, in two block sizes.',
    specs: { Family: 'Lithium disilicate', Type: 'Glass-ceramic (C14)', Translucency: 'HT / LT / MT', Shade: 'VITA A–D, BL1–BL4, A1–A3', Sizes: 'C14 · C14 (18×15×13)' },
    features: ['High-esthetic glass-ceramic', 'Crowns, veneers, inlays & onlays', 'HT, LT, and MT translucencies', 'Two block sizes available'],
    featured: true,
  },
]

function buildProducts() {
  const expanded = base.map((b, i) => ({
    ...b,
    id: i + 1,
    images: [b.image],
  }))

  // relatedIds: other products in the same family.
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
