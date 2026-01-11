"use client"

import { SUPPORTED_LANGS, type Lang } from '@/lib/constants'

type Props = {
  lang: Lang
  onChange: (lang: Lang) => void
}

export default function LanguageSwitcher({ lang, onChange }: Props) {
  return (
    <div className="flex items-center gap-2" aria-label="Language selector">
      {SUPPORTED_LANGS.map((l) => {
        const active = l === lang
        return (
          <button
            key={l}
            type="button"
            onClick={() => onChange(l)}
            aria-pressed={active}
            aria-label={l}
            className={
              `px-2 py-1 text-sm rounded-md transition-colors ` +
              (active
                ? 'bg-primary text-white'
                : 'bg-white/70 text-text hover:bg-secondary')
            }
          >
            {l.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
