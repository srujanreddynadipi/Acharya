import Link from 'next/link'
import Image from 'next/image'
import { Youtube, Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Logo & Address */}
          <div>
            <Link href="#" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 p-2 shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Diya Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl text-white">
                  Acharya Durgesh
                </span>
                <span className="text-xs text-orange-400 font-medium">Vedic Scholar</span>
              </div>
            </Link>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">
                  Nizamabad, Telangana<br />
                  Vedic Astrologer & Spiritual Consultant<br />
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-xl text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Vedic Jyotish
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Hast Rekha (Palmistry)
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Vastu Shanti
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Yagnas & Homas
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Vivaha Yog (Marriage)
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Now */}
          <div>
            <h3 className="font-poppins font-bold text-xl text-white mb-6">Contact Now</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Call:</p>
                <a 
                  href="tel:+917013272777" 
                  className="flex items-center gap-3 text-white hover:text-orange-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="font-semibold">+91 7013272777</span>
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Email:</p>
                <a 
                  href="mailto:dptiearis46@gmail.com" 
                  className="flex items-center gap-3 text-white hover:text-orange-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="text-sm break-all">dptiearis46@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              Copyright © {currentYear} Acharya Durgesh Tiwari, Nizamabad. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
