import type { Metadata } from 'next'
import { EB_Garamond, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-baskerville',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Isabelle & Jose Luis | July 11, 2026',
  description: 'We\'re getting married! Join us to celebrate our wedding on Saturday, July 11, 2026 in Menlo Park, California.',
  openGraph: {
    title: 'Isabelle & Jose Luis | Wedding',
    description: 'Join us to celebrate our wedding on Saturday, July 11, 2026 in Menlo Park, California.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${libreBaskerville.variable}`}>
      <body className="font-garamond">
        {children}
      </body>
    </html>
  )
}

