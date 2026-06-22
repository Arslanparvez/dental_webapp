// Digiart Trading's milling tools (carbide milling burs) — compatible with the
// major CAD/CAM milling systems. Specs are transcribed from the Digiart Trading
// tool price list; pricing is intentionally omitted. Bur photos are the real
// product images from the catalog, served from /public/images/tools.
const T = '/images/tools'

// Milling functions a bur set covers.
// Z = Zirconia, E = Emax / glass-ceramic, M = Metal, P = PMMA / wax.
export const tools = [
  {
    slug: 'roland',
    brand: 'Roland',
    image: `${T}/roland.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø3–Ø4 mm', Coatings: 'DLC · RC · DC', 'Tool Length': '40–50 mm', 'Tip Ø': '0.3–3.0 mm' },
  },
  {
    slug: 'yenadent',
    brand: 'Yenadent',
    image: `${T}/yenadent.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø4 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '45–46 mm', 'Tip Ø': '0.6–3.0 mm' },
  },
  {
    slug: 'vhf',
    brand: 'VHF',
    image: `${T}/vhf.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø3 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '32–40 mm', 'Tip Ø': '0.3–2.5 mm' },
  },
  {
    slug: 'imes-icore',
    brand: 'Imes-Icore',
    image: `${T}/imes-icore.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø3–Ø6 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '40–50 mm', 'Tip Ø': '0.5–3.0 mm' },
  },
  {
    slug: 'deprag',
    brand: 'Deprag',
    image: `${T}/deprag.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø4–Ø6 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '50 mm', 'Tip Ø': '0.6–3.0 mm' },
  },
  {
    slug: 'amann-girrbach',
    brand: 'Amann Girrbach',
    image: `${T}/amann-girrbach.png`,
    functions: ['Zirconia', 'Emax', 'PMMA'],
    specs: { Shank: 'Ø3 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '44–47 mm', 'Tip Ø': '0.3–2.5 mm' },
  },
  {
    slug: 'wieland-mini',
    brand: 'Wieland Mini',
    image: `${T}/wieland-mini.png`,
    functions: ['Zirconia', 'Emax', 'PMMA'],
    specs: { Shank: 'Ø3 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '35–40 mm', 'Tip Ø': '0.3–3.0 mm' },
  },
  {
    slug: 'zirkonzahn',
    brand: 'Zirkonzahn',
    image: `${T}/zirkonzahn.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø3–Ø6 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '50–57 mm', 'Tip Ø': '0.3–3.0 mm' },
  },
  {
    slug: 'pm7',
    brand: 'PM7',
    image: `${T}/pm7.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø6 mm', Coatings: 'RC · DC', 'Tool Length': '45–53 mm', 'Tip Ø': '0.5–5.0 mm' },
  },
  {
    slug: 'pm3',
    brand: 'PM3',
    image: `${T}/pm3.png`,
    functions: ['Zirconia', 'Emax'],
    specs: { Shank: 'Ø3 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '44–50 mm', 'Tip Ø': '0.5–3.0 mm' },
  },
  {
    slug: 'ivoclar-pm-dry',
    brand: 'Ivoclar PM Dry',
    image: `${T}/ivoclar-mcx5.png`,
    functions: ['Zirconia', 'PMMA'],
    specs: { Shank: 'Ø3 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '40 mm', 'Tip Ø': '0.3–2.5 mm' },
  },
  {
    slug: 'mcx5-sirona',
    brand: 'MCX5 Sirona',
    image: `${T}/ivoclar-mcx5.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø3 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '44 mm', 'Tip Ø': '0.5–2.5 mm' },
  },
  {
    slug: 'arum',
    brand: 'Arum',
    image: `${T}/arum.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø4–Ø6 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '45–63 mm', 'Tip Ø': '0.3–3.0 mm' },
  },
  {
    slug: 'xtcera',
    brand: 'XTCERA / Others',
    image: `${T}/xtcera.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø3–Ø6 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '45–50 mm', 'Tip Ø': '0.6–3.0 mm' },
  },
  {
    slug: 'aidite',
    brand: 'Aidite',
    image: `${T}/aidite.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø4–Ø6 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '50 mm', 'Tip Ø': '0.3–3.0 mm' },
  },
  {
    slug: 'redon',
    brand: 'Redon',
    image: `${T}/redon.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø4 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '50 mm', 'Tip Ø': '0.6–3.0 mm' },
  },
  {
    slug: 'up3d-5d',
    brand: 'UP3D / 5D',
    image: `${T}/up3d-5d.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø3–Ø4 mm', Coatings: 'DLC/RC · DC', 'Tool Length': '45–50 mm', 'Tip Ø': '0.3–3.0 mm' },
  },
  {
    slug: 'yucera',
    brand: 'Yucera',
    image: `${T}/yucera.png`,
    functions: ['Zirconia', 'Emax', 'Metal', 'PMMA'],
    specs: { Shank: 'Ø4 mm', Coatings: 'NC/RC · DC', 'Tool Length': '50 mm', 'Tip Ø': '0.6–3.0 mm' },
  },
]
