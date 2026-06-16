import { siteImages } from './siteImages'

export const services = [
  {
    id: 1,
    slug: 'fixed',
    title: 'Fixed Prosthetic Design',
    icon: 'crown',
    image: siteImages.crown,
    summary:
      'Crown, bridge, coping, inlay/onlay, and Emax veneer designs engineered for an ideal fit and natural esthetics.',
    description:
      'Our designers produce manufacturer-ready fixed restorations from your scans and prescriptions — single crowns, multi-unit bridges, copings and substructures, conservative inlays and onlays, and esthetic Emax veneers. Every design is built for accurate margins, balanced occlusion, and natural anatomy, then exported in the open format your mill or printer requires.',
    features: [
      'Crown and bridge design',
      'Copings and anatomic cutback substructures',
      'Inlays, onlays, overlays, and endocrowns',
      'Emax and lithium-disilicate veneers',
      'Smile-design driven esthetics',
      'Open-format output (STL/3MF) for any mill or printer',
    ],
    process: [
      { step: 1, title: 'Receive Case', text: 'You upload intraoral or model scans with the prescription details.' },
      { step: 2, title: 'Design', text: 'Our technicians design the restoration to your clinical and esthetic requirements.' },
      { step: 3, title: 'Quality Check', text: 'A senior designer reviews fit, margins, occlusion, and anatomy before approval.' },
      { step: 4, title: 'Deliver', text: 'Production-ready files are returned in your preferred format, ready to mill or print.' },
    ],
  },
  {
    id: 2,
    slug: 'implant',
    title: 'Implant & All-on-X Design',
    icon: 'implant',
    image: siteImages.screwRetained,
    summary:
      'All-on-X full-arch, screw-retained restorations, custom abutments, and implant bars with passive, predictable fit.',
    description:
      'We design the full range of implant restorations — from single screw-retained crowns to complex All-on-X full-arch cases. Working from verified implant positions, we engineer passive fit, ideal screw-access placement, healthy emergence profiles, and cleansable intaglio surfaces for titanium, zirconia, and hybrid restorations.',
    features: [
      'All-on-X full-arch design (All-on-4 / All-on-6)',
      'Screw-retained crowns and bridges',
      'Custom titanium, zirconia, and hybrid abutments',
      'Milled implant and overdenture bars',
      'Angulated screw-channel correction',
      'Verified, passive multi-unit fit',
    ],
    process: [
      { step: 1, title: 'Receive Case', text: 'You share implant scans, scan-body data, and the restorative plan.' },
      { step: 2, title: 'Design', text: 'We design the restoration over verified implant positions for a passive fit.' },
      { step: 3, title: 'Quality Check', text: 'A senior designer validates fit, screw access, and hygienic contours.' },
      { step: 4, title: 'Deliver', text: 'Mill- or print-ready files are returned for production.' },
    ],
  },
  {
    id: 3,
    slug: 'removable',
    title: 'Removable Prosthetic Design',
    icon: 'tooth',
    image: siteImages.partialFrame,
    summary:
      'Full denture, partial framework, and combination case designs built for retention, comfort, and a clean digital workflow.',
    description:
      'We bring removable prosthetics into a fully digital workflow — complete dentures with natural tooth setup and balanced occlusion, RPD frameworks with precise clasps and rigid connectors, and combination cases linking fixed and removable components through precision attachments. Designs are returned ready to print, mill, or cast.',
    features: [
      'Digital complete denture design',
      'Removable partial denture frameworks',
      'Cobalt-chrome, titanium, and flexible materials',
      'Combination and attachment cases',
      'Balanced occlusion and retentive bases',
      'Digital try-in files',
    ],
    process: [
      { step: 1, title: 'Receive Case', text: 'You upload scans or denture records with the prescription.' },
      { step: 2, title: 'Design', text: 'We design the prosthesis with accurate setup, fit, and occlusion.' },
      { step: 3, title: 'Quality Check', text: 'A senior designer reviews retention, comfort, and esthetics.' },
      { step: 4, title: 'Deliver', text: 'Print-, mill-, or cast-ready files are returned for fabrication.' },
    ],
  },
  {
    id: 4,
    slug: 'surgical',
    title: 'Surgical Guides & Diagnostic Design',
    icon: 'scan',
    image: siteImages.case3,
    summary:
      'Implant surgical guides and diagnostic wax-ups that turn scans and treatment plans into accurate, patient-ready designs.',
    description:
      'We merge CBCT and surface scan data to design prosthetically driven implant surgical guides with accurate sleeve placement and stable support, plus digital diagnostic wax-ups that visualize outcomes, drive mock-ups and provisionals, and align clinician, patient, and lab before treatment begins.',
    features: [
      'CBCT and scan data merging',
      'Prosthetically driven implant planning',
      'Tooth-, mucosa-, and bone-supported guides',
      'Pilot and fully guided sleeve placement',
      'Single-unit to full-mouth diagnostic wax-ups',
      'Mock-up and provisional files',
    ],
    process: [
      { step: 1, title: 'Receive Case', text: 'You provide CBCT data, surface scans, and the treatment plan.' },
      { step: 2, title: 'Design', text: 'We plan implant positions and design the guide or wax-up.' },
      { step: 3, title: 'Quality Check', text: 'A senior designer verifies accuracy, support, and fit.' },
      { step: 4, title: 'Deliver', text: 'Printable files are returned, ready for guided surgery or mock-up.' },
    ],
  },
  {
    id: 5,
    slug: 'appliances',
    title: 'Splints & Orthodontic Appliances',
    icon: 'shield',
    image: siteImages.case2,
    summary:
      'Bite splint, night guard, and clear retainer designs — comfortable, durable appliances built from your digital impressions.',
    description:
      'We design occlusal splints and night guards with even contacts and balanced guidance for bruxism and TMD management, and clear retainers with accurate trimming and a snug, comfortable fit. Every appliance is engineered for comfort and durability and returned ready to print or thermoform.',
    features: [
      'Hard, dual-laminate, and Michigan splints',
      'Anterior bite-plane appliances',
      'Night guards for bruxism and TMD',
      'Upper, lower, and dual-arch clear retainers',
      'Even contacts and balanced guidance',
      'Print- and thermoform-ready files',
    ],
    process: [
      { step: 1, title: 'Receive Case', text: 'You upload digital impressions with the appliance prescription.' },
      { step: 2, title: 'Design', text: 'We design the appliance for comfort, retention, and function.' },
      { step: 3, title: 'Quality Check', text: 'A senior designer reviews contacts, fit, and thickness.' },
      { step: 4, title: 'Deliver', text: 'Print- or thermoform-ready files are returned for fabrication.' },
    ],
  },
]
