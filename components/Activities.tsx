'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Compass,
  TreePine,
  Sparkles,
  Palette,
  Eye,
  Users2,
  MessageSquare,
  Globe2,
  Library,
  SunMedium,
  HeartHandshake,
  Tent,
  Layers,
  ChevronRight,
  CalendarDays,
  Info,
} from 'lucide-react'

const programmeFormats = [
  {
    title: 'Occasional Workshops',
    description: 'Immersive sessions focused on natural arts, crafts, environmental observation and creative making.',
    icon: Palette,
  },
  {
    title: 'Nature Camps',
    description: 'Unhurried outdoor camps immersed in greenery, exploring ecosystems, flora and wildlife rhythms.',
    icon: Tent,
  },
  {
    title: 'Experiential Activities',
    description: 'Direct hands-on exploration that brings science, ecology, and daily life into direct touch.',
    icon: Eye,
  },
  {
    title: 'Dialogue Sessions',
    description: 'Open circle conversations encouraging listening, deep questioning and respectful sharing.',
    icon: MessageSquare,
  },
  {
    title: 'Cultural Retreats',
    description: 'Time away from digital noise to engage with local arts, oral traditions and living heritage.',
    icon: Globe2,
  },
  {
    title: 'Shared Learning',
    description: 'Intergenerational experiences where children, youth, parents and elders learn collectively.',
    icon: HeartHandshake,
  },
]

const multifacetedThemes = [
  {
    title: 'Nature-Based Learning',
    description:
      'Discovering ecosystems, plants, animals, the environment and our relationship with nature through direct living immersion.',
    icon: TreePine,
    image: '/images/activities/nature-based.jpeg',
    tag: 'Ecosystems & Flora',
  },
  {
    title: 'Experiential Learning',
    description:
      'Understanding ideas through observation, exploration, participation and hands-on experiences rather than rote memorisation.',
    icon: Eye,
    image: '/images/activities/experiential.jpeg',
    tag: 'Hands-on Inquiry',
  },
  {
    title: 'Creative Expression',
    description:
      'Exploring art, storytelling, making, imagination and different forms of organic expression with natural materials.',
    icon: Palette,
    image: '/images/activities/creative-expression.jpeg',
    tag: 'Art & Craft',
  },
  {
    title: 'Observation & Self-Discovery',
    description:
      'Developing curiosity, self-awareness, confidence, emotional grounding and the ability to observe without judgment.',
    icon: Sparkles,
    image: '/images/activities/self-discovery.jpeg',
    tag: 'Observation & Inquiry',
  },
  {
    title: 'Collaborative Learning',
    description:
      'Sharing knowledge, solving real challenges together, and learning constructively from different perspectives.',
    icon: Users2,
    image: '/images/activities/collaborative-learning.jpeg',
    tag: 'Shared Discovery',
  },
]

const retreatThemes = [
  {
    title: 'Meaningful Dialogue',
    description:
      'Open conversations in circles that encourage unhurried listening, deep reflection and respectful exchange of perspectives.',
    icon: MessageSquare,
    image: '/images/activities/dialogue-meaningful.jpeg',
    tag: 'Circle Conversations',
  },
  {
    title: 'Cultural Exchange',
    description:
      'Experiencing traditions, regional knowledge, indigenous arts, oral stories and diverse cultural perspectives.',
    icon: Globe2,
    image: '/images/activities/cultural-exchange.jpeg',
    tag: 'Living Heritage',
  },
  {
    title: 'Collective Wisdom',
    description:
      'Learning from the lived experiences, seasoned insights, and practical knowledge of diverse individuals and communities.',
    icon: Library,
    image: '/images/activities/collective-wisdom.jpeg',
    tag: 'Shared Understanding',
  },
  {
    title: 'Nature-Based Retreats',
    description:
      'Taking time away from everyday routines and digital noise to reconnect with oneself, reflect, share and explore.',
    icon: SunMedium,
    image: '/images/activities/nature-retreats.jpeg',
    tag: 'Slow Immersion',
  },
  {
    title: 'Intergenerational Learning',
    description:
      'Creating inclusive opportunities for children, young people, parents and elders to learn with and from one another.',
    icon: HeartHandshake,
    image: '/images/activities/intergenerational.jpeg',
    tag: 'All Generations',
  },
]

