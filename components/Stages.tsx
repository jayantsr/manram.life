import React from 'react'
import Image from 'next/image'
import { Sparkles, Compass, Users, ShieldCheck, HeartHandshake } from 'lucide-react'

const stages = [
  {
    category: 'Children',
    subTitle: 'Under 12 Years',
    description:
      'Encouraging wonder, play, discovery and a natural sense of curiosity through age-appropriate activities and safe, supervised experiences in the natural world.',
    keywords: ['Wonder', 'Play', 'Observe', 'Discover'],
    image: '/images/stages/children.jpeg',
    alt: 'Children observing nature under caring guidance with magnifying glasses',
    accentColor: 'border-forest/20 text-forest',
    badge: 'Curiosity & Play',
  },
  {
    category: 'Young People',
    subTitle: 'Under 18 Years',
    description:
      'Supporting independent thinking, creativity, collaboration, exploration and a deeper understanding of themselves and the world around them.',
    keywords: ['Question', 'Create', 'Collaborate', 'Reflect'],
    image: '/images/stages/youth.jpeg',
    alt: 'Young people and teenagers seated in a discussion circle beneath a great tree',
    accentColor: 'border-olive-600/30 text-olive-800',
    badge: 'Inquiry & Expression',
  },
  {
    category: 'Adults',
    subTitle: 'Parents, Educators & Seekers',
    description:
      'Opportunities for adults, educators, parents and seekers to engage in meaningful dialogue, cultural exchange, shared learning and reflective experiences.',
    keywords: ['Dialogue', 'Reflect', 'Share', 'Evolve'],
    image: '/images/stages/adults.jpeg',
    alt: 'Diverse adults sitting in a garden circle engaged in open dialogue',
    accentColor: 'border-terracotta/30 text-terracotta',
    badge: 'Dialogue & Growth',
  },
]

export default function Stages() {
  return (
    <section id="participants" className="py-24 sm:py-32 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-terracotta" />
            <span>Inclusive Learning</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest leading-tight mb-6">
            Learning for Different Stages of Life
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            Experiences are thoughtfully adapted to the age, interests, needs and readiness of each participant.
          </p>
        </div>

        {/* 3 Image-Led Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.category}
              className="bg-white rounded-3xl overflow-hidden shadow-elevated border border-cream-300 hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest/85 backdrop-blur-sm text-xs font-medium text-cream">
                  {stage.badge}
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-cream">
                  <div className="text-xs uppercase tracking-wider text-cream-200">
                    {stage.subTitle}
                  </div>
                  <h3 className="font-serif text-2xl font-bold">{stage.category}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
                  {stage.description}
                </p>

                {/* Keywords Bar */}
                <div className="pt-4 border-t border-cream-300">
                  <div className="text-[11px] uppercase tracking-wider text-charcoal/60 mb-2 font-medium">
                    Core Explorations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-cream-200 text-forest"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Intergenerational Learning & Supervised Environment Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FAF8F2] border border-cream-300 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-forest/10 flex-shrink-0 flex items-center justify-center text-forest mt-1">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-forest">
                Intergenerational Shared Learning
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/75 mt-1 font-sans">
                Alongside age-specific groups, Manram actively nurtures opportunities for children, young people, parents and elders to sit together in circles, bridging generations through shared stories and living wisdom.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-terracotta/10 flex-shrink-0 flex items-center justify-center text-terracotta mt-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-forest">
                Safe & Caring Environment
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/75 mt-1 font-sans">
                All activities involving children and young people are conducted in a safe, attentively supervised outdoor learning setting that respects individual readiness and natural emotional pacing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
