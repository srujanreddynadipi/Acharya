import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import type { Lang } from '@/lib/constants'
import { t } from '@/lib/translations'
import { Sparkles, ShieldCheck, BookOpen } from 'lucide-react'
import Image from 'next/image'

type Props = { lang: Lang }

export default function AboutSection({ lang }: Props) {
  return (
    <section id="about" className="section-container py-16">
      <SectionHeading title={t(lang, 'about.title')} subtitle={"Vedic Astrologer | Priest | Spiritual Consultant. Trained at Kashi Vishwavidyalaya, Varanasi. Expert in Jyotish Shastra, Vaidik-Tantrik Pujas, Vastu Shanti, and life event ceremonies. Available for online consultations and in-person rituals across India and abroad."} center />
      
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        <div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden shadow-soft">
          <Image
            src="/images/acharya-profile.png"
            alt="Acharya Durgesh Tiwari - Vedic Scholar"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </div>
        <div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden shadow-soft">
          <Image
            src="/images/acharya-profile2.png"
            alt="Acharya Durgesh Tiwari - Ceremonial Attire"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </div>
      </div>
      
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-[#F59E0B]" aria-hidden="true" />
            <div>
              <h3 className="font-poppins font-medium text-[#1F2937]">Education</h3>
              <p className="mt-1 text-[#1F2937]/80">Advanced study in Vedas, Jyotish, Tantra at Kashi Vishwavidyalaya, Varanasi. Certified in Puja Karmas and ritual leadership.</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#F59E0B]" aria-hidden="true" />
            <div>
              <h3 className="font-poppins font-medium text-[#1F2937]">Languages</h3>
              <p className="mt-1 text-[#1F2937]/80">Fluent in Hindi, English, Telugu, and Marathi for consultations, sermons, and rituals.</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-[#F59E0B]" aria-hidden="true" />
            <div>
              <h3 className="font-poppins font-medium text-[#1F2937]">Availability</h3>
              <p className="mt-1 text-[#1F2937]/80">Online consultations, in-person rituals across India and abroad, temple ceremonies, and family pujas.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
