import Link from 'next/link'

/**
 * Main site footer with semantic HTML5 structure
 * Implements WHATWG HTML5 specification for footer element with address and contact information
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <section aria-labelledby="company-heading">
            <h2 id="company-heading" className="text-lg font-semibold mb-4">
              О компании
            </h2>
            <p className="text-gray-400 text-sm">
              Смесители Бишкек - ведущий поставщик качественных смесителей для кухни и ванной комнаты в Кыргызстане.
            </p>
          </section>

          <nav aria-labelledby="catalog-heading">
            <h2 id="catalog-heading" className="text-lg font-semibold mb-4">
              Каталог
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/kitchen" className="text-gray-400 hover:text-white transition-colors">
                  Кухонные смесители
                </Link>
              </li>
              <li>
                <Link href="/categories/bathroom" className="text-gray-400 hover:text-white transition-colors">
                  Смесители для ванной
                </Link>
              </li>
              <li>
                <Link href="/categories/shower" className="text-gray-400 hover:text-white transition-colors">
                  Душевые смесители
                </Link>
              </li>
              <li>
                <Link href="/categories/basin" className="text-gray-400 hover:text-white transition-colors">
                  Смесители для раковины
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="info-heading">
            <h2 id="info-heading" className="text-lg font-semibold mb-4">
              Информация
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-400 hover:text-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-400 hover:text-white transition-colors">
                  Гарантия
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className="text-lg font-semibold mb-4">Контакты</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+996555123456" className="hover:text-white transition-colors">
                  +996 (555) 123-456
                </a>
              </li>
              <li>
                <a href="mailto:info@smesiteli.kg" className="hover:text-white transition-colors">
                  info@smesiteli.kg
                </a>
              </li>
              <li>
                г. Бишкек, пр. Чуй, 219
              </li>
              <li className="pt-2">
                Режим работы: Пн-Сб 9:00-19:00, Вс 10:00-17:00
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Смесители Бишкек. Все права защищены.
          </p>
          <nav aria-label="Социальные сети" className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com/smesiteli.bishkek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/smesiteli.bishkek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/996555123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
