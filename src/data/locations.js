export const locations = [
  {
    id: 'hq',
    name: 'Digiart Design Services — Head Office',
    type: 'HQ',
    address:
      'Fahidi Heights Office Tower, 4th Floor, Bur Dubai, Dubai, United Arab Emirates (P.O. Box 624699)',
    phone: '+971 55 364 3849',
    whatsapp: '971553643849',
    email: 'info@digiartdesignservices.com',
    hours: 'Sun–Thu: 9:00 AM – 6:00 PM (GST)',
    lat: 25.2625,
    lng: 55.297,
    mapEmbedUrl: 'https://www.google.com/maps?q=25.2625,55.297&output=embed',
  },
]

export function getLocation(type) {
  return locations.find((l) => l.type === type)
}
