import Link from 'next/link'

/**
 * Main site header with semantic HTML5 structure
 * Implements WHATWG HTML5 specification for header element
 */
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Смесители Бишкек
              </span>
            </Link>
          </div>

          <nav aria-label="Основная навигация">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/kitchen"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Для кухни
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/bathroom"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Для ванной
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  aria-label="Корзина покупок"
                >
                  🛒 Корзина
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
