'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

interface GalleryItem {
  id: string
  title: string
  category: 'pavilion' | 'nature' | 'group' | 'dialogue' | 'creative'
  categoryLabel: string
  image: string
  description: string
  location?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'The Outdoor Learning Pavilion',
    category: 'pavilion',
    categoryLabel: 'Learning Pavilion',
    image: '/images/gallery/gallery-pavilion.jpeg',
    description:
      'Thatched eco-roof, bamboo arches, river pebble walkway, and traditional wall art at Manram.',
    location: 'Manram Grounds',
  },
  {
    id: '2',
    title: 'Kerala Rainforest Exploration',
    category: 'nature',
    categoryLabel: 'Nature Exploration',
    image: '/images/gallery/gallery-nature-exploration.jpeg',
    description:
      'Young learners observing canopy birds, native flora, and taking field notes on the trail.',
    location: 'Forest Trail',
  },
  {
    id: '3',
    title: 'Dialogue Circle in the Meadow',
    category: 'dialogue',
    categoryLabel: 'Dialogue & Retreats',
    image: '/images/gallery/gallery-dialogue-circle.jpeg',
    description:
      'Unhurried conversation circle seated on grass surrounded by pine and evergreen trees.',
    location: 'Nature Meadow',
  },
  {
    id: '4',
    title: 'Nature Craft & Making',
    category: 'creative',
    categoryLabel: 'Creative Activities',
    image: '/images/gallery/gallery-creative-activity.jpeg',
    description:
      'Children collaborating at an outdoor wooden table with palm fronds, twine, and compass exploration.',
    location: 'Open-Air Craft Studio',
  },
  {
    id: '5',
    title: 'Under the Living Banyan',
    category: 'group',
    categoryLabel: 'Group Learning',
    image: '/images/gallery/gallery-banyan-learning.jpeg',
    description:
      'Learning session held in the shade of a sacred Banyan tree on handwoven mats.',
    location: 'Banyan Sanctuary',
  },
  {
    id: '6',
    title: 'Cultural Gathering & Sound Circle',
    category: 'dialogue',
    categoryLabel: 'Dialogue & Retreats',
    image: '/images/gallery/gallery-cultural-gathering.jpeg',
    description:
      'Community gathering with musical instruments, singing bowls, and flower mandalas.',
    location: 'Sacred Garden',
  },
  {
    id: '7',
    title: 'Forest Eco-Architecture Sanctuary',
    category: 'pavilion',
    categoryLabel: 'Learning Pavilion',
    image: '/images/gallery/gallery-forest-pavilion.jpeg',
    description:
      'Bespoke bamboo structure nestled naturally into the forest foliage with gathered learners.',
    location: 'Eco Sanctuary',
  },
  {
    id: '8',
    title: 'Open Bamboo Deck Pavilion',
    category: 'pavilion',
    categoryLabel: 'Learning Pavilion',
    image: '/images/gallery/gallery-bamboo-deck.jpeg',
    description:
      'Expansive bamboo rafters and open wooden deck for communal gatherings and meals.',
    location: 'Communal Deck',
  },
  {
    id: '9',
    title: 'Hands-on Forest Art Workshop',
    category: 'creative',
    categoryLabel: 'Creative Activities',
    image: '/images/gallery/gallery-nature-makers.jpeg',
    description:
      'Multigenerational art session using feathers, twigs, pinecones, and earth colors.',
    location: 'Woodland Studio',
  },
]

export default function ExperienceGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const handleNext = () => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedItem(filteredItems[nextIndex])
  }

  const handlePrev = () => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedItem(filteredItems[prevIndex])
  }

  return (
    <section id="experience" className="py-24 sm:py-32 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-terracotta" />
            <span>The Manram Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest leading-tight mb-6">
            A Place Where Experiences Become Learning
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            At Manram, each experience can be an invitation to explore something new,
            ask questions, share perspectives and develop a deeper connection with
            oneself, others and nature.
          </p>
          <p className="text-xs sm:text-sm text-charcoal/60 mt-3 italic font-serif">
            Activities and learning experiences evolve according to the interests, age groups and readiness of participants.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Experiences' },
            { id: 'pavilion', label: 'Outdoor Pavilion' },
            { id: 'nature', label: 'Nature Exploration' },
            { id: 'group', label: 'Group Learning' },
            { id: 'dialogue', label: 'Dialogue & Retreats' },
            { id: 'creative', label: 'Creative Activities' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-forest text-cream font-semibold shadow-soft'
                  : 'bg-white text-charcoal/70 hover:text-forest hover:bg-cream-200 border border-cream-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated border border-cream-300 cursor-pointer group flex flex-col transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest/85 backdrop-blur-sm text-[11px] font-medium text-cream">
                  {item.categoryLabel}
                </span>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-lg font-bold leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 pt-3 border-t border-cream-200 flex items-center justify-between text-[11px] text-terracotta font-medium">
                  <span>{item.location}</span>
                  <span className="group-hover:underline">View Photo &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain"
                priority
              />

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Details Footer */}
            <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-cream-300">
              <div>
                <span className="text-xs uppercase tracking-wider text-terracotta font-semibold">
                  {selectedItem.categoryLabel}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest mt-0.5">
                  {selectedItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/80 mt-1 max-w-xl font-sans">
                  {selectedItem.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-full bg-cream-200 text-charcoal hover:bg-cream-300 text-xs font-medium self-start sm:self-auto transition-colors"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
