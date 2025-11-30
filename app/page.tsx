import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/lib/products'

/**
 * Home page demonstrating exemplary WHATWG HTML5 semantic structure
 *
 * Complete semantic element guide used in this page:
 *
 * SECTIONING CONTENT:
 * - section: Thematic groupings with headings (categories, features, products)
 * - article: Self-contained compositions (feature benefits, testimonials if added)
 * - nav: Major navigation blocks (category links)
 * - aside: Tangentially related content (promotional banners, sidebars)
 *
 * TEXT-LEVEL SEMANTICS:
 * - strong: Strong importance/seriousness (prices, key benefits, CTAs)
 * - em: Stress emphasis changing meaning (promotional messages)
 * - b: Keywords/attention without importance (product names, feature titles)
 * - i: Alternate voice/mood (technical terms, foreign phrases)
 * - mark: Highlighted/relevant text (special offers, new items)
 * - small: Fine print/side comments (disclaimers, footnotes)
 * - data: Machine-readable values (prices, quantities)
 * - time: Machine-readable dates (promotion end dates, publication dates)
 *
 * GROUPING CONTENT:
 * - dl/dt/dd: Description lists (features, specifications)
 * - figure/figcaption: Illustrations with captions
 * - p: Paragraphs
 * - blockquote: Quotations
 */
