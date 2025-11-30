import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

/**
 * Product card component demonstrating advanced semantic HTML5 structure
 *
 * Semantic elements used (following WHATWG HTML5 specification):
 * - article: Self-contained composition that could be independently distributed
 * - header: Introductory content within the article (product name and image)
 * - footer: Metadata about the product (price, ratings, material specs)
 * - data: Machine-readable price value with human-readable display
 * - b: Product name as a keyword/attention-drawing element (without strong importance)
 * - i: Material specs in different voice (technical specifications)
 * - mark: Highlights "out of stock" status as relevant/notable to user
 * - strong: Price has strong importance for user decision
 * - small: Supplementary info (review count)
 */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.slug}`} className="block">
        {/* WHATWG: header represents "introductory content for its nearest
            ancestor sectioning content" - product image and name introduce this article */}
        <header>
          <div className="relative h-64 bg-gray-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {!product.availability && (
              /* WHATWG: mark represents "a run of text marked or highlighted
                 for reference purposes, due to its relevance" - out of stock
                 is highly relevant information for the user */
              <mark className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Нет в наличии
              </mark>
            )}
          </div>
          <div className="p-4 pb-2">
            {/* WHATWG: h3 provides heading. b element inside draws attention
                to product name without implying strong importance */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              <b>{product.name}</b>
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          </div>
        </header>

        {/* WHATWG: footer represents metadata about the article.
            Can appear anywhere in section, not just at end. Contains
            price, ratings, and technical specifications */}
        <footer className="px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              {/* WHATWG: data element "links content with machine-readable form"
                  value attribute provides machine-readable price */}
              <data
                value={product.price}
                className="text-2xl font-bold text-gray-900"
              >
                {/* WHATWG: strong indicates "strong importance" -
                    price is critically important for purchasing decision */}
                <strong>{product.price.toLocaleString('ru-RU')} сом</strong>
              </data>
            </div>
            {product.rating && (
              <div className="flex items-center text-sm text-gray-600">
                <span className="text-yellow-500 mr-1" aria-label="Рейтинг">★</span>
                <span>{product.rating}</span>
                {/* WHATWG: small represents "side comments such as small print" -
                    review count is supplementary to the main rating value */}
                <small className="ml-1">({product.reviewCount})</small>
              </div>
            )}
          </div>

          {/* WHATWG: i represents "text in an alternate voice or mood" -
              technical specifications are in a different "voice" from
              the marketing description above. Using not-italic class
              to remove default italic styling while preserving semantics */}
          <div className="flex flex-wrap gap-2">
            <i className="not-italic text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {product.material}
            </i>
            <i className="not-italic text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {product.finish}
            </i>
          </div>
        </footer>
      </Link>
    </article>
  )
}
