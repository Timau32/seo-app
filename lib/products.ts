/**
 * Product data types and mock data for the e-commerce store
 */

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  currency: string
  images: string[]
  category: string
  material: string
  finish: string
  availability: boolean
  rating?: number
  reviewCount?: number
  features: string[]
}

export const categories = [
  { id: 'kitchen', name: 'Кухонные смесители', slug: 'kitchen' },
  { id: 'bathroom', name: 'Смесители для ванной', slug: 'bathroom' },
  { id: 'shower', name: 'Душевые смесители', slug: 'shower' },
  { id: 'basin', name: 'Смесители для раковины', slug: 'basin' },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Смеситель для кухни GROHE Essence',
    slug: 'grohe-essence-kitchen',
    description: 'Премиальный кухонный смеситель с выдвижным изливом и технологией SilkMove для плавного управления температурой и напором воды.',
    price: 18500,
    currency: 'KGS',
    images: [
      'https://images.unsplash.com/photo-1585847787681-26c7aec6210d',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba'
    ],
    category: 'kitchen',
    material: 'Латунь',
    finish: 'Хром',
    availability: true,
    rating: 4.8,
    reviewCount: 124,
    features: [
      'Выдвижной излив',
      'Технология SilkMove',
      'Система быстрого монтажа',
      'Керамический картридж',
    ],
  },
  {
    id: '2',
    name: 'Смеситель для ванны Hansgrohe Logis',
    slug: 'hansgrohe-logis-bath',
    description: 'Элегантный смеситель для ванной комнаты с автоматическим переключателем ванна-душ. Качественная немецкая сборка.',
    price: 9800,
    currency: 'KGS',
    images: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a'
    ],
    category: 'bathroom',
    material: 'Латунь',
    finish: 'Хром',
    availability: true,
    rating: 4.6,
    reviewCount: 89,
    features: [
      'Автоматический переключатель',
      'EcoSmart экономия воды',
      'QuickClean система очистки',
      'Термостатический картридж',
    ],
  },
  {
    id: '3',
    name: 'Душевой смеситель Grohe Eurosmart',
    slug: 'grohe-eurosmart-shower',
    description: 'Современный душевой смеситель с технологией EcoJoy для экономии воды до 50% без потери комфорта.',
    price: 7850,
    currency: 'KGS',
    images: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14',
      'https://images.unsplash.com/photo-1564540579594-0930edb6de43'
    ],
    category: 'shower',
    material: 'Латунь',
    finish: 'Хром',
    availability: true,
    rating: 4.7,
    reviewCount: 156,
    features: [
      'Технология EcoJoy',
      'StarLight хромированное покрытие',
      'Встроенный обратный клапан',
      'Быстрая установка',
    ],
  },
  {
    id: '4',
    name: 'Смеситель для раковины Axor Citterio',
    slug: 'axor-citterio-basin',
    description: 'Дизайнерский смеситель премиум-класса для раковины. Итальянский дизайн от Antonio Citterio.',
    price: 28900,
    currency: 'KGS',
    images: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101',
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39'
    ],
    category: 'basin',
    material: 'Латунь',
    finish: 'Матовый хром',
    availability: true,
    rating: 4.9,
    reviewCount: 67,
    features: [
      'Дизайн Antonio Citterio',
      'AirPower технология аэрации',
      'Керамический картридж Hansgrohe',
      'ComfortZone увеличенная высота излива',
    ],
  },
  {
    id: '5',
    name: 'Кухонный смеситель Blanco Linus-S',
    slug: 'blanco-linus-s',
    description: 'Функциональный кухонный смеситель с высоким изливом и системой фильтрации воды.',
    price: 14450,
    currency: 'KGS',
    images: [
      'https://images.unsplash.com/photo-1595514535116-52677f421d0a',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba'
    ],
    category: 'kitchen',
    material: 'Силгранит',
    finish: 'Антрацит',
    availability: false,
    rating: 4.5,
    reviewCount: 43,
    features: [
      'Высокий излив',
      'Интегрированная система фильтрации',
      'Поворот на 360°',
      'Устойчивое к царапинам покрытие',
    ],
  },
  {
    id: '6',
    name: 'Термостатический душевой смеситель Grohe Grohtherm',
    slug: 'grohe-grohtherm-thermostat',
    description: 'Премиальный термостатический смеситель с технологией TurboStat для мгновенного достижения нужной температуры.',
    price: 21950,
    currency: 'KGS',
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14'
    ],
    category: 'shower',
    material: 'Латунь',
    finish: 'Хром',
    availability: true,
    rating: 4.9,
    reviewCount: 201,
    features: [
      'Технология TurboStat',
      'SafeStop защита от ожогов при 38°C',
      'CoolTouch технология',
      'Встроенный обратный клапан',
    ],
  },
]

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

/**
 * Get products by category
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug)
}

/**
 * Get all available products
 */
export function getAvailableProducts(): Product[] {
  return products.filter(p => p.availability)
}
