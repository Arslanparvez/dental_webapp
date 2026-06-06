import { Helmet } from 'react-helmet-async'
import { SITE, buildTitle } from '../lib/seo'

export default function Seo({ title, description, image, path }) {
  const metaTitle = buildTitle(title)
  const metaDescription = description || SITE.defaultDescription
  const metaImage = image || SITE.ogImage
  const canonical = SITE.url + (path || '')

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  )
}
