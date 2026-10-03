import React from 'react'
import Image from 'next/image'
import { Sparkles, MapPin, Trees, Sun, Compass, Sprout, Tent, Home, ArrowUpRight } from 'lucide-react'

const environments = [
  {
    title: "Manram's Own Learning Space",
    category: 'Primary Gathering Centre',
    description:
      'The central gathering point for regular activities, reflective dialogue, creative workshops and open-air group interactions beneath our thatched bamboo pavilion.',
    image: '/images/brand/pavilion-main.jpeg',
    alt: 'Manram open-air thatched learning pavilion and pebble walkway',
    highlights: ['Thatched bamboo pavilion', 'River pebble pathways', 'Lush courtyard garden'],
    icon: Home,
    tag: 'Primary Centre',
  },
  {
    title: 'Forests & Natural Habitats',
    category: 'Ecosystems & Biodiversity',
    description:
      'Immersive forest exploration, canopy observation, native flora identification and nature-based inquiry held directly under living forest canopies.',
    image: '/images/hero/forest-sunlight.jpeg',
    alt: 'Sunlit rainforest trail in Kerala for forest exploration and biodiversity observation',
    highlights: ['Canopy & trail walks', 'Biodiversity observation', 'Ecological field notes'],
    icon: Trees,
    tag: 'Forest Exploration',
  },
  {
    title: 'Farms & Agricultural Spaces',
    category: 'Food Systems & Soil Living',
    description:
      'Hands-on engagement with cultivation, living soil health, indigenous food systems and understanding the profound, nourishing relationship between people and nature.',
    image: '/images/gallery/gallery-nature-exploration.jpeg',
    alt: 'Agricultural exploration, soil and plant observation in Kerala',
    highlights: ['Soil & seed cycles', 'Sustainable food systems', 'Cultivation & earth touch'],
    icon: Sprout,
    tag: 'Farms & Cultivation',
  },
  {
    title: 'Carefully Selected Locations',
    category: 'Experiential Camps & Retreats',
    description:
      'Selected natural settings, riverside spaces and cultural landscapes tailored specifically to the learning objectives of individual camps and workshops.',
    image: '/images/activities/nature-retreats.jpeg',
    alt: 'Natural sanctuary for experiential workshops, cultural retreats and nature camps',
    highlights: ['Nature camps', 'Cultural immersion', 'Riverside & woodland retreats'],
    icon: Tent,
    tag: 'Experiential Locations',
  },
]

export default function LearningSpace() {
  return (
    <section id="space" className="py-24 sm:py-32 bg-[#FAF8F2] text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-terracotta" />
            <span>Learning Environments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest leading-tight mb-6">
            Learning Beyond the Learning Space
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            The Manram learning space serves as our primary centre and central gathering point.
            Depending on the specific learning objectives of each workshop, nature camp or experiential
            activity, learning extends into relevant external natural environments wherever direct
            experience is most meaningful.
          </p>
        </div>

        {/* 4 Environment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {environments.map((env, idx) => {
            const Icon = env.icon
            return (
              <div
                key={env.title}
                className="bg-white rounded-3xl overflow-hidden shadow-elevated border border-cream-300 hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-cream-200">
                  <Image
                    src={env.image}
                    alt={env.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest/90 backdrop-blur-sm text-xs font-medium text-cream">
                    {env.tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] uppercase tracking-wider text-cream-200 font-sans">
                      {env.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-cream mt-0.5">{env.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                      <Icon className="w-5 h-5 text-forest" />
                    </div>
                    <p className="text-sm text-charcoal/80 leading-relaxed font-sans">
                      {env.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-cream-300">
                    <div className="text-[11px] uppercase tracking-wider text-charcoal/60 mb-2 font-medium">
                      Key Highlights:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {env.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-cream-200 text-forest"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Learning Beyond Boundaries Clarification Box */}
        <div className="rounded-3xl bg-cream border border-cream-300 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 text-terracotta text-xs font-semibold tracking-wider uppercase font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Learning Beyond Boundaries</span>
            </div>
            <h4 className="font-serif text-2xl font-bold text-forest">
              Purpose-Driven Locations
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
              Manram does not operate permanent commercial branch centres across multiple locations.
              Instead, our own learning space acts as our home foundation, while specific natural,
              forest and farm sites are chosen thoughtfully whenever direct, lived immersion deepens the learning journey.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-cream text-xs font-medium tracking-wide hover:bg-forest-800 transition-colors shadow-soft"
          >
            <span>Ask About Upcoming Locations</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
