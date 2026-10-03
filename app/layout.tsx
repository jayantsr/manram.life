import type { Metadata, Viewport } from 'next'
import { Lora, DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmsans',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  themeColor: '#244C37',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://manram.life'),
  title: 'Manram | A Collective Wisdom — Explore. Experience. Evolve.',
  description:
    'A nature-based learning space where children, young people and adults come together to explore the many dimensions of life and living through experiences, observation, dialogue and shared discovery.',
  keywords: [
    'Manram',
    'A Collective Wisdom',
    'Explore Experience Evolve',
    'nature-based learning space',
    'experiential learning',
    'workshops and nature camps',
    'cultural retreats',
    'meaningful dialogue',
    'observation and inquiry',
    'Jiddu Krishnamurti inspired learning',
    'intergenerational learning',
    'Kerala open-air learning space',
  ],
  authors: [{ name: 'Manram' }],
  creator: 'Manram',
  publisher: 'Manram',
  openGraph: {
    title: 'Manram | A Collective Wisdom — Explore. Experience. Evolve.',
    description:
      'A nature-based learning space where children, young people and adults come together to explore the many dimensions of life and living through experiences, observation, dialogue and shared discovery.',
    url: 'https://manram.life',
    siteName: 'Manram — A Collective Wisdom',
    images: [
      {
        url: '/images/hero/hero-pavilion.jpeg',
        width: 1200,
        height: 630,
        alt: 'Manram Nature-Based Learning Space and Pavilion',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manram | A Collective Wisdom — Explore. Experience. Evolve.',
    description:
      'A nature-based learning space where children, young people and adults come together to explore the many dimensions of life and living.',
    images: ['/images/hero/hero-pavilion.jpeg'],
  },
  alternates: {
    canonical: 'https://manram.life',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-[#FAF8F2] text-charcoal min-h-screen antialiased selection:bg-forest selection:text-cream">
        {children}
      </body>
    </html>
  )
}
