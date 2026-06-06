// CMS-shaped product catalog. A curated base of realistic dental lab products is
// expanded with shade / size / material variants to build a full catalog.

const img = (seed) => `https://picsum.photos/seed/${seed}/800/600`

// ---------------------------------------------------------------------------
// Curated base products — at least 3-4 per category.
// Each base product may declare `variants` (label + key/value applied to specs)
// which the generator expands into individual catalog entries.
// ---------------------------------------------------------------------------
const base = [
  // ---------------- CAD/CAM Materials ----------------
  {
    slug: 'zirconia-multilayer-disc',
    name: 'Multilayer Zirconia Disc',
    category: 'cadcam-materials',
    shortDescription:
      'Pre-shaded multilayer zirconia disc with a natural gradient for esthetic monolithic restorations.',
    description:
      'A high-translucency multilayer zirconia disc engineered for monolithic and minimally layered restorations. The built-in shade gradient transitions smoothly from cervical to incisal, delivering lifelike esthetics straight from the mill with excellent flexural strength.',
    specs: { Diameter: '98.5 mm', Material: 'Yttria-stabilized zirconia', Translucency: '49%', 'Flexural Strength': '1200 MPa' },
    features: ['Natural shade gradient', 'High translucency', 'Open-system compatible', 'Pre-shaded'],
    benefits: ['Faster esthetic results', 'Reduced layering time', 'Consistent shade matching'],
    featured: true,
    variants: {
      key: 'Thickness',
      values: ['12 mm', '14 mm', '16 mm', '18 mm', '20 mm', '22 mm', '25 mm', '30 mm'],
    },
  },
  {
    slug: 'lithium-disilicate-block',
    name: 'Lithium Disilicate Block',
    category: 'cadcam-materials',
    shortDescription:
      'High-strength glass-ceramic block for esthetic single-unit crowns, inlays, onlays, and veneers.',
    description:
      'A pressable-grade lithium disilicate milling block offering an outstanding balance of strength and esthetics. Ideal for chairside and lab single-unit restorations, with vivid fluorescence and easy polishability.',
    specs: { Size: 'C14', Material: 'Lithium disilicate glass-ceramic', 'Flexural Strength': '530 MPa' },
    features: ['High esthetics', 'Easy to polish', 'Chairside compatible'],
    benefits: ['Lifelike translucency', 'Reliable single-unit strength', 'Quick finishing'],
    featured: true,
    variants: {
      key: 'Shade',
      values: ['A1', 'A2', 'A3', 'A3.5', 'B1', 'B2', 'C2', 'D2', 'BL2', 'BL3'],
    },
  },
  {
    slug: 'pmma-disc',
    name: 'PMMA Milling Disc',
    category: 'cadcam-materials',
    shortDescription:
      'Durable PMMA disc for temporaries, try-ins, and long-term provisional restorations.',
    description:
      'A homogeneous, bubble-free PMMA disc designed for milling provisional crowns, bridges, and try-in restorations. Offers excellent edge stability and a smooth, easily polishable surface.',
    specs: { Diameter: '98.5 mm', Material: 'Polymethyl methacrylate' },
    features: ['Bubble-free', 'Easy polishing', 'Stable margins'],
    benefits: ['Reliable provisionals', 'Comfortable try-ins', 'Cost-effective'],
    featured: false,
    variants: {
      key: 'Shade',
      values: ['A1', 'A2', 'A3', 'A3.5', 'B2', 'Bleach', 'Clear', 'Pink'],
    },
  },
  {
    slug: 'wax-cadcam-disc',
    name: 'CAD/CAM Wax Disc',
    category: 'cadcam-materials',
    shortDescription:
      'Burnout wax disc for milling cast frameworks, press patterns, and try-in copings.',
    description:
      'A clean-burning milling wax disc that leaves no residue, ideal for producing cast or press patterns with precise margins and fine detail reproduction.',
    specs: { Diameter: '98.5 mm', Material: 'Burnout wax' },
    features: ['Residue-free burnout', 'Fine detail', 'Stable milling'],
    benefits: ['Accurate castings', 'Clean workflow', 'Predictable patterns'],
    featured: false,
    variants: {
      key: 'Color',
      values: ['Blue', 'Green', 'Amber'],
    },
  },
  {
    slug: 'hybrid-ceramic-block',
    name: 'Hybrid Ceramic Block',
    category: 'cadcam-materials',
    shortDescription:
      'Resin-ceramic hybrid block combining ceramic esthetics with shock-absorbing flexibility.',
    description:
      'A resin matrix ceramic block that blends the esthetics of ceramic with a degree of elasticity for stress absorption, well suited to single-unit crowns and implant-supported restorations.',
    specs: { Size: '14L', Material: 'Resin matrix ceramic', 'Flexural Strength': '200 MPa' },
    features: ['Shock absorbing', 'Easy adjustment', 'Esthetic finish'],
    benefits: ['Gentle on opposing teeth', 'Fast finishing', 'Good marginal fit'],
    featured: false,
    variants: {
      key: 'Shade',
      values: ['A1', 'A2', 'A3', 'A3.5', 'B2', 'C2'],
    },
  },

  // ---------------- Dental Equipment ----------------
  {
    slug: 'dry-milling-machine',
    name: '5-Axis Dry Milling Machine',
    category: 'dental-equipment',
    shortDescription:
      'Compact 5-axis dry milling unit for zirconia, PMMA, and wax with automated tool changing.',
    description:
      'A precision 5-axis dry milling machine built for high-throughput zirconia and PMMA production. Features an automatic tool changer, integrated suction, and intuitive job management for unattended batch milling.',
    specs: { Axes: '5', 'Spindle Speed': '60,000 rpm', 'Tool Changer': '8 positions', Connectivity: 'Ethernet / USB' },
    features: ['Automatic tool changer', 'Integrated dust extraction', 'Open material system'],
    benefits: ['Unattended production', 'High accuracy', 'Lower running costs'],
    featured: true,
    variants: {
      key: 'Configuration',
      values: ['Standard', 'Pro', 'Lab Plus', 'Wet/Dry'],
    },
  },
  {
    slug: 'sintering-furnace',
    name: 'High-Speed Sintering Furnace',
    category: 'dental-equipment',
    shortDescription:
      'Programmable sintering furnace for zirconia with rapid and standard cycle support.',
    description:
      'A high-temperature sintering furnace with precise heating-element control and validated programs for full-contour and speed sintering of zirconia restorations.',
    specs: { 'Max Temperature': '1600 °C', Capacity: '80 units', Programs: 'Up to 50' },
    features: ['Rapid sintering programs', 'Precise temperature control', 'Large chamber'],
    benefits: ['Same-day restorations', 'Consistent strength', 'High capacity'],
    featured: true,
    variants: {
      key: 'Chamber Size',
      values: ['Compact', 'Standard', 'Large'],
    },
  },
  {
    slug: 'lab-3d-printer',
    name: 'Dental 3D Printer (DLP)',
    category: 'dental-equipment',
    shortDescription:
      'High-resolution DLP 3D printer for models, guides, splints, and castable patterns.',
    description:
      'A fast, high-resolution DLP 3D printer optimized for dental applications including models, surgical guides, splints, and castable patterns, with a validated resin ecosystem.',
    specs: { Technology: 'DLP', 'XY Resolution': '50 µm', 'Build Volume': '144 × 81 × 180 mm' },
    features: ['High resolution', 'Fast print speed', 'Validated resins'],
    benefits: ['Accurate models', 'Reliable guides', 'Versatile applications'],
    featured: true,
    variants: {
      key: 'Resolution',
      values: ['35 µm', '50 µm', '65 µm'],
    },
  },
  {
    slug: 'desktop-lab-scanner',
    name: 'Desktop Lab Scanner',
    category: 'dental-equipment',
    shortDescription:
      'High-accuracy structured-light desktop scanner for models, impressions, and articulators.',
    description:
      'A blue structured-light desktop scanner delivering fast, highly accurate digitization of models, impressions, and mounted articulators for a fully digital lab workflow.',
    specs: { Accuracy: '4 µm', 'Scan Time': '9 s per arch', 'Light Source': 'Blue LED' },
    features: ['High accuracy', 'Fast scanning', 'Articulator support'],
    benefits: ['Reliable digital models', 'Quick turnaround', 'Open output'],
    featured: false,
    variants: {
      key: 'Accuracy Class',
      values: ['Standard', 'High', 'Ultra'],
    },
  },
  {
    slug: 'glazing-furnace',
    name: 'Ceramic Glazing Furnace',
    category: 'dental-equipment',
    shortDescription:
      'Vacuum glazing and firing furnace for ceramics and lithium disilicate restorations.',
    description:
      'A precise vacuum firing furnace for glazing, staining, and firing ceramic restorations, with consistent temperature control for predictable esthetic results.',
    specs: { 'Max Temperature': '1200 °C', Vacuum: 'Yes', Programs: 'Up to 200' },
    features: ['Vacuum firing', 'Precise control', 'Large program memory'],
    benefits: ['Consistent glazes', 'Reliable results', 'Versatile programs'],
    featured: false,
    variants: {
      key: 'Model',
      values: ['Basic', 'Plus', 'Touch'],
    },
  },

  // ---------------- Laboratory Tools ----------------
  {
    slug: 'zirconia-bur-set',
    name: 'Zirconia Adjustment Bur Set',
    category: 'laboratory-tools',
    shortDescription:
      'Diamond-coated bur set for fast, smooth adjustment of sintered zirconia restorations.',
    description:
      'A set of diamond-coated rotary burs designed for efficient grinding and contouring of sintered zirconia with minimal chipping and a smooth finish.',
    specs: { 'Shank Diameter': '2.35 mm', Grit: 'Coarse to fine', 'Pieces': '6' },
    features: ['Diamond coated', 'Low chipping', 'Long lifespan'],
    benefits: ['Faster adjustments', 'Smoother surfaces', 'Reduced remakes'],
    featured: false,
    variants: {
      key: 'Grit',
      values: ['Coarse', 'Medium', 'Fine', 'Extra Fine', 'Super Coarse'],
    },
  },
  {
    slug: 'polishing-kit',
    name: 'Ceramic Polishing Kit',
    category: 'laboratory-tools',
    shortDescription:
      'Multi-stage polishing kit for high-luster finishing of ceramic and zirconia restorations.',
    description:
      'A staged polishing kit with silicone polishers and diamond paste for achieving a high-luster, glaze-like finish on ceramic and zirconia restorations without a firing cycle.',
    specs: { Stages: '3', 'Shank Diameter': '2.35 mm', Pieces: '9' },
    features: ['Three-stage system', 'High luster', 'Heat resistant'],
    benefits: ['Glaze-free polishing', 'Time savings', 'Esthetic shine'],
    featured: true,
    variants: {
      key: 'Shape',
      values: ['Flame', 'Wheel', 'Cup', 'Point', 'Lens', 'Disc'],
    },
  },
  {
    slug: 'articulator',
    name: 'Semi-Adjustable Articulator',
    category: 'laboratory-tools',
    shortDescription:
      'Precision semi-adjustable articulator for accurate occlusal analysis and restoration.',
    description:
      'A rigid, precision semi-adjustable articulator with adjustable condylar guidance for reliable occlusal registration and restoration fabrication.',
    specs: { Type: 'Arcon', 'Condylar Guidance': 'Adjustable', Material: 'Aluminum alloy' },
    features: ['Adjustable condylar path', 'Magnetic mounting plates', 'Rigid frame'],
    benefits: ['Accurate occlusion', 'Repeatable mounting', 'Durable construction'],
    featured: false,
    variants: {
      key: 'Mounting',
      values: ['Magnetic', 'Screw', 'Split-cast', 'Plateless'],
    },
  },
  {
    slug: 'wax-carving-set',
    name: 'Wax Carving Instrument Set',
    category: 'laboratory-tools',
    shortDescription:
      'Stainless steel wax carving instruments for precise waxing and contouring.',
    description:
      'A set of finely balanced stainless steel waxing instruments with polished working ends for detailed wax-up, carving, and contouring.',
    specs: { Material: 'Stainless steel', Pieces: '6', Handle: 'Knurled' },
    features: ['Polished tips', 'Balanced handles', 'Corrosion resistant'],
    benefits: ['Precise wax control', 'Comfortable handling', 'Long-lasting'],
    featured: false,
    variants: {
      key: 'Tip Style',
      values: ['PKT', 'Beavertail', 'Discoid-Cleoid', 'Ball Burnisher'],
    },
  },

  // ---------------- Implant Solutions ----------------
  {
    slug: 'titanium-base',
    name: 'Titanium Base (Ti-Base)',
    category: 'implant-solutions',
    shortDescription:
      'Precision titanium base for bonding hybrid abutments and screw-retained restorations.',
    description:
      'A medical-grade titanium base for fabricating cement- and screw-retained hybrid abutments and crowns, with a precise connection geometry for a reliable, sealed interface.',
    specs: { Material: 'Grade 5 titanium (Ti-6Al-4V)', Connection: 'Conical', 'Gingival Height': '1 mm' },
    features: ['Precision connection', 'Anti-rotation', 'Bondable surface'],
    benefits: ['Reliable fit', 'Versatile restorations', 'Strong bond'],
    featured: true,
    variants: {
      key: 'Platform',
      values: ['NP (3.5)', 'RP (4.3)', 'WP (5.0)', 'NC', 'RC'],
    },
  },
  {
    slug: 'implant-analog',
    name: 'Implant Lab Analog',
    category: 'implant-solutions',
    shortDescription:
      'Durable lab analog replicating the implant connection for accurate model work.',
    description:
      'A precision lab analog that replicates the implant connection in the working model, enabling accurate fabrication of implant-supported restorations.',
    specs: { Material: 'Stainless steel', Connection: 'Internal hex', Compatibility: 'Major systems' },
    features: ['Precise replication', 'Durable', 'Wide compatibility'],
    benefits: ['Accurate models', 'Reliable fit', 'Reusable'],
    featured: false,
    variants: {
      key: 'Platform',
      values: ['NP (3.5)', 'RP (4.3)', 'WP (5.0)', 'NC', 'RC'],
    },
  },
  {
    slug: 'scan-body',
    name: 'Implant Scan Body',
    category: 'implant-solutions',
    shortDescription:
      'Digital scan body for accurate intraoral and lab capture of implant position.',
    description:
      'A precision scan body engineered for reliable digital capture of implant position and orientation, with a matte surface optimized for intraoral and desktop scanners.',
    specs: { Material: 'PEEK / titanium', 'Scan Surface': 'Matte', Reusable: 'Yes' },
    features: ['Anti-glare surface', 'Accurate geometry', 'Autoclavable'],
    benefits: ['Reliable digital position', 'Fewer rescans', 'Long service life'],
    featured: true,
    variants: {
      key: 'Platform',
      values: ['NP (3.5)', 'RP (4.3)', 'WP (5.0)', 'NC', 'RC'],
    },
  },
  {
    slug: 'multi-unit-abutment',
    name: 'Multi-Unit Abutment',
    category: 'implant-solutions',
    shortDescription:
      'Angled and straight multi-unit abutments for screw-retained full-arch restorations.',
    description:
      'Titanium multi-unit abutments for full-arch and multi-unit screw-retained restorations, available in straight and angled profiles to correct implant divergence.',
    specs: { Material: 'Grade 5 titanium', Type: 'Screw-retained', 'Cuff Heights': 'Multiple' },
    features: ['Straight and angled', 'Divergence correction', 'Durable titanium'],
    benefits: ['Passive full-arch fit', 'Flexible angulation', 'Predictable results'],
    featured: false,
    variants: {
      key: 'Angle',
      values: ['0°', '17°', '30°', '45°'],
    },
  },

  // ---------------- Consumables ----------------
  {
    slug: 'phosphate-investment',
    name: 'Phosphate-Bonded Investment',
    category: 'consumables',
    shortDescription:
      'High-precision phosphate investment for press ceramics and alloy casting.',
    description:
      'A phosphate-bonded investment formulated for accurate expansion control in pressed ceramic and alloy casting workflows, delivering smooth surfaces and precise fit.',
    specs: { Type: 'Phosphate-bonded', 'Working Time': '5 min', 'Pack Size': '160 g sachets' },
    features: ['Controlled expansion', 'Smooth surface', 'Fast setting'],
    benefits: ['Accurate fit', 'Clean castings', 'Reliable results'],
    featured: false,
    variants: {
      key: 'Pack',
      values: ['80 g', '160 g', 'Bulk 4.5 kg'],
    },
  },
  {
    slug: 'modeling-wax',
    name: 'Dental Modeling Wax',
    category: 'consumables',
    shortDescription:
      'Smooth-flowing modeling wax for wax-ups, copings, and pattern fabrication.',
    description:
      'A residue-free modeling wax with excellent carving and flow characteristics for precise wax-ups, copings, and burnout patterns.',
    specs: { Type: 'Modeling wax', 'Melting Point': '58 °C', 'Pack Size': '75 g' },
    features: ['Smooth flow', 'Clean burnout', 'Stable carving'],
    benefits: ['Detailed wax-ups', 'Residue-free casting', 'Easy handling'],
    featured: false,
    variants: {
      key: 'Color',
      values: ['Ivory', 'Blue', 'Green', 'Red', 'Grey'],
    },
  },
  {
    slug: 'nitrile-gloves',
    name: 'Nitrile Examination Gloves',
    category: 'consumables',
    shortDescription:
      'Powder-free nitrile gloves offering durable protection and tactile sensitivity.',
    description:
      'Powder-free nitrile examination gloves providing strong chemical resistance, comfort, and tactile sensitivity for everyday lab and clinical use.',
    specs: { Material: 'Nitrile', Powder: 'Free', 'Box Quantity': '100' },
    features: ['Powder-free', 'Chemical resistant', 'Textured grip'],
    benefits: ['Reliable protection', 'Comfortable fit', 'Good dexterity'],
    featured: false,
    variants: {
      key: 'Size',
      values: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'],
    },
  },
  {
    slug: 'separating-liquid',
    name: 'Plaster Separating Liquid',
    category: 'consumables',
    shortDescription:
      'Fast-drying separating liquid for clean release between plaster and acrylic.',
    description:
      'A reliable separating medium that forms a thin, clean film for easy release between plaster, acrylic, and wax surfaces without surface defects.',
    specs: { Type: 'Alginate-based', Volume: '1 L', 'Drying Time': '3 min' },
    features: ['Fast drying', 'Thin film', 'Clean release'],
    benefits: ['Smooth surfaces', 'Easy deflasking', 'Consistent results'],
    featured: false,
    variants: {
      key: 'Volume',
      values: ['250 ml', '500 ml', '1 L'],
    },
  },

  // ---------------- Digital Dentistry Products ----------------
  {
    slug: 'model-resin',
    name: 'Dental Model Resin',
    category: 'digital-dentistry',
    shortDescription:
      'High-accuracy 3D printing resin for precise, dimensionally stable dental models.',
    description:
      'A fast-curing photopolymer resin engineered for highly accurate, dimensionally stable dental models with a smooth, matte surface ideal for thermoforming and restoration fabrication.',
    specs: { Type: 'Model resin', 'Layer Height': '50 µm', Compatibility: 'DLP / LCD' },
    features: ['High accuracy', 'Low shrinkage', 'Matte finish'],
    benefits: ['Precise models', 'Stable over time', 'Easy to read margins'],
    featured: true,
    variants: {
      key: 'Shade',
      values: ['Sandstone', 'Grey', 'Beige', 'Ivory', 'Tan', 'White'],
    },
  },
  {
    slug: 'surgical-guide-resin',
    name: 'Surgical Guide Resin',
    category: 'digital-dentistry',
    shortDescription:
      'Biocompatible, autoclavable resin for accurate implant surgical guides.',
    description:
      'A Class I biocompatible resin for printing accurate, transparent implant surgical guides that withstand standard autoclave sterilization.',
    specs: { Type: 'Surgical guide resin', Biocompatibility: 'Class I', Sterilization: 'Autoclavable' },
    features: ['Biocompatible', 'Transparent', 'Autoclavable'],
    benefits: ['Accurate guided surgery', 'Clear visibility', 'Sterilizable'],
    featured: false,
    variants: {
      key: 'Volume',
      values: ['500 g', '1 kg', '2 kg'],
    },
  },
  {
    slug: 'splint-resin',
    name: 'Flexible Splint Resin',
    category: 'digital-dentistry',
    shortDescription:
      'Durable, transparent resin for night guards and occlusal splints.',
    description:
      'A tough, transparent biocompatible resin for printing comfortable, fracture-resistant occlusal splints and night guards with excellent clarity.',
    specs: { Type: 'Splint resin', Biocompatibility: 'Class IIa', Finish: 'Transparent' },
    features: ['Fracture resistant', 'Transparent', 'Comfortable'],
    benefits: ['Durable appliances', 'Patient comfort', 'Esthetic clarity'],
    featured: false,
    variants: {
      key: 'Volume',
      values: ['500 g', '1 kg', '2 kg'],
    },
  },
  {
    slug: 'scanner-spray',
    name: 'Anti-Glare Scanning Spray',
    category: 'digital-dentistry',
    shortDescription:
      'Fine, washable scanning spray to reduce glare on reflective surfaces.',
    description:
      'A finely atomized, easily removable scanning spray that reduces glare on shiny surfaces for cleaner, more accurate digital captures.',
    specs: { Type: 'Scanning aid', Volume: '75 ml', Removal: 'Water-soluble' },
    features: ['Fine particle size', 'Even coating', 'Easy removal'],
    benefits: ['Cleaner scans', 'Fewer artifacts', 'Quick cleanup'],
    featured: false,
    variants: {
      key: 'Volume',
      values: ['35 ml', '75 ml', '150 ml'],
    },
  },
]

