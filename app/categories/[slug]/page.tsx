import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { categories, getProductsByCategory } from '@/lib/products'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

/**
 * Generates metadata for category pages
 */
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return {
      title: 'Категория не найдена',
    }
  }

  return {
    title: category.name,
    description: `${category.name} - широкий выбор качественных смесителей по доступным ценам. Гарантия качества, доставка по Бишкеку и Кыргызстану.`,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} | Смесители Бишкек`,
      description: `${category.name} - широкий выбор качественных смесителей по доступным ценам.`,
      url: `/categories/${category.slug}`,
    },
  }
}

/**
 * Generates static params for all categories
 */
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

/**
 * Category page with semantic HTML5 structure
 * Displays products filtered by category
 */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(category.slug)

  const breadcrumbItems = [
    { name: 'Главная', url: '/' },
    { name: 'Каталог', url: '/products' },
    { name: category.name },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-gray-600">
            Найдено товаров: {categoryProducts.length}
          </p>
        </header>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg">
            <p className="text-xl text-gray-600">
              В данной категории пока нет товаров
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
