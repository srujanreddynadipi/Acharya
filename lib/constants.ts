export const PALETTE = {
  PRIMARY: '#F59E0B',
  SECONDARY: '#FDE68A',
  BACKGROUND: '#FFFBEB',
  TEXT: '#1F2937',
  ACCENT: '#FB923C',
} as const

export const SITE = {
  NAME: 'Trimbakeshwar Pooja Services',
  DESCRIPTION:
    'Peaceful, authentic spiritual guidance and Trimbakeshwar pooja services. Book with trust and devotion.',
} as const

export type Lang = 'en' | 'te' | 'hi'
export const SUPPORTED_LANGS: Lang[] = ['en', 'te', 'hi']
