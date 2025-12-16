import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SolisBouw - Specialist in Verbouwingen',
  description: 'Transformeer uw woning met 25 jaar expertise. Van concept tot realisatie, wij maken het mogelijk.',
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
