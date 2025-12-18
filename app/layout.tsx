import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import LanguageSelector from '@/components/LanguageSelector'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Arun Impex',
  description: 'Leading supplier and distributor of Bitumen (VG Grades), Bitumen Emulsion (RS-1, MS, SS), and Furnace Oil. Serving road contractors, infrastructure companies, and industrial plants.',
  keywords: 'bitumen, bitumen emulsion, furnace oil, VG grades, road construction, infrastructure, industrial fuel',
  authors: [{ name: 'Arun Impex' }],
  icons: {
    icon: '/images/Browser.png',
    shortcut: '/images/Browser.png',
    apple: '/images/Browser.png',
  },
  openGraph: {
    title: 'Arun Impex - Industrial Fuel & Bitumen Supplier',
    description: 'Trusted supplier of Bitumen, Emulsion & Furnace Oil for infrastructure and industrial projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <LanguageSelector />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

