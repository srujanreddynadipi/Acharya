import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-poppins', display: 'swap' })

export const metadata: Metadata = {
  title: 'Acharya Durgesh Tiwari | Vedic Astrologer | Priest | Spiritual Consultant',
  description:
    'Acharya Durgesh Tiwari - Vedic Astrologer, Priest, Spiritual Consultant trained at Kashi Vishwavidyalaya, Varanasi. Expert in Jyotish Shastra, Vaidik-Tantrik Pujas, Vastu Shanti, and life event ceremonies. Available for online consultations and in-person rituals across India and abroad.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Acharya Durgesh Tiwari | Vedic Astrologer | Priest | Spiritual Consultant',
    description:
      'Vedic Astrologer, Priest, Spiritual Consultant trained at Kashi Vishwavidyalaya, Varanasi. Expert in Jyotish Shastra, Vaidik-Tantrik Pujas, Vastu Shanti, and life ceremonies. Online consultations & in-person rituals across India and abroad.',
    url: 'https://acharya-durgesh-tiwari.vercel.app',
    siteName: 'Acharya Durgesh Tiwari',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Acharya Durgesh Tiwari - Vedic Astrologer & Spiritual Consultant' },
    ],
    type: 'website',
  },
  metadataBase: new URL('https://acharya-durgesh-tiwari.vercel.app'),
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
