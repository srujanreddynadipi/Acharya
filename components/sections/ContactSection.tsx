"use client"

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import type { Lang } from '@/lib/constants'
import { t } from '@/lib/translations'
import { Phone, MessageCircle, Mail, Send, User, MessageSquare, Loader } from 'lucide-react'

const PHONE = '+917013272777'
const WHATSAPP = '917013272777'
const EMAIL = 'dptiearis46@gmail.com'

export default function ContactSection({ lang }: { lang: Lang }) {
  const phoneHref = PHONE ? `tel:${PHONE}` : undefined
  const whatsappHref = WHATSAPP ? `https://wa.me/${WHATSAPP}` : undefined

  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', phone: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-container py-20 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent">
      <SectionHeading 
        title={t(lang, 'contact.title')} 
        subtitle={"For booking and queries, use phone or WhatsApp."} 
        center 
      />
      
      {/* Contact Cards */}
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Phone Card */}
        <div className="group relative bg-gradient-to-br from-white to-orange-50/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-200/50 hover:border-orange-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-4 font-poppins font-bold text-xl text-gray-800">Phone</h3>
            <p className="mt-2 text-gray-600">Call us directly for booking and inquiries.</p>
            <div className="mt-4 flex items-center gap-2 text-orange-600 font-semibold text-lg">
              <Phone className="w-5 h-5" />
              <span>+91 7013272777</span>
            </div>
            <a
              href={phoneHref}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-orange-300 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="group relative bg-gradient-to-br from-white to-green-50/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-200/50 hover:border-green-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-transparent rounded-bl-full" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-4 font-poppins font-bold text-xl text-gray-800">WhatsApp</h3>
            <p className="mt-2 text-gray-600">Quick booking via WhatsApp chat.</p>
            <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold text-lg">
              <MessageCircle className="w-5 h-5" />
              <span>+91 7013272777</span>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-green-300 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="relative bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-8 md:p-10 shadow-2xl border border-orange-200/50">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-400/5 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-amber-400/5 to-transparent rounded-tl-full" />
          
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl text-gray-800">Send us a Message</h3>
              <p className="mt-2 text-gray-600">Fill out the form below and we'll get back to you soon</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
              {submitted && (
                <div className="p-4 bg-green-50 border-2 border-green-300 rounded-xl text-green-700 text-center font-semibold">
                  ✓ Thank you! Your message has been sent successfully. We'll contact you soon!
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-300 rounded-xl text-red-700 text-center font-semibold">
                  ✗ {error}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    <User className="w-4 h-4 text-orange-500" />
                    Name
                  </label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-orange-200 bg-white/90 px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200" 
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                    <Phone className="w-4 h-4 text-orange-500" />
                    Phone
                  </label>
                  <input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-orange-200 bg-white/90 px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200" 
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  <Mail className="w-4 h-4 text-orange-500" />
                  Email
                </label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-orange-200 bg-white/90 px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200" 
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                  <MessageSquare className="w-4 h-4 text-orange-500" />
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-orange-200 bg-white/90 px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200 resize-none" 
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
