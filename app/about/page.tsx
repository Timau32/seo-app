import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'О нас',
  description:
    'Смесители Бишкек - ведущий поставщик качественных смесителей для кухни и ванной комнаты в Кыргызстане. Узнайте больше о нашей компании и наших ценностях.',
  alternates: {
    canonical: '/about',
  },
}

/**
 * About page with semantic HTML5 structure
 */
export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Главная', url: '/' },
    { name: 'О нас' },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article className="bg-white rounded-lg shadow-md p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              О компании Смесители Бишкек
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Кто мы
              </h2>
              <p className="text-gray-700 mb-4">
                Смесители Бишкек - ведущий поставщик качественных смесителей для кухни и ванной комнаты.
                Мы работаем на рынке Кыргызстана уже более 8 лет и за это время заслужили доверие тысяч клиентов
                по всей стране.
              </p>
              <p className="text-gray-700">
                Наша миссия - предоставлять клиентам качественную сантехнику по доступным ценам,
                обеспечивая высокий уровень сервиса на всех этапах сотрудничества.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Наши преимущества
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Только оригинальная продукция от ведущих производителей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Официальная гарантия на все товары</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Быстрая доставка по всей России</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Профессиональная консультация специалистов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Конкурентные цены и регулярные акции</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Наши партнеры
              </h2>
              <p className="text-gray-700 mb-4">
                Мы сотрудничаем с ведущими мировыми производителями сантехники:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• GROHE - немецкое качество и инновационные технологии</li>
                <li>• Hansgrohe - премиальные решения для ванной комнаты</li>
                <li>• Axor - дизайнерская сантехника класса люкс</li>
                <li>• Blanco - функциональные решения для кухни</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
