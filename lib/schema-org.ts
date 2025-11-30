import { siteConfig } from './config'

/**
 * Schema.org JSON-LD helpers for SEO optimization
 */

export interface Organization {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  contactPoint: {
    '@type': 'ContactPoint'
    telephone: string
    contactType: string
    availableLanguage: string[]
  }
  sameAs: string[]
}

export interface Product {
  '@context': 'https://schema.org'
  '@type': 'Product'
  name: string
  image: string[]
  description: string
  brand: {
    '@type': 'Brand'
    name: string
  }
  offers: {
    '@type': 'Offer'
    url: string
    priceCurrency: string
    price: string
    availability: string
    itemCondition: string
  }
  aggregateRating?: {
    '@type': 'AggregateRating'
    ratingValue: string
    reviewCount: string
  }
}

export interface BreadcrumbList {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item?: string
  }>
}

export interface WebSite {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  potentialAction: {
    '@type': 'SearchAction'
    target: string
    'query-input': string
  }
}

/**
 * Creates Organization schema markup
 */
export function createOrganizationSchema(): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneRaw,
      contactType: 'customer service',
      availableLanguage: ['ru', 'ky'],
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.whatsapp,
    ],
  }
}

/**
 * Creates Product schema markup
 */
export function createProductSchema(product: {
  name: string
  slug: string
  images: string[]
  description: string
  price: number
  currency: string
  availability: boolean
  rating?: number
  reviewCount?: number
}): Product {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${siteConfig.baseUrl}/products/${product.slug}`,
      priceCurrency: product.currency,
      price: product.price.toString(),
      availability: product.availability
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
    ...(product.rating && product.reviewCount
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating.toString(),
            reviewCount: product.reviewCount.toString(),
          },
        }
      : {}),
  }
}

/**
 * Creates BreadcrumbList schema markup
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url?: string }>): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: `${siteConfig.baseUrl}${item.url}` } : {}),
    })),
  }
}

/**
 * Creates WebSite schema markup with search action
 */
export function createWebSiteSchema(): WebSite {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}