// ---------------------------------------------------------------------------
// Generator: expand each base product's variants into full catalog entries.
// Builds related ids within the same category.
// ---------------------------------------------------------------------------
function buildProducts() {
  const expanded = []
  let id = 1
  let seed = 1

  for (const b of base) {
    const { variants, ...rest } = b
    const values = variants ? variants.values : ['Standard']
    const variantKey = variants ? variants.key : 'Variant'

    values.forEach((v, i) => {
      const isVariant = !!variants
      const slug = isVariant
        ? `${b.slug}-${v.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
        : b.slug
      const name = isVariant ? `${b.name} — ${v}` : b.name
      const images = [img(seed++), img(seed++), img(seed++)]

      expanded.push({
        ...rest,
        id: id++,
        slug,
        name,
        images,
        shortDescription: b.shortDescription,
        description: b.description,
        specs: isVariant ? { ...b.specs, [variantKey]: v } : { ...b.specs },
        features: [...b.features],
        benefits: [...b.benefits],
        category: b.category,
        featured: b.featured && i === 0,
        relatedIds: [],
        _baseSlug: b.slug,
      })
    })
  }

  // Compute relatedIds: other products in the same category (prefer same base family).
  for (const p of expanded) {
    const sameCategory = expanded.filter(
      (o) => o.id !== p.id && o.category === p.category,
    )
    const sameFamily = sameCategory.filter((o) => o._baseSlug !== p._baseSlug)
    const pool = sameFamily.length >= 3 ? sameFamily : sameCategory
    p.relatedIds = pool.slice(0, 4).map((o) => o.id)
    delete p._baseSlug
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
