import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Nav } from '@/components/nav'
import { ForestBackground } from '@/components/forest-background'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Verdant — A digital forest of systems, stories, and ideas',
  description:
    'A calm digital forest operating system where creative work across media, systems, writing, design, and community exists as explorable worlds.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0B0F0D',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground min-h-screen relative">
        <ForestBackground />
        <div className="noise-overlay" aria-hidden="true" />
        <Nav />
        <div className="relative z-10">{children}</div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
