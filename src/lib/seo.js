export const SITE = {
  name: 'Digiart Centre',
  url: 'https://www.digiartcentre.com',
  defaultDescription:
    'Digiart Centre delivers advanced dental CAD/CAM design, trading solutions, and premium dental products for laboratories worldwide.',
  ogImage: '/og-image.jpg',
}

export function buildTitle(pageTitle) {
  return pageTitle ? `${pageTitle} | ${SITE.name}` : SITE.name
}
