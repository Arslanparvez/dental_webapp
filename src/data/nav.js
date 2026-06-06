export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', children: [
    { label: 'CAD/CAM Designing', to: '/services#cadcam' },
    { label: 'Dental Laboratory Solutions', to: '/services#lab' },
    { label: 'Digital Dentistry', to: '/services#digital' },
    { label: 'Trading Services', to: '/services#trading' },
    { label: 'Technical Support', to: '/services#support' },
  ]},
  { label: 'Products', to: '/products', children: [
    { label: 'CAD/CAM Materials', to: '/products?category=cadcam-materials' },
    { label: 'Dental Equipment', to: '/products?category=dental-equipment' },
    { label: 'Laboratory Tools', to: '/products?category=laboratory-tools' },
    { label: 'Implant Solutions', to: '/products?category=implant-solutions' },
    { label: 'Consumables', to: '/products?category=consumables' },
    { label: 'Digital Dentistry Products', to: '/products?category=digital-dentistry' },
  ]},
  { label: 'Philippines Branch', to: '/philippines' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
