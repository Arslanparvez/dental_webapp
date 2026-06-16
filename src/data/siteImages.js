// Real imagery sourced from the official Digiart Design Services website
// (digiartdesignservices.com) and served locally from /public/images/digiart.
// No placeholder/stock imagery is used anywhere in the app.
const B = '/images/digiart'

export const siteImages = {
  hero: `${B}/hero.jpg`,
  studio: `${B}/studio.jpg`,
  designClose: `${B}/design-1.jpg`,
  designWork: `${B}/design-2.jpg`,
  contact: `${B}/contact.png`,

  // Design-type imagery
  crown: `${B}/crown.png`,
  dentalBar: `${B}/dental-bar.png`,
  screwRetained: `${B}/screw-retained.png`,
  emaxVeneer: `${B}/emax-veneer.png`,
  partialFrame: `${B}/partial-frame.png`,

  // Case / restoration renders
  case1: `${B}/case-1.png`,
  case2: `${B}/case-2.png`,
  case3: `${B}/case-3.png`,
  case4: `${B}/case-4.png`,
  case5: `${B}/case-5.png`,
}

// Zirconia restoration photography (brand-free) used for the materials line.
const Z = '/images/zirconia'
export const zirconiaImages = {
  archLower: `${Z}/arch-lower.jpg`,
  copings: `${Z}/copings.jpg`,
  anterior1: `${Z}/anterior-1.jpg`,
  anterior2: `${Z}/anterior-2.jpg`,
  bridgeGingiva: `${Z}/bridge-gingiva.jpg`,
  posteriorModel: `${Z}/posterior-model.jpg`,
  anteriorCloseup: `${Z}/anterior-closeup.jpg`,
  fullArchImplant: `${Z}/full-arch-implant.jpg`,
  molars: `${Z}/molars.jpg`,
}

// A rotating pool used where a generic-but-real image is needed (gallery, blog).
export const imagePool = [
  siteImages.crown,
  siteImages.emaxVeneer,
  siteImages.screwRetained,
  siteImages.dentalBar,
  siteImages.partialFrame,
  siteImages.case1,
  siteImages.case2,
  siteImages.case3,
  siteImages.case4,
  siteImages.case5,
  siteImages.designClose,
  siteImages.designWork,
  siteImages.studio,
  siteImages.hero,
]
