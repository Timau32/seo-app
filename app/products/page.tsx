import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Каталог смесителей',
  description:
    'Полный каталог смесителей для кухни и ванной комнаты. Смесители GROHE, Hansgrohe, Axor, Blanco. Большой выбор, доступные цены, гарантия качества.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Каталог смесителей | Смесители Бишкек',
    description:
      'Полный каталог смесителей для кухни и ванной комнаты. Большой выбор, доступные цены.',
    url: '/products',
  },
}

/**
 * Product catalog page with semantic HTML5 structure
 * Displays all available products with filtering and sorting capabilities
 */
export default function ProductsPage() {
  const breadcrumbItems = [
    { name: 'Главная', url: '/' },
    { name: 'Каталог товаров' },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог смесителей
          </h1>
          <p className="text-lg text-gray-600">
            Выбирайте из {products.length} товаров в нашем каталоге
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              К сожалению, товары не найдены
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
