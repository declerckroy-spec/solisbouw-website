import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SolisBouw - Specialist in Verbouwingen',
  description: 'Transformeer uw woning met 25 jaar expertise. Van concept tot realisatie, wij maken het mogelijk.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' }
    ],
  },
  themeColor: '#D4622F',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