export default function Activities() {
  const [activeTab, setActiveTab] = useState<'multifaceted' | 'retreats'>('multifaceted')

  return (
    <section id="activities" className="py-24 sm:py-32 bg-[#FAF8F2] text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-terracotta" />
            <span>Activities & Programmes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest leading-tight mb-6">
            Two Pathways. One Shared Purpose.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            Manram’s learning activities are broadly organised into two interconnected areas.
            As an evolving learning programme, these represent our areas of intended exploration.
          </p>
        </div>

        {/* Programme Format Highlights */}
        <div className="mb-16 rounded-3xl bg-cream border border-cream-300 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-forest" />
            <h3 className="font-serif text-xl font-bold text-forest">
              Programme Structure Being Developed
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programmeFormats.map((format) => {
              const Icon = format.icon
              return (
                <div
                  key={format.title}
                  className="p-4 rounded-2xl bg-white border border-cream-300 flex items-start gap-3 shadow-soft"
                >
                  <div className="w-9 h-9 rounded-xl bg-forest/10 flex items-center justify-center text-forest flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-forest" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-forest">{format.title}</h4>
                    <p className="text-xs text-charcoal/75 mt-0.5 leading-normal">{format.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-cream-300 flex items-center gap-2 text-xs text-charcoal/70 italic">
            <Info className="w-4 h-4 text-terracotta flex-shrink-0" />
            <span>
              Specific dates, fees and registration details will be announced as each individual workshop and camp is finalized.
            </span>
          </div>
        </div>

        {/* Pathway Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-cream-300/80 border border-cream-400 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('multifaceted')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === 'multifaceted'
                  ? 'bg-forest text-cream shadow-md font-semibold'
                  : 'text-charcoal/80 hover:text-forest'
              }`}
            >
              <TreePine className="w-4 h-4" />
              <span>A. Multifaceted Learning</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('retreats')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === 'retreats'
                  ? 'bg-forest text-cream shadow-md font-semibold'
                  : 'text-charcoal/80 hover:text-forest'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>B. Dialogue & Cultural Retreats</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Multifaceted Learning */}
        <div
          id="multifaceted"
          className={`${activeTab === 'multifaceted' ? 'block' : 'hidden'} space-y-12 animate-fade-in`}
        >
          {/* Pathway Feature Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-elevated border border-cream-300 grid grid-cols-1 lg:grid-cols-12">
            <div className="relative h-72 lg:h-auto lg:col-span-6 overflow-hidden">
              <Image
                src="/images/activities/nature-based.jpeg"
                alt="Children exploring native flora along the Kerala rainforest trail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white max-w-sm">
                <span className="text-xs uppercase tracking-widest text-cream-200 font-sans">
                  Pathway A
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-cream">
                  Multifaceted Learning
                </h3>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="inline-block text-terracotta text-xs font-semibold tracking-wider uppercase">
                Exploring Life & Living
              </div>
              <p className="text-lg sm:text-xl text-forest font-serif italic leading-relaxed">
                &ldquo;Learning through multiple dimensions of experience, connecting the inner world of an individual with the world outside.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
                Includes nature-based learning, experiential exploration, creative expression,
                observation, self-discovery, collaboration and exploration of the many dimensions
                of life and living without standard rigid academic barriers.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Direct Experience', 'Ecosystems & Nature', 'Observation', 'Creative Making'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-cream-200 text-charcoal text-xs font-medium border border-cream-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* 5 Themes Grid */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-serif text-2xl font-bold text-forest">
                Five Intended Learning Themes
              </h4>
              <span className="text-xs text-charcoal/60 font-sans">
                Areas of Intended Exploration
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {multifacetedThemes.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl overflow-hidden shadow-soft border border-cream-300 hover:shadow-elevated hover:border-forest/30 transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-forest/80 backdrop-blur-sm text-[11px] text-cream font-medium">
                        {item.tag}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-forest/10 flex items-center justify-center text-forest mb-3">
                          <Icon className="w-5 h-5 text-forest" />
                        </div>
                        <h5 className="font-serif text-lg font-bold text-forest mb-2">
                          {item.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-cream-200 flex items-center text-xs font-semibold text-terracotta">
                        <span>Thematic Area</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tab 2: Dialogue & Cultural Retreats */}
        <div
          id="retreats"
          className={`${activeTab === 'retreats' ? 'block' : 'hidden'} space-y-12 animate-fade-in`}
        >
          {/* Pathway Feature Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-elevated border border-cream-300 grid grid-cols-1 lg:grid-cols-12">
            <div className="relative h-72 lg:h-auto lg:col-span-6 overflow-hidden">
              <Image
                src="/images/activities/cultural-exchange.jpeg"
                alt="Community gathering circle with music, singing bowl, and flowers on grass"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white max-w-sm">
                <span className="text-xs uppercase tracking-widest text-cream-200 font-sans">
                  Pathway B
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-cream">
                  Dialogue & Cultural Retreats
                </h3>
              </div>
            </div>

            <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="inline-block text-terracotta text-xs font-semibold tracking-wider uppercase">
                Communion & Reflection
              </div>
              <p className="text-lg sm:text-xl text-forest font-serif italic leading-relaxed">
                &ldquo;A space for people to come together, exchange ideas, share experiences and explore diverse ways of understanding life and society.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
                Includes meaningful dialogue, cultural exchange, shared experiences, collective knowledge,
                nature-based retreats and intergenerational learning in an open, reflective setting.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Circle Conversations', 'Living Traditions', 'Unhurried Immersion', 'Intergenerational'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-cream-200 text-charcoal text-xs font-medium border border-cream-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* 5 Themes Grid */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-serif text-2xl font-bold text-forest">
                Five Intended Retreat Themes
              </h4>
              <span className="text-xs text-charcoal/60 font-sans">
                Areas of Intended Exploration
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retreatThemes.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl overflow-hidden shadow-soft border border-cream-300 hover:shadow-elevated hover:border-forest/30 transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-olive-700/90 backdrop-blur-sm text-[11px] text-cream font-medium">
                        {item.tag}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-olive/10 flex items-center justify-center text-olive mb-3">
                          <Icon className="w-5 h-5 text-olive-700" />
                        </div>
                        <h5 className="font-serif text-lg font-bold text-forest mb-2">
                          {item.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-cream-200 flex items-center text-xs font-semibold text-terracotta">
                        <span>Thematic Area</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Clear Disclaimer as requested */}
        <div className="mt-12 text-center text-xs text-charcoal/65 font-sans italic max-w-2xl mx-auto">
          These are the broad areas of intended activity currently being developed. They represent themes of exploration rather than a claim that every listed activity is currently operational or available for fixed registration.
        </div>
      </div>
    </section>
  )
}
