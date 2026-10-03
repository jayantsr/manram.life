import React from 'react'
import Image from 'next/image'
import { Sparkles, Compass, Eye, HeartHandshake, Trees, HelpCircle, ArrowRight } from 'lucide-react'

export default function Inspiration() {
  return (
    <section id="inspiration" className="py-24 sm:py-32 bg-cream text-charcoal relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Our Inspiration */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Reflective Foundation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest leading-tight mb-6">
            Our Inspiration
          </h2>

          {/* Confirmed Inspiration Text */}
          <div className="space-y-4 text-base sm:text-lg text-charcoal/85 leading-relaxed font-sans max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-serif text-forest italic leading-snug">
              &ldquo;Manram draws inspiration from the ideas and educational outlook of Jiddu Krishnamurti, particularly the importance of inquiry, observation and understanding oneself and the world.&rdquo;
            </p>
            <p>
              This inspiration is a starting point for reflection, not a fixed philosophy or prescribed way of learning. Manram is an evolving initiative that remains open to questions, experiences and new perspectives.
            </p>
          </div>
        </div>

        {/* Vision Showcase: EXPLORE. EXPERIENCE. EVOLVE. */}
        <div className="rounded-3xl bg-white border border-cream-300 p-8 sm:p-12 shadow-elevated mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-terracotta font-semibold font-sans">
              Our Vision
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-forest mt-2 mb-4 tracking-tight">
              Explore. Experience. Evolve.
            </h3>
            <p className="text-base sm:text-lg text-charcoal/80 font-sans leading-relaxed">
              To create a space where people of different ages can explore the many dimensions
              of life and living, engage with meaningful experiences and allow their understanding
              and perspectives to evolve.
            </p>
          </div>

          {/* 3 Core Theme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. Explore */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F2] border border-cream-300 hover:border-forest/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center text-forest mb-4 group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6 text-forest" />
                </div>
                <div className="text-xs uppercase font-sans font-semibold tracking-wider text-terracotta mb-1">
                  Pillar 01
                </div>
                <h4 className="font-serif text-2xl font-bold text-forest mb-3">Explore</h4>
                <p className="text-sm text-charcoal/80 leading-relaxed font-sans">
                  Encourage curiosity, inquiry and the discovery of different dimensions of life,
                  nature, relationships, culture, society and the world.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-cream-300 text-xs text-forest font-medium">
                Curiosity · Inquiry · Discovery
              </div>
            </div>

            {/* 2. Experience */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F2] border border-cream-300 hover:border-forest/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center text-terracotta mb-4 group-hover:scale-105 transition-transform">
                  <Eye className="w-6 h-6 text-terracotta" />
                </div>
                <div className="text-xs uppercase font-sans font-semibold tracking-wider text-terracotta mb-1">
                  Pillar 02
                </div>
                <h4 className="font-serif text-2xl font-bold text-forest mb-3">Experience</h4>
                <p className="text-sm text-charcoal/80 leading-relaxed font-sans">
                  Learn through direct participation, nature-based activities, observation,
                  workshops, camps, creative expression and meaningful dialogue.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-cream-300 text-xs text-terracotta font-medium">
                Direct Participation · Workshops · Camps
              </div>
            </div>

            {/* 3. Evolve */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F2] border border-cream-300 hover:border-forest/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center text-olive mb-4 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-6 h-6 text-olive-700" />
                </div>
                <div className="text-xs uppercase font-sans font-semibold tracking-wider text-terracotta mb-1">
                  Pillar 03
                </div>
                <h4 className="font-serif text-2xl font-bold text-forest mb-3">Evolve</h4>
                <p className="text-sm text-charcoal/80 leading-relaxed font-sans">
                  Allow understanding, perspectives, awareness and personal growth to develop
                  organically through experience, reflection and human interaction.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-cream-300 text-xs text-olive-800 font-medium">
                Awareness · Reflection · Understanding
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Reflective Banner */}
        <div className="rounded-2xl bg-[#FAF8F2] border border-cream-300 p-6 flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm text-charcoal/80">
          <div className="w-10 h-10 rounded-full bg-forest/10 flex-shrink-0 flex items-center justify-center text-forest">
            <Trees className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-forest text-base mb-0.5">
              An Open and Evolving Learning Initiative
            </h4>
            <p className="text-charcoal/70">
              Manram does not prescribe fixed dogma, rigid syllabi or competitive grading.
              It is a quiet space for genuine inquiry into oneself, community and the living world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
