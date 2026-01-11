import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import type { Lang } from '@/lib/constants'
import { t } from '@/lib/translations'
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

type Props = { lang: Lang }

const items = [
  { Icon: ShieldCheck, title: 'Vedic Scholar', desc: 'Trained at Kashi Vishwavidyalaya in Vedas, Jyotish Shastra, and Tantric practices.' },
  { Icon: Clock, title: 'Multilingual', desc: 'Expert consultations in Hindi, English, Telugu, and Marathi.' },
  { Icon: CheckCircle2, title: 'Holistic Services', desc: 'Astrology, rituals, Vastu, marriage compatibility, and life event ceremonies.' },
]

export default function WhyChooseUs({ lang }: Props) {
  return (
    <section id="why" className="section-container py-16">
      <SectionHeading title={t(lang, 'why.title')} center />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ Icon, title, desc }, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start gap-4">
              <Icon className="w-6 h-6 text-[#F59E0B]" aria-hidden="true" />
              <div>
                <h3 className="font-poppins font-medium text-[#1F2937]">{title}</h3>
                <p className="mt-1 text-[#1F2937]/80">{desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
    </section>
  )
}
