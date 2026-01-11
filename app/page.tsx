"use client"

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ContactSection from '@/components/sections/ContactSection'
import CTASection from '@/components/sections/CTASection'
import type { Lang } from '@/lib/constants'

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('en')

  return (
    <>
      <Navbar lang={lang} onChangeLang={setLang} />
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <ServicesSection lang={lang} />
      <WhyChooseUs lang={lang} />
      <ContactSection lang={lang} />
      <CTASection lang={lang} />
      <Footer />
    </>
  )
}
