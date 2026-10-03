import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Inspiration from '../components/Inspiration'
import Activities from '../components/Activities'
import Stages from '../components/Stages'
import LearningSpace from '../components/LearningSpace'
import ExperienceGallery from '../components/ExperienceGallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F2] text-charcoal selection:bg-forest selection:text-cream">
      {/* Sticky Header with Intelligent Navigation */}
      <Header />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: About Manram */}
      <About />

      {/* Section 3: Our Inspiration & Vision (Explore. Experience. Evolve.) */}
      <Inspiration />

      {/* Section 4: Our Activities & Programme Formats (Two Pathways) */}
      <Activities />

      {/* Section 5: Who Can Participate (Children, Youth, Adults) */}
      <Stages />

      {/* Section 6: The Learning Space (Exclusive On-site Nature Setting) */}
      <LearningSpace />

      {/* Section 7: The Manram Experience (Curated Photo Gallery) */}
      <ExperienceGallery />

      {/* Section 8: Contact & Inquiries */}
      <Contact />

      {/* Section 9: Footer */}
      <Footer />
    </main>
  )
}
