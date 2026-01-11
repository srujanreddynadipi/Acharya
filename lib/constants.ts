export const PALETTE = {
  PRIMARY: '#F59E0B',
  SECONDARY: '#FDE68A',
  BACKGROUND: '#FFFBEB',
  TEXT: '#1F2937',
  ACCENT: '#FB923C',
} as const

export const SITE = {
  NAME: 'Acharya Durgesh Tiwari',
  DESCRIPTION:
    'Vedic Astrologer | Priest | Spiritual Consultant. Trained at Kashi Vishwavidyalaya, Varanasi. Expert in Jyotish Shastra, Vaidik-Tantrik Pujas, Vastu Shanti, and life event ceremonies. Available for online consultations and in-person rituals across India and abroad.',
} as const

export type Lang = 'en' | 'te' | 'hi'
export const SUPPORTED_LANGS: Lang[] = ['en', 'te', 'hi']