export default function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="bg-gray-50">
      {/* WHATWG: section represents "thematic grouping of content, typically with heading"
          This hero section groups the main value proposition and CTAs */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Main h1 for the page - represents the primary topic */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {/* WHATWG: b element "draws attention" without implying importance
                  Used for keywords in headlines */}
              Качественные <b>смесители</b> в Бишкеке
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {/* WHATWG: em represents "stress emphasis" - emphasizing "ведущих"
                  changes the meaning - not just any manufacturers, but leading ones */}
              Большой выбор смесителей для кухни и ванной от <em>ведущих</em> мировых производителей. Доставка по Бишкеку и Кыргызстану
            </p>

            {/* WHATWG: nav represents "major navigation blocks" - these CTAs
                are primary navigation paths for users */}
            <nav aria-label="Основные действия" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {/* WHATWG: strong indicates "strong importance" -
                    primary CTA is critically important for user flow */}
                <strong>Смотреть каталог</strong>
              </Link>
              <Link
                href="/contact"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-white"
              >
                Связаться с нами
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* WHATWG: section for categories - thematic grouping with heading */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Категории товаров
        </h2>

        {/* WHATWG: nav for category navigation - major navigation block */}
        <nav aria-label="Категории товаров">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  {/* WHATWG: b draws attention to category name as keyword */}
                  <h3 className="text-xl font-semibold text-gray-900">
                    <b>{category.name}</b>
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* WHATWG: section for featured products - thematic grouping */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section header with navigation to full catalog */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {/* WHATWG: mark highlights "Популярные" as this section showcases
                specially selected/relevant products */}
            <mark className="bg-transparent text-gray-900">Популярные</mark> товары
          </h2>
          <Link href="/products" className="text-blue-600 hover:text-blue-800 font-semibold">
            {/* WHATWG: strong for important navigation action */}
            <strong>Смотреть все →</strong>
          </Link>
        </header>

        {/* Grid of product cards - each card is an article (see ProductCard component) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* WHATWG: section for company benefits - thematic grouping */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Почему выбирают нас
          </h2>

          {/* WHATWG: dl/dt/dd - description list is semantically perfect
              for presenting feature names with their descriptions */}
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              {/* Using figure for icon+content grouping */}
              <figure>
                <div className="text-4xl mb-4" role="img" aria-label="Доставка">
                  🚚
                </div>
                {/* WHATWG: dt represents "term" in description list */}
                <dt className="text-xl font-semibold mb-2">
                  {/* WHATWG: b for keyword attention */}
                  <b>Быстрая доставка</b>
                </dt>
                {/* WHATWG: dd represents "description" for the term */}
                <dd className="text-gray-600">
                  {/* WHATWG: em for stress emphasis - "в кратчайшие сроки"
                      is the key differentiator */}
                  Доставка по Бишкеку — <em>в день заказа</em>, по Кыргызстану — 1-3 дня
                </dd>
              </figure>
            </div>

            <div className="text-center">
              <figure>
                <div className="text-4xl mb-4" role="img" aria-label="Гарантия">
                  ✅
                </div>
                <dt className="text-xl font-semibold mb-2">
                  <b>Гарантия качества</b>
                </dt>
                <dd className="text-gray-600">
                  {/* WHATWG: strong for "critically important" information -
                      official warranty is a key selling point */}
                  Все товары сертифицированы и имеют <strong>официальную гарантию</strong>
                </dd>
              </figure>
            </div>

            <div className="text-center">
              <figure>
                <div className="text-4xl mb-4" role="img" aria-label="Поддержка">
                  💬
                </div>
                <dt className="text-xl font-semibold mb-2">
                  <b>Поддержка клиентов</b>
                </dt>
                <dd className="text-gray-600">
                  Наши специалисты помогут выбрать подходящий смеситель
                </dd>
              </figure>
            </div>
          </dl>
        </div>
      </section>

      {/* WHATWG: aside represents "content tangentially related to the content
          around it" - promotional banner is supplementary to main content */}
      <aside className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {/* WHATWG: mark highlights special offer - highly relevant to user */}
            <mark className="bg-yellow-300 text-green-900 px-2">
              Специальное предложение
            </mark>
          </h2>
          <p className="text-xl mb-2">
            {/* WHATWG: strong for important discount information */}
            Скидка до <strong>25%</strong> на смесители <i className="not-italic">Grohe</i>
          </p>
          {/* WHATWG: small for fine print/supplementary info */}
          <p>
            <small>
              {/* WHATWG: time element with datetime for machine-readable date */}
              Акция действует до <time dateTime="2025-12-31">31 декабря 2025</time>
            </small>
          </p>
          <Link
            href="/products"
            className="inline-block mt-6 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            <strong>Посмотреть товары со скидкой</strong>
          </Link>
        </div>
      </aside>

      {/* WHATWG: section for additional information/features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          О наших товарах
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WHATWG: article represents "self-contained composition" -
              each informational block can stand alone */}
          <article className="bg-white p-6 rounded-lg shadow-md">
            <header>
              <h3 className="text-xl font-semibold mb-3">
                <b>Премиальные бренды</b>
              </h3>
            </header>
            <p className="text-gray-700 mb-4">
              Мы работаем только с проверенными производителями: <i className="not-italic">GROHE</i>,{' '}
              <i className="not-italic">Hansgrohe</i>, <i className="not-italic">Axor</i>,{' '}
              <i className="not-italic">Blanco</i>. Каждый бренд представляет{' '}
              {/* WHATWG: em for stress emphasis */}
              <em>высочайшее</em> немецкое качество и инновации.
            </p>
            <footer>
              {/* WHATWG: small for footnote/supplementary information */}
              <small className="text-gray-500">
                Более 10 лет опыта работы с ведущими брендами
              </small>
            </footer>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <header>
              <h3 className="text-xl font-semibold mb-3">
                <b>Гарантия и сервис</b>
              </h3>
            </header>
            <p className="text-gray-700 mb-4">
              На все товары распространяется{' '}
              {/* WHATWG: strong for strongly important information */}
              <strong>официальная гарантия производителя</strong> от 2 до 5 лет.
              Наш сервисный центр обеспечивает быстрое решение любых вопросов.
            </p>
            <footer>
              <small className="text-gray-500">
                Бесплатная консультация по установке и обслуживанию
              </small>
            </footer>
          </article>
        </div>
      </section>
    </div>
  )
}
