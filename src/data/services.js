// Design services, transcribed from the Digiart Design Services home page
// (digiartdesignservices.com). Each entry matches a card shown there, with the
// real site photo served locally from /public/images/services. Services are
// grouped into the four families used on the site.
const S = '/images/services'

// Service families shown on the home page, in display order.
export const serviceCategories = [
  {
    slug: 'fixed',
    name: 'Fixed Prosthesis',
    icon: 'crown',
    image: '/images/categories/fixed.png',
    description:
      'Fixed prostheses are used to replace missing teeth, restore the appearance and function of the mouth, and improve oral health. They are called “fixed” because they are not removable by the patient — they remain in the mouth at all times.',
  },
  {
    slug: 'removable',
    name: 'Removable',
    icon: 'tooth',
    image: '/images/categories/removable.png',
    description:
      'Removable dentures are dental appliances used to replace missing teeth. They can be easily taken out of the mouth for cleaning and maintenance.',
  },
  {
    slug: 'surgical',
    name: 'Surgical Guide',
    icon: 'scan',
    image: '/images/categories/surgical.png',
    description:
      'Surgical guides are used in procedures where precision is critical to achieve successful outcomes — bringing accuracy to implant and restorative planning.',
  },
  {
    slug: 'appliance',
    name: 'Appliance',
    icon: 'shield',
    image: '/images/categories/appliance.png',
    description:
      'In dentistry, an appliance refers to any custom-made device used to address dental issues — including braces, retainers, mouthguards, and oral splints.',
  },
]

// "Our offerings" — shown on the home page under each service (shared content).
export const offerings = [
  {
    title: 'Standard crown design',
    text: 'Our standard crown design includes abutment, bridge, copings, crowns, inlay, onlay, post & core, screw retained frame, temporary pontic, veneer.',
    icon: 'crown',
  },
  {
    title: 'All on X design',
    text: 'Our All on X specialized design team is here to help you on your large implant-retained cases. Whether you are currently offering Hybrids to your clinicians or want to get started, we’ve got you covered!',
    icon: 'implant',
  },
]

const base = [
  // ---------------- Fixed Prosthesis ----------------
  {
    slug: 'crown-bridge',
    group: 'fixed',
    title: 'Crown & Bridge',
    icon: 'crown',
    image: `${S}/crown-bridge.png`,
    summary: 'Crowns, bridges, copings, inlays, onlays, veneers, and more.',
    description:
      'Fixed restorations designed to replace missing teeth and restore the appearance and function of the mouth — engineered for accurate margins, balanced occlusion, and natural anatomy.',
    features: [
      'Abutment', 'Bridge', 'Copings', 'Crowns', 'Inlay / Onlay',
      'Post & core', 'Screw-retained frame', 'Shell & immediate temp', 'Temporary pontic', 'Veneers',
    ],
  },
  {
    slug: 'dental-bars',
    group: 'fixed',
    title: 'Dental Bars',
    icon: 'bridge',
    image: `${S}/dental-bars.png`,
    summary: 'Implant-supported bars for stable, retentive restorations.',
    description:
      'Precision implant bar designs that combine a secure, retentive connection with a clean, comfortable, and hygienic fit for full-arch restorations.',
  },
  {
    slug: 'implant-screw-retain',
    group: 'fixed',
    title: 'Implant Screw-Retained',
    icon: 'implant',
    image: `${S}/implant-screw-retain.png`,
    summary: 'Screw-retained implant crowns and bridges.',
    description:
      'Screw-retained implant restorations that provide the secure connection needed to make dental implants a reliable and long-lasting solution.',
  },
  {
    slug: 'emax-veneer',
    group: 'fixed',
    title: 'Emax Veneer',
    icon: 'tooth',
    image: `${S}/emax-veneer.png`,
    summary: 'Esthetic Emax veneers and smile design.',
    description:
      'Emax veneer and smile-design work that transforms smiles, boosts confidence, and improves self-esteem through natural, lifelike esthetics.',
  },
  {
    slug: 'diagnostic-wax-up',
    group: 'fixed',
    title: 'Diagnostic Wax-Up',
    icon: 'pen-tool',
    image: `${S}/diagnostic-wax-up.png`,
    summary: 'Digital wax-ups to plan space and occlusion.',
    description:
      'Diagnostic wax-ups that help estimate restorative space and evaluate the planned occlusal scheme, aligning clinician and patient before treatment begins.',
  },

  // ---------------- Removable ----------------
  {
    slug: 'partial-frame',
    group: 'removable',
    title: 'Partial Frame',
    icon: 'box',
    image: `${S}/partial-frame.png`,
    summary: 'Removable partial frameworks — print or cast.',
    description:
      'Digital partial-denture frameworks designed to be printed in wax, cast in metal, or printed directly in metal, with precise clasps and rigid connectors.',
  },
  {
    slug: 'denture',
    group: 'removable',
    title: 'Denture',
    icon: 'tooth',
    image: `${S}/denture.png`,
    summary: 'Full digital dentures, custom-fitted.',
    description:
      'Complete dentures designed with CAD and engineering tools from impressions and bite records for a precise, comfortable, custom fit.',
  },
  {
    slug: 'clear-retainer',
    group: 'removable',
    title: 'Clear Retainer',
    icon: 'shield',
    image: `${S}/clear-retainer.png`,
    summary: 'Transparent retainers that cover all surfaces.',
    description:
      'A removable, transparent layer of durable plastic formed to cover all tooth surfaces — comfortable, discreet, and similar to clear aligners.',
  },

  // ---------------- Surgical Guide ----------------
  {
    slug: 'model',
    group: 'surgical',
    title: 'Model',
    icon: 'cube',
    image: `${S}/model.png`,
    summary: 'Implant models using lab analogs.',
    description:
      'Model designs for implant cases using the lab analog, showing exact implant positioning for accurate, predictable restorative work.',
  },

  // ---------------- Appliance ----------------
  {
    slug: 'bite-splint',
    group: 'appliance',
    title: 'Bite Splint (Night Guard)',
    icon: 'shield',
    image: `${S}/bite-splint.png`,
    summary: 'Night guards and bite splints — mill or print.',
    description:
      'Digital bite splints and night guards designed to be milled or printed with accuracy, with even contacts and balanced guidance for bruxism and TMD management.',
  },
]

export const services = base.map((s, i) => ({ id: i + 1, ...s }))

export function getServicesByGroup(groupSlug) {
  return services.filter((s) => s.group === groupSlug)
}
