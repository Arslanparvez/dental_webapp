// Catalog of Digiart's zirconia materials, grouped into three families:
// White, Preshade, and Multilayer. Each entry is a distinct disc grade.
import { zirconiaImages } from './siteImages'

const imageForSlug = {
  'ht-plus': zirconiaImages.copings,
  'st-plus': zirconiaImages.archLower,
  sht: zirconiaImages.molars,
  ut: zirconiaImages.anterior1,
  'htp-color': zirconiaImages.bridgeGingiva,
  'stp-color': zirconiaImages.anterior2,
  'sht-color': zirconiaImages.anteriorCloseup,
  'st-multilayer': zirconiaImages.molars,
  'ut-multilayer': zirconiaImages.anterior1,
  'sht-multilayer': zirconiaImages.bridgeGingiva,
  '3d-plus-multilayer': zirconiaImages.posteriorModel,
  '4d-plus-multilayer': zirconiaImages.fullArchImplant,
  '4d-pro-multilayer': zirconiaImages.anteriorCloseup,
}

const base = [
  // ---------------- White ----------------
  {
    slug: 'ht-plus',
    name: 'HT Plus Zirconia',
    category: 'white-zirconia',
    shortDescription: 'High-translucent, high-strength zirconia for copings and frameworks.',
    description:
      'A high-translucent Plus zirconia engineered for copings and frameworks where strength is paramount. Enhanced flexural strength and a fine, homogeneous grain structure deliver dependable substructures with smooth milling and stable green-body edges.',
    specs: { Family: 'White', Aesthetic: 'High-translucent Plus', 'Bending Strength': '≥1200 MPa', 'Light Transmittance': '38%', 'Sintering Temp': '1530 °C', Shades: 'White (uncolored)' },
    features: ['Enhanced strength with good translucency', 'Stable edges during milling', 'Fine homogeneous grain structure', 'Ideal for copings and frameworks'],
    benefits: ['High-strength substructures', 'Reliable long-span frameworks', 'Smooth, chip-resistant milling'],
    featured: true,
  },
  {
    slug: 'st-plus',
    name: 'ST Plus Zirconia',
    category: 'white-zirconia',
    shortDescription: 'Super-translucent zirconia for full-contour crowns and bridges.',
    description:
      'A super-translucent Plus zirconia balancing strength and esthetics for full-contour crowns and bridges up to long-span cases. Pairs with a 16-shade coloring liquid for natural, predictable results.',
    specs: { Family: 'White', Aesthetic: 'Super-translucent Plus', 'Bending Strength': '≥1100 MPa', 'Light Transmittance': '43%', 'Sintering Temp': '1530 °C', Shades: 'White (uncolored)' },
    features: ['Balanced strength and translucency', 'Suitable for full-contour crowns & bridges', 'Pairs with 16-shade coloring liquid', 'Up to 14-unit bridges'],
    benefits: ['Esthetic monolithic restorations', 'Versatile across indications', 'Predictable shading'],
    featured: true,
  },
  {
    slug: 'sht',
    name: 'SHT Zirconia',
    category: 'white-zirconia',
    shortDescription: 'Super-high-translucent zirconia for esthetic full-contour restorations.',
    description:
      'A super-high-translucent zirconia widely used for full-contour crowns and bridges, offering an excellent blend of translucency and reliable strength with a lower sintering temperature.',
    specs: { Family: 'White', Aesthetic: 'Super-high-translucent', 'Bending Strength': '≥1000 MPa', 'Light Transmittance': '45%', 'Sintering Temp': '1450 °C', Shades: 'White (uncolored)' },
    features: ['High translucency', 'Suitable for full-contour crowns & bridges', 'Pairs with 16-shade coloring liquid', 'Up to 14-unit bridges'],
    benefits: ['Lifelike esthetics', 'Reliable everyday performance', 'Efficient sintering'],
    featured: false,
  },
  {
    slug: 'ut',
    name: 'UT Zirconia',
    category: 'white-zirconia',
    shortDescription: 'Ultra-translucent zirconia for highly esthetic anterior restorations.',
    description:
      'An ultra-translucent zirconia with superior glossy translucency, ideal for anterior crowns and veneers where esthetics are the priority.',
    specs: { Family: 'White', Aesthetic: 'Ultra-translucent', 'Bending Strength': '≥1000 MPa', 'Light Transmittance': '49%', 'Sintering Temp': '1450 °C', Shades: 'White (uncolored)' },
    features: ['Superior glossy translucency', 'Ideal for anterior restorations', 'Suitable for veneers', 'Pairs with coloring liquid'],
    benefits: ['Outstanding anterior esthetics', 'Natural light behavior', 'Thin, lifelike veneers'],
    featured: true,
  },

  // ---------------- Preshade ----------------
  {
    slug: 'htp-color',
    name: 'HTP Color Zirconia',
    category: 'preshade-zirconia',
    shortDescription: 'Preshaded high-translucent zirconia for copings and frameworks — no coloring step.',
    description:
      'A preshaded high-translucent zirconia that removes the coloring step from the workflow. Consistent shade through the disc saves time while delivering dependable framework strength.',
    specs: { Family: 'Preshade', Aesthetic: 'High-translucent', 'Bending Strength': '≥1100 MPa', 'Light Transmittance': '38%', 'Sintering Temp': '1530 °C', Shades: 'VITA 16 + BL1–BL3' },
    features: ['Preshaded — no dipping or coloring', 'Time-saving, economical workflow', 'Consistent shade through the disc', 'Copings and frameworks'],
    benefits: ['Faster turnaround', 'Predictable shade', 'Lower processing cost'],
    featured: false,
  },
  {
    slug: 'stp-color',
    name: 'STP Color Zirconia',
    category: 'preshade-zirconia',
    shortDescription: 'Preshaded super-translucent zirconia for full-contour crowns and bridges.',
    description:
      'A preshaded super-translucent zirconia for full-contour crowns and bridges. Colored consistently through the disc for accurate, easy-to-handle results.',
    specs: { Family: 'Preshade', Aesthetic: 'Super-translucent', 'Bending Strength': '≥1000 MPa', 'Light Transmittance': '43%', 'Sintering Temp': '1530 °C', Shades: 'VITA 16 + BL1–BL3' },
    features: ['Preshaded for accurate color', 'Full-contour crowns & bridges', 'Easy to handle', 'Consistent shade'],
    benefits: ['Accurate shade matching', 'Streamlined workflow', 'Reliable esthetics'],
    featured: true,
  },
  {
    slug: 'sht-color',
    name: 'SHT Color Zirconia',
    category: 'preshade-zirconia',
    shortDescription: 'Preshaded super-high-translucent zirconia for esthetic full-contour work.',
    description:
      'A preshaded super-high-translucent zirconia combining lifelike translucency with an accurate, consistent shade for full-contour crowns and bridges.',
    specs: { Family: 'Preshade', Aesthetic: 'Super-high-translucent', 'Bending Strength': '≥1000 MPa', 'Light Transmittance': '45%', 'Sintering Temp': '1450 °C', Shades: 'VITA 16 + BL1–BL3' },
    features: ['Preshaded high translucency', 'Full-contour crowns & bridges', 'Consistent, accurate shade', 'Efficient sintering'],
    benefits: ['Lifelike esthetics', 'Faster turnaround', 'Predictable color'],
    featured: false,
  },

  // ---------------- Multilayer ----------------
  {
    slug: 'st-multilayer',
    name: 'ST Multilayer Zirconia',
    category: 'multilayer-zirconia',
    shortDescription: 'Super-translucent multilayer zirconia with a natural color gradient.',
    description:
      'A super-translucent multilayer zirconia with a built-in color gradient that removes the dyeing step. High strength makes it well suited to posterior full-contour restorations.',
    specs: { Family: 'Multilayer', Aesthetic: 'Super-translucent', 'Bending Strength': '≥1100 MPa', 'Light Transmittance': '43%', 'Sintering Temp': '1530 °C', Shades: 'VITA 16 + BL1–BL4' },
    features: ['Natural color gradient — no dyeing', 'High strength for posterior loads', 'Seamless cervical-to-incisal transition', 'Screw-retained bridges'],
    benefits: ['Esthetic results with less effort', 'Durable posterior restorations', 'Consistent gradient'],
    featured: true,
  },
  {
    slug: 'ut-multilayer',
    name: 'UT Multilayer Zirconia',
    category: 'multilayer-zirconia',
    shortDescription: 'Ultra-translucent multilayer zirconia for esthetic anterior restorations.',
    description:
      'An ultra-translucent multilayer zirconia with a natural gradient and superior glossy translucency, ideal for anterior crowns, veneers, and esthetic full-contour bridges.',
    specs: { Family: 'Multilayer', Aesthetic: 'Ultra-translucent', 'Bending Strength': '≥1000 MPa', 'Light Transmittance': '49%', 'Sintering Temp': '1500 °C', Shades: 'VITA 16 + BL1–BL4' },
    features: ['Natural color gradient', 'Superior glossy translucency', 'Ideal for anterior work', 'Suitable for veneers'],
    benefits: ['Outstanding anterior esthetics', 'No dyeing step', 'Natural light behavior'],
    featured: false,
  },
  {
    slug: 'sht-multilayer',
    name: 'SHT Multilayer Zirconia',
    category: 'multilayer-zirconia',
    shortDescription: 'Super-high-translucent multilayer zirconia for anterior and posterior work.',
    description:
      'A super-high-translucent multilayer zirconia with a natural gradient and high strength, versatile across anterior and posterior full-contour restorations.',
    specs: { Family: 'Multilayer', Aesthetic: 'Super-high-translucent', 'Bending Strength': '≥1000 MPa', 'Light Transmittance': '45%', 'Sintering Temp': '1500 °C', Shades: 'VITA 16 + BL1–BL4' },
    features: ['Natural color gradient', 'High strength', 'Anterior and posterior restorations', 'No dyeing step'],
    benefits: ['Versatile esthetics', 'Reliable strength', 'Streamlined workflow'],
    featured: false,
  },
  {
    slug: '3d-plus-multilayer',
    name: '3D Plus Multilayer Zirconia',
    category: 'multilayer-zirconia',
    shortDescription: 'Multilayer zirconia with color and strength gradients for any indication.',
    description:
      'A multilayer zirconia with a multi-layer color gradient and a strength gradient across the disc, balancing translucency and strength for both anterior and posterior restorations.',
    specs: { Family: 'Multilayer', Aesthetic: 'Multilayer gradient', 'Bending Strength': '700–1200 MPa', 'Light Transmittance': '45–57%', 'Sintering Temp': '1500 °C', Shades: 'VITA 16 + BL1–BL4' },
    features: ['Multi-layer color gradient', 'Strength gradient across layers', 'Strong translucency balance', 'Anterior and posterior restorations'],
    benefits: ['One disc, many indications', 'Esthetics with strength', 'Natural transitions'],
    featured: false,
  },
  {
    slug: '4d-plus-multilayer',
    name: '4D Plus Multilayer Zirconia',
    category: 'multilayer-zirconia',
    shortDescription: 'Four-dimensional gradient zirconia — color, strength, translucency, and fracture.',
    description:
      'A four-dimensional gradient zirconia transitioning in color, strength, translucency, and fracture behavior across the disc, with high fracture toughness for chip-resistant anterior and posterior restorations.',
    specs: { Family: 'Multilayer', Aesthetic: '4D gradient', 'Bending Strength': '700–1200 MPa', 'Light Transmittance': '45–57%', 'Sintering Temp': '1500 °C', Shades: 'VITA 16 + BL1–BL4' },
    features: ['4D gradient: color, strength, translucency & fracture', 'High fracture toughness', 'Chip-resistant', 'Anterior and posterior restorations'],
    benefits: ['Premium natural esthetics', 'Durable, chip-resistant results', 'Versatile across the arch'],
    featured: true,
  },
  {
    slug: '4d-pro-multilayer',
    name: '4D Pro Multilayer Zirconia (7-Layer)',
    category: 'multilayer-zirconia',
    shortDescription: 'Seven-layer gradient zirconia — our most esthetic, all-in-one block.',
    description:
      'Our most advanced multilayer zirconia, with a seven-layer natural gradient in color, translucency, and fracture toughness. Strength reaches up to 1200 MPa with up to 57% translucency for premium anterior and posterior restorations.',
    specs: { Family: 'Multilayer', Aesthetic: 'All-in-one 7-layer gradient', 'Bending Strength': '700–1200 MPa', 'Light Transmittance': '43–57%', 'Sintering Temp': '1500 °C', Shades: 'VITA 16 + BL1–BL4' },
    features: ['Seven-layer natural gradient', 'Color, translucency & fracture-toughness gradient', 'Up to 1200 MPa and up to 57% translucency', 'Anterior and posterior restorations'],
    benefits: ['Top-tier natural esthetics', 'Strength and beauty in one disc', 'Lifelike multi-zone transitions'],
    featured: true,
  },
]

function buildProducts() {
  const expanded = base.map((b, i) => ({
    ...b,
    id: i + 1,
    image: imageForSlug[b.slug] || zirconiaImages.molars,
    images: [imageForSlug[b.slug] || zirconiaImages.molars],
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
