import React from 'react'
import Image from 'next/image'
import { Leaf, Users, Lightbulb, Compass, HeartHandshake, Eye, Sparkles, Tent, MessageSquare, Palette } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF8F2] text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-terracotta text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-terracotta inline-block" />
            <span>About Manram</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest leading-tight">
            A Space to Explore, Experience and Evolve
          </h2>
        </div>

        {/* Editorial Layout: Text & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Confirmed Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-charcoal/85 leading-relaxed font-sans">
            <p className="text-xl sm:text-2xl text-forest font-serif italic leading-snug">
              &ldquo;Manram is a learning space that brings people together to explore, experience and evolve.&rdquo;
            </p>

            <p>
              We believe that the world around us offers countless opportunities for discovery. Nature, relationships, creativity, culture and everyday experiences can all open up new ways of understanding life.
            </p>

            <p>
              Through occasional workshops, nature camps, dialogue and shared experiences, Manram provides opportunities for children, young people and adults to explore a wide range of subjects and perspectives.
            </p>

            <p>
              Rather than prescribing what one should learn or think, Manram seeks to create an environment where curiosity, observation, questioning and discovery can unfold naturally.
            </p>

            {/* Formats & Program Structure */}
            <div className="pt-6 border-t border-cream-300 space-y-4">
              <div className="text-xs uppercase font-semibold text-terracotta tracking-wider">
                Our Evolving Programme Formats:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-2xl bg-cream/70 border border-cream-300 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-forest/10 flex items-center justify-center text-forest flex-shrink-0 mt-0.5">
                    <Tent className="w-4 h-4 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-forest text-sm">Nature Camps</h3>
                    <p className="text-charcoal/70 text-xs mt-0.5">Immersive outdoor explorations and eco-observation.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-cream/70 border border-cream-300 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-terracotta/10 flex items-center justify-center text-terracotta flex-shrink-0 mt-0.5">
                    <Palette className="w-4 h-4 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-forest text-sm">Occasional Workshops</h3>
                    <p className="text-charcoal/70 text-xs mt-0.5">Hands-on creative expression and craft inquiry.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-cream/70 border border-cream-300 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-olive/10 flex items-center justify-center text-olive flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-olive-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-forest text-sm">Dialogue Sessions</h3>
                    <p className="text-charcoal/70 text-xs mt-0.5">Unhurried open inquiry into life and living.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-cream/70 border border-cream-300 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-forest/10 flex items-center justify-center text-forest flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-forest text-sm">Shared Experiences</h3>
                    <p className="text-charcoal/70 text-xs mt-0.5">Intergenerational learning and cultural exchange retreats.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on identity & ongoing development */}
            <div className="p-4 rounded-2xl bg-cream-200/80 border border-cream-400 text-xs text-charcoal/75 italic">
              <strong>Please note:</strong> Manram is a learning programme that is currently being developed. It is not yet a fully established school, formal educational institution or a conventional training centre.
            </div>
          </div>

          {/* Right Column: Authentic Visual Identity of Manram (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-cream-200 aspect-[4/3] group">
              <Image
                src="/images/brand/pavilion-main.jpeg"
                alt="Manram open-air thatched learning pavilion with river pebble walkway"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-1 rounded-full bg-forest/80 backdrop-blur-sm text-[11px] font-sans tracking-wider uppercase mb-1">
                  The Learning Space
                </span>
                <p className="text-xs sm:text-sm text-cream-100 font-serif italic">
                  Thatched open-air pavilion, natural greenery and river stone pathways.
                </p>
              </div>
            </div>

            {/* Authentic Wall Signage and Emblem */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border-2 border-white aspect-[4/3] group">
                <Image
                  src="/images/brand/manram-wall-sign.jpeg"
                  alt="Manram The Learning Space painted wall sign"
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] text-cream font-medium px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs">
                  The Learning Space
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-soft border-2 border-white aspect-[4/3] group">
                <Image
                  src="/images/brand/manram-wall-malayalam.jpeg"
                  alt="Manram Malayalam script painted wall with path emblem"
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] text-cream font-medium px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs">
                  മൺറം · Heritage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
