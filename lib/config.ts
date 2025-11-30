/**
 * Application configuration
 * Centralizes environment-dependent settings
 */

export const siteConfig = {
  name: 'Смесители Бишкек',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.kg',
  description: 'Интернет-магазин качественных смесителей для кухни и ванной комнаты в Бишкеке',
  email: 'info@smesiteli.kg',
  phone: '+996 (555) 123-456',
  phoneRaw: '+996555123456',
  address: {
    street: 'пр. Чуй, 219',
    city: 'Бишкек',
    postalCode: '720000',
    country: 'Кыргызстан',
  },
  workingHours: 'Понедельник - Суббота: 9:00 - 19:00, Воскресенье: 10:00 - 17:00',
  social: {
    facebook: 'https://facebook.com/smesiteli.bishkek',
    instagram: 'https://instagram.com/smesiteli.bishkek',
    whatsapp: 'https://wa.me/996555123456',
  },
} as const
