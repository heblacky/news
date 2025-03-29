import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'News Portal',
  description: 'Stay updated with the latest news from around the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
} 