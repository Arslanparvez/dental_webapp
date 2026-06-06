const full = (seed) => `https://picsum.photos/seed/${seed}/1200/800`
const thumbOf = (seed) => `https://picsum.photos/seed/${seed}/400/300`

export const gallery = [
  { id: 1, src: full('gallery-lab-1'), thumb: thumbOf('gallery-lab-1'), category: 'lab', alt: 'Digital dental laboratory workstation', w: 1200, h: 800 },
  { id: 2, src: full('gallery-lab-2'), thumb: thumbOf('gallery-lab-2'), category: 'lab', alt: 'Technician operating a milling machine', w: 1200, h: 800 },
  { id: 3, src: full('gallery-lab-3'), thumb: thumbOf('gallery-lab-3'), category: 'lab', alt: 'Sintering furnace loaded with restorations', w: 1200, h: 800 },
  { id: 4, src: full('gallery-lab-4'), thumb: thumbOf('gallery-lab-4'), category: 'lab', alt: 'Desktop scanner digitizing a dental model', w: 1200, h: 800 },
  { id: 5, src: full('gallery-products-1'), thumb: thumbOf('gallery-products-1'), category: 'products', alt: 'Multilayer zirconia milling discs', w: 1200, h: 800 },
  { id: 6, src: full('gallery-products-2'), thumb: thumbOf('gallery-products-2'), category: 'products', alt: 'Lithium disilicate ceramic blocks', w: 1200, h: 800 },
  { id: 7, src: full('gallery-products-3'), thumb: thumbOf('gallery-products-3'), category: 'products', alt: 'Implant titanium bases and components', w: 1200, h: 800 },
  { id: 8, src: full('gallery-products-4'), thumb: thumbOf('gallery-products-4'), category: 'products', alt: 'Polishing and adjustment bur kit', w: 1200, h: 800 },
  { id: 9, src: full('gallery-cases-1'), thumb: thumbOf('gallery-cases-1'), category: 'cases', alt: 'Finished anterior crown restorations', w: 1200, h: 800 },
  { id: 10, src: full('gallery-cases-2'), thumb: thumbOf('gallery-cases-2'), category: 'cases', alt: 'Full-arch implant restoration on a model', w: 1200, h: 800 },
  { id: 11, src: full('gallery-cases-3'), thumb: thumbOf('gallery-cases-3'), category: 'cases', alt: 'Monolithic zirconia bridge before glazing', w: 1200, h: 800 },
  { id: 12, src: full('gallery-cases-4'), thumb: thumbOf('gallery-cases-4'), category: 'cases', alt: 'Digital smile design preview', w: 1200, h: 800 },
  { id: 13, src: full('gallery-office-1'), thumb: thumbOf('gallery-office-1'), category: 'office', alt: 'Digiart Centre Head Office reception', w: 1200, h: 800 },
  { id: 14, src: full('gallery-office-2'), thumb: thumbOf('gallery-office-2'), category: 'office', alt: 'Design studio at the Philippines branch', w: 1200, h: 800 },
  { id: 15, src: full('gallery-office-3'), thumb: thumbOf('gallery-office-3'), category: 'office', alt: 'Team collaborating in the meeting room', w: 1200, h: 800 },
  { id: 16, src: full('gallery-office-4'), thumb: thumbOf('gallery-office-4'), category: 'office', alt: 'Training session with lab partners', w: 1200, h: 800 },
]
