import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Свяжитесь с нами по телефону +7 (800) 123-45-67 или email info@smesiteli.pro. Наши специалисты ответят на все ваши вопросы.',
  alternates: {
    canonical: '/contact',
  },
}

/**
 * Contact page with semantic HTML5 structure
 */
export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Главная', url: '/' },
    { name: 'Контакты' },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article className="bg-white rounded-lg shadow-md p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами удобным для вас способом
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Контактная информация
              </h2>
              <address className="not-italic space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                  <a
                    href="tel:+996555123456"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    +996 (555) 123-456
                  </a>
                  <p className="text-sm text-gray-600">Звоните в любое время</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:info@smesiteli.kg"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@smesiteli.kg
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                  <p>720000, г. Бишкек</p>
                  <p>пр. Чуй, 219</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Режим работы
                  </h3>
                  <p>Понедельник - Суббота: 9:00 - 19:00</p>
                  <p>Воскресенье: 10:00 - 17:00</p>
                </div>
              </address>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Форма обратной связи
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </section>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Социальные сети
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/smesiteli.bishkek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/smesiteli.bishkek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/996555123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                WhatsApp
              </a>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
