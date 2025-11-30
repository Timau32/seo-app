import Link from 'next/link'
import { createBreadcrumbSchema } from '@/lib/schema-org'

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

/**
 * Breadcrumbs navigation component with Schema.org BreadcrumbList markup
 * Implements semantic HTML5 navigation with structured data for SEO
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = createBreadcrumbSchema(items)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Навигационная цепочка" className="py-4">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  /
                </span>
              )}
              {item.url ? (
                <Link
                  href={item.url}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-700" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
