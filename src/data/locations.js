export const locations = [
  {
    id: 'hq',
    name: 'Digiart Centre — Head Office',
    type: 'HQ',
    address: 'Unit 1204, Burj Al Salam Tower, Sheikh Zayed Road, Dubai, United Arab Emirates',
    phone: '+971 4 555 0192',
    whatsapp: '97145550192',
    email: 'info@digiartcentre.com',
    hours: 'Sun–Thu: 9:00 AM – 6:00 PM (GST)',
    lat: 25.2241,
    lng: 55.2826,
    mapEmbedUrl: 'https://www.google.com/maps?q=25.2241,55.2826&output=embed',
  },
  {
    id: 'ph',
    name: 'Digiart Centre — Philippines Branch',
    type: 'Branch',
    address: '8th Floor, Cyber One Building, Eastwood City, Quezon City, Metro Manila, Philippines',
    phone: '+63 2 8540 1188',
    whatsapp: '63285401188',
    email: 'ph@digiartcentre.com',
    hours: 'Mon–Sat: 8:00 AM – 5:00 PM (PHT)',
    lat: 14.6091,
    lng: 121.0793,
    mapEmbedUrl: 'https://www.google.com/maps?q=14.6091,121.0793&output=embed',
  },
]

export function getLocation(type) {
  return locations.find((l) => l.type === type)
}
