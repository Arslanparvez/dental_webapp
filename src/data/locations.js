export const locations = [
  {
    id: 'hq',
    name: 'Digiart Design Services — Head Office',
    type: 'HQ',
    address:
      'Falcon Apartment, Shop No. 3, Khalid bin Waleed Road, Bur Dubai, Dubai, United Arab Emirates',
    phone: '+971 58 682 5051',
    whatsapp: '971586825051',
    email: 'info@digiartdesignservices.com',
    hours: 'Sun–Thu: 9:00 AM – 6:00 PM (GST)',
    lat: 25.2582,
    lng: 55.2962,
    mapEmbedUrl:
      'https://www.google.com/maps?q=Falcon+Apartment+Khalid+bin+Al+Waleed+Road+Bur+Dubai+Dubai&output=embed',
  },
]

export function getLocation(type) {
  return locations.find((l) => l.type === type)
}
