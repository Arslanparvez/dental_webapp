export const SITE = {
  name: 'Digiart Design Services',
  url: 'https://www.digiartdesignservices.com',
  defaultDescription:
    'Digiart Design Services is a digital dental CAD/CAM design studio in Dubai — crown & bridge, implant, All-on-X, removable, surgical guide, and appliance design for laboratories and clinics worldwide.',
  ogImage: '/og-image.jpg',
}

export function buildTitle(pageTitle) {
  return pageTitle ? `${pageTitle} | ${SITE.name}` : SITE.name
}
