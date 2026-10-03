'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'
import { Phone, Mail, Globe, MessageCircle, Heart, ArrowUp, X } from 'lucide-react'

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-forest-950 text-cream relative pt-20 pb-12 border-t border-forest-800 overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-forest-800/80">
          {/* Col 1: Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" size="lg" />

            <p className="text-sm text-cream-200/80 leading-relaxed font-sans max-w-sm">
              A nature-based learning space where children, young people and adults come together to explore the many dimensions of life and living through experiences, observation, dialogue and shared discovery.
            </p>
            <div className="text-xs uppercase tracking-widest text-terracotta-200 font-semibold font-sans">
              Explore · Experience · Evolve
            </div>

            {/* Authentic Malayalam tribute */}
            <div className="flex items-center gap-3 pt-2">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-forest-700">
                <Image
                  src="/images/brand/folk-art-music.jpeg"
                  alt="Authentic Warli Folk Art"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs text-cream-300 font-sans">
                Rooted in Kerala&apos;s natural heritage & living wisdom.
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-terracotta-200 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-200 font-sans">
              <li>
                <Link href="#hero" className="hover:text-cream transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cream transition-colors">
                  About Manram
                </Link>
              </li>
              <li>
                <Link href="#inspiration" className="hover:text-cream transition-colors">
                  Our Inspiration
                </Link>
              </li>
              <li>
                <Link href="#activities" className="hover:text-cream transition-colors">
                  Activities & Formats
                </Link>
              </li>
              <li>
                <Link href="#participants" className="hover:text-cream transition-colors">
                  Who Can Participate
                </Link>
              </li>
              <li>
                <Link href="#space" className="hover:text-cream transition-colors">
                  Learning Environments
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-cream transition-colors">
                  The Manram Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cream transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-terracotta-200 font-sans">
              Contact & Connect
            </h4>
            <div className="space-y-3 text-sm text-cream-200 font-sans">
              <a
                href="https://wa.me/919895992832"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-forest-900/80 hover:bg-forest-800 transition-colors border border-forest-800 text-cream"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>+91 9895992832 (WhatsApp)</span>
              </a>

              <a
                href="mailto:namaste@manram.life"
                className="flex items-center gap-3 p-3 rounded-xl bg-forest-900/80 hover:bg-forest-800 transition-colors border border-forest-800 text-cream"
              >
                <Mail className="w-4 h-4 text-terracotta-200" />
                <span>namaste@manram.life</span>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-forest-900/40 border border-forest-800/60 text-cream-300">
                <Globe className="w-4 h-4" />
                <span>https://manram.life</span>
              </div>
            </div>

            <p className="text-xs text-cream-300/70 pt-2 font-sans italic">
              Visits and participation are organized in harmony with nature and community readiness.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/80 font-sans">
          <div>
            &copy; {new Date().getFullYear()} Manram (manram.life). All rights reserved. A Collective Wisdom.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-cream underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-cream transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className="relative max-w-xl w-full bg-[#FAF8F2] text-charcoal rounded-3xl p-8 shadow-2xl border border-cream-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-cream-300">
              <h3 className="font-serif text-2xl font-bold text-forest">Privacy Policy</h3>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="p-1 rounded-full text-charcoal hover:bg-cream-300"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4 text-xs sm:text-sm text-charcoal/80 font-sans max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>Last Updated:</strong> October 2026
              </p>
              <p>
                Manram (manram.life) is dedicated to respecting and safeguarding your privacy.
                We only collect information voluntarily submitted by you via direct communication channels
                (WhatsApp, Email, or website inquiries).
              </p>
              <p>
                <strong>Information Use:</strong> Information provided is used solely to respond to your inquiries,
                provide details about upcoming retreats and learning opportunities, and coordinate participation.
              </p>
              <p>
                <strong>No Third-Party Sharing:</strong> We do not sell, rent, or trade your contact information
                with any commercial advertisers or third-party marketing services.
              </p>
              <p>
                For any questions regarding our privacy practices, please contact us at{' '}
                <a href="mailto:namaste@manram.life" className="text-forest underline">
                  namaste@manram.life
                </a>.
              </p>
            </div>

            <div className="pt-4 border-t border-cream-300 text-right">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2.5 rounded-full bg-forest text-cream text-xs font-medium hover:bg-forest-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
