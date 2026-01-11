"use client"

import Image from 'next/image'
import Button from '@/components/ui/Button'
import type { Lang } from '@/lib/constants'
import { t } from '@/lib/translations'

type Props = { lang: Lang }

export default function HeroSection({ lang }: Props) {
  return (
    <section id="home" className="section-container py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl p-8 sm:p-10 bg-gradient-to-b from-[#FFFBEB] via-[#FDE68A] to-white">
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F2937]">
            {t(lang, 'hero.title')}
          </h1>
          <p className="mt-2 text-lg font-medium text-[#1F2937]/90 italic">
            लोका: समस्ता: सुखिनो भवन्तु।
          </p>
          <p className="mt-4 max-w-3xl text-[#1F2937]/80 leading-relaxed">
            {t(lang, 'hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as="a" href="#contact">{t(lang, 'action.bookNow')}</Button>
            <Button as="a" href="tel:+917013272777" className="!bg-white !text-[#F59E0B] border-2 border-[#F59E0B] hover:!bg-[#FFFBEB]">Call Now</Button>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-soft h-[400px] lg:h-[500px]">
          <Image
            src="/images/heroSection.jpg"
            alt="Traditional Puja Ceremony at Trimbakeshwar - Pandit Ravi Guruji"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
