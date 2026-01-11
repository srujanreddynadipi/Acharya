"use client"

import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import { t } from '@/lib/translations'
import type { Lang } from '@/lib/constants'
import { Sparkles, Phone, User, Briefcase, Mail } from 'lucide-react'

type Props = {
  lang: Lang
  onChangeLang: (lang: Lang) => void
}

export default function Navbar({ lang, onChangeLang }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 backdrop-blur-xl shadow-lg border-b border-orange-200/50">
      <nav className="section-container h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 p-2 shadow-lg group-hover:shadow-orange-300 transition-all duration-300 group-hover:scale-110">
            <Image
              src="/images/logo.png"
              alt="Diya Logo"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Acharya Durgesh
            </span>
            <span className="text-xs text-orange-600/70 font-medium">Vedic Scholar</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link 
            href="#about" 
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium group"
          >
            <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{t(lang, 'nav.about')}</span>
          </Link>
          <Link 
            href="#services" 
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium group"
          >
            <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{t(lang, 'nav.services')}</span>
          </Link>
          <Link 
            href="#why" 
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium group"
          >
            <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{t(lang, 'nav.why')}</span>
          </Link>
          <Link 
            href="#contact" 
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{t(lang, 'nav.contact')}</span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} onChange={onChangeLang} />
          <button
            type="button"
            className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-orange-300 hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>{t(lang, 'action.bookNow')}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
