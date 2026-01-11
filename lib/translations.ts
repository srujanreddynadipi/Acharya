import type { Lang } from './constants'

export type TKey =
  | 'nav.home'
  | 'nav.about'
  | 'nav.services'
  | 'nav.why'
  | 'nav.contact'
  | 'action.bookNow'
  | 'hero.title'
  | 'hero.subtitle'
  | 'about.title'
  | 'services.title'
  | 'why.title'
  | 'contact.title'
  | 'cta.title'

export const translations: Record<Lang, Record<TKey, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.why': 'Why Choose Us',
    'nav.contact': 'Contact',
    'action.bookNow': 'Book Now',
    'hero.title': 'Acharya Durgesh Tiwari',
    'hero.subtitle': 'Vedic Astrologer | Priest | Spiritual Consultant. Trained at Kashi Vishwavidyalaya, Varanasi. Expert in Jyotish Shastra, Vaidik-Tantrik Pujas, Vastu Shanti, and life event ceremonies. Available for online consultations and in-person rituals across India and abroad.',
    'about.title': 'About Acharya Durgesh Tiwari',
    'services.title': 'My Services (Seva Prakar)',
    'why.title': 'Why Choose Him',
    'contact.title': 'Contact & Booking',
    'cta.title': 'Begin Your Devotional Journey',
  },
  te: {
    'nav.home': 'హోమ్',
    'nav.about': 'గురించి',
    'nav.services': 'సేవలు',
    'nav.why': 'ఎందుకు మేము',
    'nav.contact': 'సంప్రదించండి',
    'action.bookNow': 'బుక్ చేయండి',
    'hero.title': 'త్రిమ్బకేశ్వర్ పండిట్, నాసిక్',
    'hero.subtitle': 'శ్రావణం మరియు నాగ పంచమి సందర్భంగా త్రిమ్బకేశ్వర్‌లో మీ కాల సర్ప దోష పూజను బుక్ చేసుకోండి. పండిట్ రవి గురుజీ త్రిమ్బకేశ్వర్ నాసిక్‌లోని పండితులలో ఒకరు, కాల సర్ప దోష పూజ మరియు మహామృత్యుంజయ జాప్ చేయడంలో నిపుణుడు.',
    'about.title': 'గురుజీ గురించి',
    'services.title': 'మా పూజా సేవలు',
    'why.title': 'ఎందుకు ఆయనను ఎంచుకోవాలి',
    'contact.title': 'సంప్రదింపు & బుకింగ్',
    'cta.title': 'మీ భక్తి ప్రయాణాన్ని ప్రారంభించండి',
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएँ',
    'nav.why': 'क्यों चुनें हमें',
    'nav.contact': 'संपर्क',
    'action.bookNow': 'बुक करें',
    'hero.title': 'दुर्गेश तिवारी, निज़ामाबाद',
    'hero.subtitle': 'श्रावण और नाग पंचमी के अवसर पर त्र्यंबकेश्वर में अपनी काल सर्प दोष पूजा बुक करें। पंडित रवि गुरुजी त्र्यंबकेश्वर नासिक के पंडितों में से एक हैं, जो काल सर्प दोष पूजा और महामृत्युंजय जाप करने में मान्यता प्राप्त और विशेषज्ञ हैं।',
    'about.title': 'गुरुजी के बारे में',
    'services.title': 'हमारी पूजा सेवाएं',
    'why.title': 'उन्हें क्यों चुनें',
    'contact.title': 'संपर्क और बुकिंग',
    'cta.title': 'अपनी भक्ति यात्रा शुरू करें',
  },
}

export const t = (lang: Lang, key: TKey) => translations[lang][key]
