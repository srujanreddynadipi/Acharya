import { Star, Eye, Hand, Home, Sparkles, Moon, Flame, Heart, Smile, DoorOpen, Zap, Globe, Sun } from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  image: string
}

export const services: Service[] = [
  {
    id: 'vedic-jyotish',
    title: 'Vedic Jyotish',
    description: 'Birth chart analysis and planetary remedies (Graha Shanti) for life guidance.',
    icon: Star,
    image: '/images/Vedic Jyotish.png',
  },
  {
    id: 'palmistry',
    title: 'Hast Rekha (Palmistry)',
    description: 'Life path and karmic predictions through detailed hand reading.',
    icon: Hand,
    image: '/images/Hast Rekha (Palmistry).png',
  },
  {
    id: 'vastu-shanti',
    title: 'Vastu Shanti',
    description: 'Harmonizing home and workplace energy for prosperity and harmony.',
    icon: Home,
    image: '/images/Vastu Shanti.jpeg',
  },
  {
    id: 'nakshatra-shanti',
    title: 'Nakshatra Shanti',
    description: 'Birth star pacification rituals for cosmic alignment and well-being.',
    icon: Moon,
    image: '/images/nakshatra-shanti.png',
  },
  {
    id: 'yagnas-homas',
    title: 'Yagnas & Homas',
    description: 'Sacred fire ceremonies for wealth, health, prosperity, and fulfillment.',
    icon: Flame,
    image: '/images/Yagnas & Homas.png',
  },
  {
    id: 'vivaha-yog',
    title: 'Vivaha Yog (Marriage)',
    description: 'Kundali matching, marriage compatibility, and love marriage remedies.',
    icon: Heart,
    image: '/images/Vivaha Yog (Marriage).png',
  },
  {
    id: 'santhana-yog',
    title: 'Santhana Yog',
    description: 'Blessings and rituals for healthy childbirth and offspring welfare.',
    icon: Smile,
    image: '/images/Santhana Yog.png',
  },
  {
    id: 'gruha-pravesh',
    title: 'Gruha Pravesh',
    description: 'Housewarming ceremonies and rituals for new home blessings.',
    icon: DoorOpen,
    image: '/images/Gruha Pravesh.png',
  },
  {
    id: 'tantric-puja',
    title: 'Tantric Puja',
    description: 'Advanced tantric rituals for specific spiritual goals and transformations.',
    icon: Zap,
    image: '/images/Tantric Puja.jpeg',
  },
  {
    id: 'foreign-travel',
    title: 'Foreign Travel (Videsh Yog)',
    description: 'Muhurta guidance and remedies for successful travels and relocations abroad.',
    icon: Globe,
    image: '/images/Foreign Travel (Videsh Yog).jpg',
  },
  {
    id: 'navagrah-shanti',
    title: 'Navagrah Shanti',
    description: 'Nine-planet pacification rituals for cosmic balance and well-being.',
    icon: Sun,
    image: '/images/Navgraha.png',
  },
]
