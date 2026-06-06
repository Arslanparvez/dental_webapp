import { Link } from 'react-router-dom'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { categories } from '../../data/categories'

const categoryName = (slug) => categories.find((c) => c.slug === slug)?.name || slug

export function ProductCard({ product }) {
  const image = product.images?.[0]

  return (
    <Card hoverable className="group h-full overflow-hidden">
      <Link
        to={`/products/${product.slug}`}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
      >
        <div className="aspect-[4/3] overflow-hidden bg-lightgray">
          {image && (
            <img
              src={image}
              alt={product.name}
              loading="lazy"
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <Badge tone="teal" className="self-start">
            {categoryName(product.category)}
          </Badge>
          <h3 className="mt-3 font-heading text-lg font-semibold text-navy">{product.name}</h3>
          <p className="mt-2 line-clamp-2 font-body text-sm leading-relaxed text-navy/70">
            {product.shortDescription}
          </p>
        </div>
      </Link>
    </Card>
  )
}
