import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Корзина',
  description: 'Корзина покупок - завершите оформление заказа',
  alternates: {
    canonical: '/cart',
  },
  robots: {
    index: false,
    follow: true,
  },
}

/**
 * Shopping cart page with semantic HTML5 structure
 */
export default function CartPage() {
  const breadcrumbItems = [
    { name: 'Главная', url: '/' },
    { name: 'Корзина' },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article className="bg-white rounded-lg shadow-md p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Корзина покупок
            </h1>
          </header>

          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl text-gray-600 mb-4">
              Ваша корзина пуста
            </p>
            <p className="text-gray-500 mb-8">
              Добавьте товары из каталога, чтобы оформить заказ
            </p>
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Перейти в каталог
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
