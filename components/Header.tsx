'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { Menu, X, MessageCircle, Phone, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Inspiration', href: '#inspiration' },
  { label: 'Activities', href: '#activities' },
  { label: 'Participants', href: '#participants' },
  { label: 'Learning Spaces', href: '#space' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Active section observer
      const sections = navLinks.map((l) => l.href.substring(1))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F2]/95 backdrop-blur-xl border-b border-cream-300/80 shadow-soft py-2.5 sm:py-3'
            : 'bg-forest-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.35)] py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link
              href="#hero"
              className="group focus:outline-none focus:ring-2 focus:ring-forest rounded-lg flex-shrink-0"
              aria-label="Manram Home"
            >
              <Logo
                variant={isScrolled ? 'dark' : 'light'}
                size="md"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.slice(1, -1).map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 xl:px-3.5 xl:py-2 text-xs xl:text-[13px] font-medium tracking-wide rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      isScrolled
                        ? isActive
                          ? 'bg-forest text-cream font-semibold shadow-sm'
                          : 'text-charcoal/80 hover:text-forest hover:bg-forest/5'
                        : isActive
                        ? 'bg-cream text-forest font-semibold shadow-sm'
                        : 'text-cream-100/85 hover:text-cream hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right Action: WhatsApp & Contact CTA (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <a
                href="https://wa.me/919497212832"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  isScrolled
                    ? 'border border-forest/15 bg-white/90 hover:bg-forest/5 text-forest shadow-sm'
                    : 'border border-white/20 bg-white/10 hover:bg-white/20 text-cream backdrop-blur-sm'
                }`}
                title="Direct WhatsApp: +91 9497212832"
              >
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="hidden xl:inline whitespace-nowrap">+91 9497212832</span>
                <span className="inline xl:hidden whitespace-nowrap">WhatsApp</span>
              </a>

              <Link
                href="#contact"
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 xl:px-4.5 xl:py-2 rounded-full text-xs xl:text-[13px] font-medium tracking-wide shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0 ${
                  isScrolled
                    ? 'bg-forest text-cream hover:bg-forest-800'
                    : 'bg-terracotta text-cream hover:bg-terracotta-600 shadow-warm'
                }`}
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="https://wa.me/919497212832"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border transition-colors ${
                  isScrolled
                    ? 'border-forest/20 text-forest bg-white/80'
                    : 'border-white/25 text-white bg-white/10 backdrop-blur-sm'
                }`}
                aria-label="WhatsApp Manram"
                title="Direct WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>

              <Link
                href="#contact"
                className={`hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-sm transition-all duration-200 ${
                  isScrolled
                    ? 'bg-forest text-cream hover:bg-forest-800'
                    : 'bg-terracotta text-cream hover:bg-terracotta-600'
                }`}
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-forest ${
                  isScrolled
                    ? 'text-charcoal hover:bg-cream-300'
                    : 'text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm border border-white/15'
                }`}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FAF8F2] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out border-l border-cream-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-cream-300">
              <Logo variant="dark" size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal hover:bg-cream-300 rounded-full"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-forest text-cream font-semibold'
                        : 'text-charcoal hover:bg-cream-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-cream-300 space-y-3">
            <div className="text-xs text-charcoal/70 font-sans">
              Get in touch directly:
            </div>
            <a
              href="https://wa.me/919497212832"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-forest text-cream text-xs font-medium hover:bg-forest-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: +91 9497212832</span>
            </a>
            <a
              href="mailto:namaskaram@manram.life"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-cream-200 text-charcoal text-xs font-medium hover:bg-cream-300 transition-colors border border-cream-400"
            >
              <span>Email: namaskaram@manram.life</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
