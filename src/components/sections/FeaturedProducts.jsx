import { products } from '../../data/products'
import { SectionHeading } from '../ui/SectionHeading'
import { Carousel } from '../ui/Carousel'
import { FadeIn } from '../ui/FadeIn'
import { ProductCard } from './ProductCard'

const featured = products.filter((p) => p.featured)

export function FeaturedProducts() {
  return (
    <div>
      <SectionHeading
        eyebrow="Catalog Highlights"
        title="Featured Products"
        subtitle="Premium materials, equipment, and components trusted by laboratories worldwide."
      />
      <FadeIn className="mt-12">
        <Carousel
          items={featured}
          perView={{ base: 3 }}
          ariaLabel="Featured products"
          renderItem={(product) => <ProductCard product={product} />}
        />
      </FadeIn>
    </div>
  )
}
