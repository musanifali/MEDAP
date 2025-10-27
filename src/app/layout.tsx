import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MEDAP International - Caring For Life | Premium Hospital Furniture',
  description: 'MEDAP International - Leading provider of high-quality hospital furniture, medical equipment, and healthcare facility solutions. Modern, durable, and ergonomic designs for better patient care.',
  keywords: 'hospital furniture, medical equipment, healthcare furniture, patient beds, medical chairs, hospital tables, MEDAP',
  authors: [{ name: 'MEDAP International' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2db8c7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}