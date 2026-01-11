import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import type { Lang } from '@/lib/constants'
import { t } from '@/lib/translations'
import { services } from '@/lib/services'
import Image from 'next/image'

type Props = { lang: Lang }

export default function ServicesSection({ lang }: Props) {
  return (
    <section id="services" className="section-container py-16">
      <SectionHeading title={t(lang, 'services.title')} subtitle={"Comprehensive Vedic services for astrology, rituals, life events, and spiritual growth."} center />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ id, title, description, icon: Icon, image }) => (
          <Card key={id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-[#F59E0B]" aria-hidden="true" />
                <h3 className="font-poppins font-semibold text-[#1F2937]">{title}</h3>
              </div>
              <p className="text-sm text-[#1F2937]/80 leading-relaxed">{description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
