'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, MessageSquare, Compass, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-forest-950 text-white"
    >
      {/* Background Photography with Depth - Authentic Manram Pavilion */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-pavilion.jpeg"
          alt="Manram open-air thatched learning pavilion and natural surroundings"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Curated Multi-layer Gradient Overlay for readability & atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/65 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-transparent to-forest-950/70" />
      </div>

      {/* Warm Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-terracotta/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
        {/* Tagline & Identity Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/15 backdrop-blur-md border border-cream/25 text-cream text-xs sm:text-sm font-sans tracking-widest uppercase mb-5 animate-fade-in shadow-soft">
          <Sparkles className="w-3.5 h-3.5 text-terracotta-200" />
          <span>A Collective Wisdom · മൺറം</span>
        </div>

        {/* Core Vision Theme: EXPLORE. EXPERIENCE. EVOLVE. */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-semibold text-terracotta-200">
            Explore
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-olive-300" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-semibold text-cream">
            Experience
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-olive-300" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-semibold text-terracotta-200">
            Evolve
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream leading-[1.1] mb-6 drop-shadow-sm">
          Learning Beyond <br />
          <span className="italic font-normal text-terracotta-200 font-serif">
            Boundaries
          </span>
        </h1>

        {/* Confirmed Positioning Statement */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-cream-100/90 font-light leading-relaxed mb-6 font-sans">
          A nature-based learning space where children, young people and adults
          come together to explore the many dimensions of life and living through
          experiences, observation, dialogue and shared discovery.
        </p>

        {/* Evolving Learning Initiative Context */}
        <div className="max-w-2xl mx-auto mb-10">
          <blockquote className="border-l-2 sm:border-l-0 sm:border-y border-olive-400/40 py-3 sm:py-3.5 px-4 text-xs sm:text-sm text-cream-200 font-serif italic tracking-wide">
            &ldquo;An open and evolving learning initiative exploring life through direct experiences, nature, interaction, questioning, creativity and reflection.&rdquo;
          </blockquote>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-cream text-forest font-medium text-sm tracking-wide shadow-elevated hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            <Compass className="w-4 h-4 text-forest transition-transform group-hover:rotate-45" />
            <span>Discover Manram</span>
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-forest-800/80 backdrop-blur-md border border-cream/30 text-cream font-medium text-sm tracking-wide hover:bg-forest hover:border-cream/60 transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            <MessageSquare className="w-4 h-4 text-terracotta-200" />
            <span>Begin a Conversation</span>
          </Link>
        </div>

        {/* Highlights Bar: Direct Experiences, Nature, Dialogue, Observation */}
        <div className="mt-14 pt-8 border-t border-cream/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-2">
            <div className="text-cream font-serif text-lg sm:text-xl font-medium">Direct Experience</div>
            <div className="text-xs text-cream-300 font-sans mt-0.5">Living Participation</div>
          </div>
          <div className="p-2">
            <div className="text-cream font-serif text-lg sm:text-xl font-medium">Observation</div>
            <div className="text-xs text-cream-300 font-sans mt-0.5">Inquiry & Curiosity</div>
          </div>
          <div className="p-2">
            <div className="text-cream font-serif text-lg sm:text-xl font-medium">Dialogue</div>
            <div className="text-xs text-cream-300 font-sans mt-0.5">Listening & Reflection</div>
          </div>
          <div className="p-2">
            <div className="text-cream font-serif text-lg sm:text-xl font-medium">Shared Discovery</div>
            <div className="text-xs text-cream-300 font-sans mt-0.5">Collective Wisdom</div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <Link
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-cream-300/70 hover:text-cream text-[11px] font-sans tracking-widest uppercase transition-colors"
        aria-label="Scroll down to About section"
      >
        <span>Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </Link>
    </section>
  )
}
