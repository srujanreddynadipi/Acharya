"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { t } from '@/lib/translations'
import type { Lang } from '@/lib/constants'
import { Sparkles, Phone, User, Briefcase, Mail, Menu, X } from 'lucide-react'

type Props = {
  lang: Lang
  onChangeLang: (lang: Lang) => void
}

export default function Navbar({ lang, onChangeLang }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 backdrop-blur-xl shadow-lg border-b border-orange-200/50">
      <nav className="section-container h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="#" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 p-2 shadow-lg group-hover:shadow-orange-300 transition-all duration-300 group-hover:scale-110">
            <Image
              src="/images/logo.png"
              alt="Diya Logo"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Acharya Durgesh
            </span>
            <span className="text-xs text-orange-600/70 font-medium">Vedic Scholar</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Right Section - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher lang={lang} onChange={onChangeLang} />
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-orange-300 hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>{t(lang, 'action.bookNow')}</span>
          </button>
        </div>

        {/* Mobile Right Section - Only Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-orange-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-orange-600" />
            ) : (
              <Menu className="w-6 h-6 text-orange-600" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-orange-200/50 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="section-container py-4 space-y-2">
            <Link 
              href="#about" 
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 font-medium"
            >
              <User className="w-5 h-5" />
              <span>{t(lang, 'nav.about')}</span>
            </Link>
            <Link 
              href="#services" 
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 font-medium"
            >
              <Briefcase className="w-5 h-5" />
              <span>{t(lang, 'nav.services')}</span>
            </Link>
            <Link 
              href="#why" 
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 font-medium"
            >
              <Sparkles className="w-5 h-5" />
              <span>{t(lang, 'nav.why')}</span>
            </Link>
            <Link 
              href="#contact" 
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>{t(lang, 'nav.contact')}</span>
            </Link>
            
            {/* Mobile Book Now Button */}
            <a 
              href="tel:+917013272777"
              onClick={closeMenu}
              className="block w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-center shadow-lg hover:shadow-orange-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{t(lang, 'action.bookNow')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
