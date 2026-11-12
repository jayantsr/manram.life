'use client'

import React from 'react'

const WHATSAPP_URL =
  'https://wa.me/919497212832?text=' +
  encodeURIComponent('Namaskaram Manram Team, I would like to know more about Manram.')

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Manram on WhatsApp (+91 9497212832)"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 group flex items-center gap-2.5 focus:outline-none"
    >
      {/* Hover label on desktop */}
      <span className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-full bg-forest-950/90 text-cream text-xs font-medium tracking-wide shadow-elevated border border-forest-800 backdrop-blur-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>

      {/* Floating circular button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] ring-2 ring-white/80 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#20BD5A] group-hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] group-focus-visible:ring-4 group-focus-visible:ring-forest">
        {/* Subtle ambient pulse */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-25 pointer-events-none" />

        {/* Official WhatsApp glyph */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="relative w-7 h-7"
          aria-hidden="true"
        >
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.592 4.46 1.716 6.404L3.12 28.8l6.548-1.716A12.74 12.74 0 0 0 16.004 28.8c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.36a10.52 10.52 0 0 1-5.368-1.468l-.384-.228-3.884 1.02 1.036-3.788-.252-.396a10.52 10.52 0 0 1-1.616-5.6c0-5.82 4.736-10.556 10.556-10.556 5.82 0 10.556 4.736 10.556 10.556 0 5.82-4.736 10.56-10.644 10.56zm5.792-7.908c-.316-.16-1.876-.924-2.168-1.032-.292-.108-.504-.16-.716.16-.212.316-.82 1.032-1.004 1.244-.184.212-.368.24-.684.08-.316-.16-1.336-.492-2.544-1.572-.94-.84-1.576-1.876-1.76-2.192-.184-.316-.02-.488.14-.644.144-.144.316-.368.476-.552.16-.184.212-.316.316-.528.108-.212.052-.4-.028-.556-.08-.16-.716-1.724-.98-2.36-.256-.62-.52-.536-.716-.544l-.612-.012c-.212 0-.556.08-.848.4-.292.316-1.112 1.088-1.112 2.652 0 1.564 1.14 3.076 1.296 3.288.16.212 2.244 3.428 5.436 4.804.76.328 1.352.524 1.812.672.76.24 1.452.208 2 .124.612-.092 1.876-.768 2.14-1.508.264-.74.264-1.376.184-1.508-.08-.132-.292-.212-.608-.372z" />
        </svg>
      </span>
    </a>
  )
}

