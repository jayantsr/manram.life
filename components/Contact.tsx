'use client'

import React, { useState } from 'react'
import {
  MessageCircle,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Send,
  CheckCircle,
  HelpCircle,
  Clock,
  MapPin,
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Children under 12',
    message: '',
  })
  const [submittedVia, setSubmittedVia] = useState<string | null>(null)

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Namaste Manram Team,\n\nI would like to inquire about: ${formData.interest}\n\n*Name:* ${formData.name || 'Not provided'}\n*Email:* ${formData.email || 'Not provided'}\n*Phone:* ${formData.phone || 'Not provided'}\n\n*Message:* ${formData.message || 'I would like to know more about Manram programs and retreats.'}`
    const url = `https://wa.me/919497212832?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setSubmittedVia('whatsapp')
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Enquiry from ${formData.name || 'Website Visitor'}: ${formData.interest}`
    const body = `Namaskaram Manram Team,\n\nI am reaching out regarding ${formData.interest}.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    const mailtoUrl = `mailto:namaskaram@manram.life?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
    setSubmittedVia('email')
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F2] text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Explore · Experience · Evolve</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest leading-tight mb-4">
            Come, Explore and Learn Together
          </h2>
          <p className="text-xs uppercase tracking-widest font-semibold text-terracotta mb-4 font-sans">
            A Collective Wisdom
          </p>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            Every journey of learning begins with curiosity. If you are a parent,
            a young learner, an educator or someone interested in meaningful
            dialogue and cultural exchange, we would love to hear from you.
          </p>
        </div>

        {/* Content Grid: Contact Details & Interactive Enquiry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-forest rounded-3xl p-8 sm:p-10 text-cream shadow-elevated relative overflow-hidden">
              {/* Warm decorative background blur */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-terracotta/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-serif text-2xl font-bold mb-4 text-cream">
                Direct Conversations
              </h3>
              <p className="text-sm text-cream-100/85 leading-relaxed font-sans mb-8">
                We believe in genuine, human-to-human communication. Reach out to us directly through WhatsApp or email to begin a conversation.
              </p>

              {/* Contact list */}
              <div className="space-y-5">
                <a
                  href="https://wa.me/919497212832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-forest-800/80 hover:bg-forest-700/80 border border-forest-600 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-600/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream-200">
                      WhatsApp & Mobile
                    </div>
                    <div className="text-base font-semibold text-white tracking-wide">
                      +91 9497212832
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:namaskaram@manram.life"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-forest-800/80 hover:bg-forest-700/80 border border-forest-600 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-terracotta/30 flex items-center justify-center text-terracotta-200 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream-200">
                      Email Address
                    </div>
                    <div className="text-base font-semibold text-white tracking-wide">
                      namaskaram@manram.life
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-forest-800/50 border border-forest-700/60">
                  <div className="w-11 h-11 rounded-xl bg-cream/10 flex items-center justify-center text-cream-200">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream-300">
                      Official Domain
                    </div>
                    <div className="text-base font-medium text-cream-100">
                      manram.life
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="mt-8 pt-8 border-t border-forest-700 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/919497212832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wide transition-all shadow-soft"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>

                <a
                  href="mailto:namaskaram@manram.life"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-cream hover:bg-white text-forest font-medium text-xs tracking-wide transition-all shadow-soft"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>

            {/* Note on Location & Programs */}
            <div className="rounded-3xl bg-cream border border-cream-300 p-6 space-y-2">
              <div className="flex items-center gap-2 text-forest font-serif font-semibold text-sm">
                <Clock className="w-4 h-4 text-terracotta" />
                <span>Program Schedules & Details</span>
              </div>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                Specific dates, schedules, location details and fee arrangements are being finalised thoughtfully. Please contact us to register your interest, ask questions, or arrange a conversation.
              </p>
            </div>
          </div>

          {/* Right Column: Thoughtful Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-elevated border border-cream-300">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-2">
              Share an Enquiry
            </h3>
            <p className="text-sm text-charcoal/75 mb-8 font-sans">
              Fill in your details below. You can send your message directly via WhatsApp or Email.
            </p>

            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jayanthi Nair"
                  className="w-full px-4 py-3.5 rounded-xl border border-cream-400 bg-[#FAF8F2] text-charcoal text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email-address"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email-address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-cream-400 bg-[#FAF8F2] text-charcoal text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-2"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 94972 12832"
                    className="w-full px-4 py-3.5 rounded-xl border border-cream-400 bg-[#FAF8F2] text-charcoal text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Interest Select */}
              <div>
                <label
                  htmlFor="interest-category"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-2"
                >
                  I am interested in
                </label>
                <select
                  id="interest-category"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-cream-400 bg-[#FAF8F2] text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all"
                >
                  <option value="Children under 12">Children under 12 (Curiosity, Nature & Play)</option>
                  <option value="Young People under 18">Young People under 18 (Creative Exploration & Discovery)</option>
                  <option value="Adult Learning & Growth">Adult Learning & Growth (Personal Discovery)</option>
                  <option value="Dialogue & Cultural Retreats">Dialogue & Cultural Retreats (Community & Reflection)</option>
                  <option value="Educator Collaboration">Educator & Alternative Education Collaboration</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-2"
                >
                  Message or Question
                </label>
                <textarea
                  id="enquiry-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a little bit about what brings you to Manram, any questions you have, or how you'd like to participate..."
                  className="w-full px-4 py-3.5 rounded-xl border border-cream-400 bg-[#FAF8F2] text-charcoal text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent transition-all"
                />
              </div>

              {/* Action Buttons: Truly Functional Direct Dispatch */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs tracking-wide shadow-soft transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-forest hover:bg-forest-800 text-cream font-medium text-xs tracking-wide shadow-soft transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
              </div>

              {submittedVia && (
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-2 animate-fade-in">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Your inquiry has been prepared for dispatch via{' '}
                    {submittedVia === 'whatsapp' ? 'WhatsApp' : 'your default email client'}. We look forward to connecting!
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
