export const posts = [
  {
    id: 1,
    slug: 'going-fully-digital-lab-workflow',
    title: 'Going Fully Digital: Building a Modern Lab Workflow',
    category: 'Digital Dentistry',
    excerpt:
      'A practical roadmap for dental laboratories transitioning from analog to a complete digital production line.',
    cover: 'https://picsum.photos/seed/post-digital-workflow/1200/630',
    date: '2025-11-18',
    author: 'Dr. Sara Nasser',
    content: [
      'The shift to digital dentistry is no longer optional for laboratories that want to stay competitive. A fully digital workflow reduces remakes, accelerates turnaround, and standardizes quality across the team.',
      'The journey begins with reliable digitization. Whether through intraoral scans transferred from the clinic or a high-accuracy desktop scanner in the lab, clean data is the foundation of every successful case.',
      'From there, validated design and production parameters ensure that what is designed on screen translates accurately to the milled or printed result. Investing in training is just as important as investing in equipment.',
      'Labs that approach the transition in stages, proving each step before moving to the next, consistently see the smoothest results and the fastest return on investment.',
    ],
  },
  {
    id: 2,
    slug: 'choosing-zirconia-for-monolithic-restorations',
    title: 'Choosing the Right Zirconia for Monolithic Restorations',
    category: 'CAD/CAM Technology',
    excerpt:
      'Translucency, strength, and shade gradient all matter. Here is how to match zirconia to the indication.',
    cover: 'https://picsum.photos/seed/post-zirconia/1200/630',
    date: '2025-10-09',
    author: 'Layla Hassan',
    content: [
      'Not all zirconia is created equal. The balance between translucency and flexural strength determines where a given material performs best, from posterior crowns to anterior esthetics.',
      'High-translucency multilayer discs deliver lifelike gradients ideal for anterior monolithic work, while higher-strength formulations are better suited to long-span bridges and posterior loads.',
      'Understanding the indication first, then selecting the material, leads to fewer compromises and more predictable esthetic and functional outcomes.',
    ],
  },
  {
    id: 3,
    slug: 'digiart-centre-expands-philippines-branch',
    title: 'Digiart Centre Expands Capacity at Philippines Branch',
    category: 'Industry News',
    excerpt:
      'Our Manila branch grows its design studio and support team to serve Southeast Asian partners.',
    cover: 'https://picsum.photos/seed/post-ph-expansion/1200/630',
    date: '2025-09-22',
    author: 'Daniel Cruz',
    content: [
      'We are excited to announce a significant expansion of our Philippines branch in Manila, adding new design stations and growing our technical support team.',
      'The investment brings world-class CAD/CAM design and dependable product distribution closer to laboratories and clinics across Southeast Asia, with support that spans multiple time zones.',
      'This expansion reflects our ongoing commitment to partnership and to keeping our clients ahead of the curve in digital dentistry.',
    ],
  },
  {
    id: 4,
    slug: 'new-biocompatible-3d-printing-resins',
    title: 'New Biocompatible 3D Printing Resins Now Available',
    category: 'Product Updates',
    excerpt:
      'Expanded resin lineup for surgical guides, splints, and high-accuracy models.',
    cover: 'https://picsum.photos/seed/post-resins/1200/630',
    date: '2025-08-14',
    author: 'Ethan Park',
    content: [
      'Our digital dentistry catalog now includes an expanded range of biocompatible 3D printing resins for surgical guides, occlusal splints, and dimensionally stable models.',
      'Each resin is validated for accuracy and, where applicable, certified for biocompatibility and autoclave sterilization, giving labs confidence from print to patient.',
      'Contact our team for printer compatibility and recommended print settings to get the best results from day one.',
    ],
  },
  {
    id: 5,
    slug: 'full-arch-implant-design-best-practices',
    title: 'Best Practices for Full-Arch Implant Design',
    category: 'CAD/CAM Technology',
    excerpt:
      'Passive fit, screw access, and material selection are critical to full-arch success.',
    cover: 'https://picsum.photos/seed/post-full-arch/1200/630',
    date: '2025-07-30',
    author: 'Grace Villanueva',
    content: [
      'Full-arch implant restorations demand meticulous attention to passive fit. Even small inaccuracies can lead to complications, so verified scan data and multi-unit abutment planning are essential.',
      'Screw access channel placement should balance retrievability with esthetics, and material selection must account for both strength and patient comfort.',
      'A disciplined, step-by-step design process, reviewed by a senior designer, consistently produces the most reliable full-arch outcomes.',
    ],
  },
  {
    id: 6,
    slug: 'intraoral-scanning-tips-for-clinics',
    title: 'Intraoral Scanning Tips for Better Lab Communication',
    category: 'Digital Dentistry',
    excerpt:
      'Small adjustments in scanning technique dramatically improve the quality of data labs receive.',
    cover: 'https://picsum.photos/seed/post-ios-tips/1200/630',
    date: '2025-06-25',
    author: 'Maria Reyes',
    content: [
      'Clean intraoral scans make everything downstream easier. Proper isolation, consistent scan paths, and capturing clear margins are the fundamentals that pay off in every case.',
      'Communicating the prescription clearly, including shade, material, and contact preferences, helps the lab deliver exactly what the clinic expects the first time.',
      'When clinics and labs share the same digital language, turnaround shortens and remakes become rare.',
    ],
  },
  {
    id: 7,
    slug: 'sintering-furnace-maintenance-guide',
    title: 'A Practical Sintering Furnace Maintenance Guide',
    category: 'Product Updates',
    excerpt:
      'Keep your sintering results consistent with these routine maintenance habits.',
    cover: 'https://picsum.photos/seed/post-sintering/1200/630',
    date: '2025-05-19',
    author: 'Yusuf Ahmed',
    content: [
      'Consistent sintering results depend on a well-maintained furnace. Regular inspection of heating elements and clean firing trays go a long way toward avoiding surprises.',
      'Following validated programs and logging cycles helps identify drift before it affects restoration strength or fit.',
      'Our technical support team can help establish a maintenance schedule tailored to your furnace and production volume.',
    ],
  },
  {
    id: 8,
    slug: 'dental-trading-trends-2026',
    title: 'Dental Trading Trends to Watch in 2026',
    category: 'Industry News',
    excerpt:
      'From open material systems to faster logistics, here is what is shaping dental supply.',
    cover: 'https://picsum.photos/seed/post-trends-2026/1200/630',
    date: '2025-12-02',
    author: 'Omar Khalifa',
    content: [
      'The dental supply landscape continues to evolve, with open material systems giving labs more freedom to mix and match equipment and consumables.',
      'Faster, more transparent logistics are raising expectations for availability and lead times across the industry.',
      'Labs that partner with suppliers offering both products and technical expertise are best positioned to adapt and grow in the year ahead.',
    ],
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}
