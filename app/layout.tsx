import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createOrganizationSchema, createWebSiteSchema } from "@/lib/schema-org";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Смесители Бишкек - Купить смесители для кухни и ванной в Бишкеке",
    template: "%s | Смесители Бишкек",
  },
  description:
    "Интернет-магазин качественных смесителей для кухни и ванной комнаты в Бишкеке. Большой выбор смесителей GROHE, Hansgrohe, Axor. Доставка по Бишкеку и Кыргызстану. Гарантия качества.",
  authors: [{ name: "Смесители Бишкек" }],
  creator: "Смесители Бишкек",
  publisher: "Смесители Бишкек",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.kg"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_KG",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.kg",
    siteName: "Смесители Бишкек",
    title: "Смесители Бишкек - Купить смесители для кухни и ванной",
    description:
      "Интернет-магазин качественных смесителей для кухни и ванной комнаты в Бишкеке. Большой выбор смесителей GROHE, Hansgrohe, Axor.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Смесители Бишкек",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Смесители Бишкек - Купить смесители для кухни и ванной",
    description:
      "Интернет-магазин качественных смесителей для кухни и ванной комнаты в Бишкеке.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = createOrganizationSchema();
  const websiteSchema = createWebSiteSchema();

  return (
    <html lang="ru" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
