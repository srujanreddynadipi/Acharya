import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import type { Lang } from '@/lib/constants'
import { t } from '@/lib/translations'

export default function CTASection({ lang }: { lang: Lang }) {
  return (
    <section className="section-container py-16">
      <div className="rounded-xl p-8 bg-gradient-to-b from-white via-[#FDE68A] to-[#FFFBEB]">
        <SectionHeading title={t(lang, 'cta.title')} center />
        <div className="mt-6 flex justify-center">
          <Button>{t(lang, 'action.bookNow')}</Button>
        </div>
      </div>
    </section>
  )
}
