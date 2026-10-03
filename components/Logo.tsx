import React from 'react'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  showMalayalam?: boolean
  showTagline?: boolean
  className?: string
}

export default function Logo({
  variant = 'dark',
  size = 'md',
  showMalayalam = true,
  showTagline = true,
  className = '',
}: LogoProps) {
  const isLight = variant === 'light'

  // Dimensions
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 40
  const titleSize =
    size === 'sm'
      ? 'text-lg tracking-wider'
      : size === 'lg'
      ? 'text-2xl sm:text-3xl tracking-widest'
      : 'text-xl sm:text-2xl tracking-widest'

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Handcrafted Emblem */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        {/* Emblem Base */}
        <rect
          width="100"
          height="100"
          rx="24"
          fill={isLight ? '#1A3828' : '#244C37'}
          stroke={isLight ? 'rgba(245, 241, 230, 0.3)' : 'transparent'}
          strokeWidth={isLight ? '3' : '0'}
        />
        {/* Sun / Red dot */}
        <circle cx="58" cy="40" r="7.5" fill="#CB8869" />
        {/* Brush stroke arc / Enso */}
        <path
          d="M 28 65 C 18 45, 32 20, 54 20 C 72 20, 82 36, 80 54"
          stroke="#FAF8F2"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Birds flying */}
        <path
          d="M 28 26 Q 32 21 36 25 Q 40 21 44 25"
          stroke="#FAF8F2"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 20 34 Q 23 30 26 33 Q 29 30 32 33"
          stroke="#C1CBAE"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* The winding path towards horizon */}
        <path
          d="M 16 80 Q 42 74 58 54 L 84 54"
          stroke="#FAF8F2"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Traveler silhouette */}
        <circle cx="58" cy="47" r="2.2" fill="#FAF8F2" />
        <line
          x1="58"
          y1="49.5"
          x2="58"
          y2="54"
          stroke="#FAF8F2"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span
            className={`font-serif font-bold uppercase leading-none ${titleSize} ${
              isLight ? 'text-cream drop-shadow-sm' : 'text-forest'
            }`}
          >
            Manram
          </span>
          {showMalayalam && (
            <span
              className={`text-[11px] sm:text-xs font-normal tracking-wide px-2 py-0.5 rounded-full leading-none transition-colors ${
                isLight
                  ? 'bg-white/10 text-terracotta-200 border border-white/15'
                  : 'bg-forest/5 text-terracotta border border-terracotta/20'
              }`}
              title="Manram in Malayalam script"
            >
              മൺറം
            </span>
          )}
        </div>

        {showTagline && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] uppercase font-sans tracking-[0.24em] font-medium leading-none mt-1 ${
              isLight ? 'text-cream-200/80' : 'text-olive-700'
            }`}
          >
            A Collective Wisdom
          </span>
        )}
      </div>
    </div>
  )
}
