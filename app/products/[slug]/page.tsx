import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getProductBySlug, products } from '@/lib/products'
import { createProductSchema } from '@/lib/schema-org'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

/**
 * Generates metadata for product pages
 */
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Товар не найден',
    }
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `/products/${product.slug}`,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: 'website',
    },
  }
}

/**
 * Generates static params for all products
 */
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

/**
 * Product detail page demonstrating exemplary semantic HTML5 structure
 *
 * WHATWG HTML5 semantic elements used:
 * - article: Complete, self-contained composition (the product)
 * - header: Introductory content (product name, rating)
 * - section: Thematic groupings (description, specs, features)
 * - aside: Tangentially related content (image gallery)
 * - dl/dt/dd: Description list for technical specifications
 * - data: Machine-readable price data
 * - time: Machine-readable date (to be added for promotions)
 * - b: Product name attention without strong importance
 * - strong: Emphasizes critical information (price, availability)
 * - em: Stress emphasis for promotional messages
 * - mark: Highlights special status (new, sale, out of stock)
 * - i: Technical terms in alternate voice
 * - small: Fine print/supplementary info
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Главная', url: '/' },
    { name: 'Каталог', url: '/products' },
    { name: product.name },
  ]

  const productSchema = createProductSchema({
    name: product.name,
    slug: product.slug,
    images: product.images,
    description: product.description,
    price: product.price,
    currency: product.currency,
    availability: product.availability,
    rating: product.rating,
    reviewCount: product.reviewCount,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* WHATWG: article is "a complete, or self-contained, composition"
              that is "independently distributable" - this product page
              can stand alone and be shared independently */}
          <article itemScope itemType="https://schema.org/Product">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* WHATWG: aside represents "content tangentially related
                    to the content around it" - image gallery is supplementary
                    visual content supporting the main product information */}
                <aside>
                  <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      itemProp="image"
                      priority
                    />
                  </div>
                  {product.images.length > 1 && (
                    <nav aria-label="Дополнительные изображения товара">
                      <div className="grid grid-cols-4 gap-2">
                        {product.images.slice(1).map((image, index) => (
                          <div
                            key={index}
                            className="relative h-20 bg-gray-100 rounded overflow-hidden"
                          >
                            <Image
                              src={image}
                              alt={`${product.name} - изображение ${index + 2}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </nav>
                  )}
                </aside>

                <div>
                  {/* WHATWG: header represents "introductory content" for
                      the article - product name and rating introduce the product */}
                  <header className="mb-6">
                    {/* Using b for product name - it's a keyword/attention element
                        but doesn't have "strong importance" in document structure */}
                    <h1
                      className="text-3xl font-bold text-gray-900 mb-4"
                      itemProp="name"
                    >
                      <b>{product.name}</b>
                    </h1>
                    {product.rating && (
                      <div
                        className="flex items-center mb-4"
                        itemProp="aggregateRating"
                        itemScope
                        itemType="https://schema.org/AggregateRating"
                      >
                        <div className="flex text-yellow-500 mr-2" aria-label={`Рейтинг ${product.rating} из 5`}>
                          {[...Array(5)].map((_, i) => (
                            <span key={i} aria-hidden="true">
                              {i < Math.floor(product.rating!) ? '★' : '☆'}
                            </span>
                          ))}
                        </div>
                        <span className="text-gray-600">
                          <span itemProp="ratingValue">{product.rating}</span>
                          {/* WHATWG: small represents "side comments such as small print" -
                              review count is supplementary info to the rating */}
                          {' '}<small>(<span itemProp="reviewCount">{product.reviewCount}</span> отзывов)</small>
                        </span>
                      </div>
                    )}
                  </header>

                  {/* Price section with data element for machine-readable value */}
                  <div
                    className="mb-6 p-4 bg-gray-50 rounded-lg"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    {/* WHATWG: data "links content with a machine-readable form"
                        value attribute provides machine-readable price */}
                    <data
                      value={product.price}
                      className="text-4xl font-bold text-gray-900 block mb-2"
                      itemProp="price"
                    >
                      {/* WHATWG: strong indicates "strong importance" -
                          price is critically important for purchase decision */}
                      <strong>{product.price.toLocaleString('ru-RU')} сом</strong>
                    </data>
                    <meta itemProp="priceCurrency" content={product.currency} />
                    <link
                      itemProp="availability"
                      href={
                        product.availability
                          ? 'https://schema.org/InStock'
                          : 'https://schema.org/OutOfStock'
                      }
                    />
                    {product.availability ? (
                      /* WHATWG: em represents "stress emphasis" - emphasizing
                         availability status changes meaning for user */
                      <p className="text-green-600">
                        ✓ <em>В наличии</em>
                      </p>
                    ) : (
                      /* WHATWG: mark represents "highlighted text due to relevance" -
                         out of stock is highly relevant to purchasing decision */
                      <p className="text-red-600">
                        ✗ <mark className="bg-red-100 px-1">Нет в наличии</mark>
                      </p>
                    )}
                  </div>

                  {/* WHATWG: section represents "a generic section" as "a thematic
                      grouping of content, typically with a heading" */}
                  <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Описание</h2>
                    <p className="text-gray-700" itemProp="description">
                      {product.description}
                    </p>
                  </section>

                  {/* Technical specifications section using description list */}
                  <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">
                      Технические характеристики
                    </h2>
                    {/* WHATWG: dl/dt/dd represents "description list" - perfect
                        semantic structure for name-value pairs like specifications */}
                    <dl className="space-y-2 bg-gray-50 p-4 rounded-lg">
                      <div className="flex">
                        <dt className="font-medium text-gray-700 w-32">
                          Материал:
                        </dt>
                        {/* WHATWG: i represents "text in alternate voice or mood" -
                            technical specs are in different "voice" from marketing copy */}
                        <dd className="text-gray-900">
                          <i className="not-italic">{product.material}</i>
                        </dd>
                      </div>
                      <div className="flex">
                        <dt className="font-medium text-gray-700 w-32">
                          Покрытие:
                        </dt>
                        <dd className="text-gray-900">
                          <i className="not-italic">{product.finish}</i>
                        </dd>
                      </div>
                      <div className="flex">
                        <dt className="font-medium text-gray-700 w-32">
                          Категория:
                        </dt>
                        <dd className="text-gray-900">
                          <i className="not-italic">{product.category}</i>
                        </dd>
                      </div>
                    </dl>
                  </section>

                  {/* Features section */}
                  {product.features.length > 0 && (
                    <section className="mb-6">
                      <h2 className="text-xl font-semibold mb-3">
                        Ключевые особенности
                      </h2>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {product.features.map((feature, index) => (
                          <li key={index}>
                            {/* Using strong for features as they are important
                                selling points of the product */}
                            <strong className="font-normal">{feature}</strong>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <button
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled={!product.availability}
                      aria-label={
                        product.availability
                          ? 'Добавить товар в корзину'
                          : 'Товар недоступен'
                      }
                    >
                      Добавить в корзину
                    </button>
                    <button
                      className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                      aria-label="Добавить в избранное"
                    >
                      ♥
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
