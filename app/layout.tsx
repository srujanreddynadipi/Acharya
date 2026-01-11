import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-poppins', display: 'swap' })

export const metadata: Metadata = {
  title: 'Durgesh tiwari Nizamabad | Kaal Sarp Dosh Puja | Pandit Ravi Guruji',
  description:
    'Book Kaal Sarp Dosh Puja at Trimbakeshwar with Pandit Ravi Guruji. 30+ years experience, 32,000+ pujas performed. Expert in Mahamrityunjay Jaap, Narayan Nagabali, Rudrabhishekh.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Durgesh tiwari Nizamabad | Kaal Sarp Dosh Puja',
    description:
      'Book Kaal Sarp Dosh Puja at Trimbakeshwar with Pandit Ravi Guruji. 30+ years experience, 32,000+ pujas performed.',
    url: 'https://example.com',
    siteName: 'Durgesh tiwari Nizamabad',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Trimbakeshwar Pandit Services' },
    ],
    type: 'website',
  },
  metadataBase: new URL('https://example.com'),
}

export const viewport = {
  themeColor: '#FFFBEB',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-inter min-h-screen bg-gradient-to-b from-[#FFFBEB] via-[#FDE68A] to-white text-[#1F2937] antialiased`}>        
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
