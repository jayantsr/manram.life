import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F0F6F2',
          100: '#DEEBE2',
          200: '#BED9C7',
          300: '#91C0A2',
          400: '#5EA078',
          500: '#388358',
          600: '#2C6A47',
          DEFAULT: '#244C37', // Official Forest Green
          800: '#1D3B2C',
          900: '#152C21',
          950: '#0C1B14',
        },
        olive: {
          50: '#F7F8F3',
          100: '#ECEFE5',
          200: '#DAE0CD',
          300: '#C1CBAE',
          400: '#9EB086',
          DEFAULT: '#78875B', // Official Olive Green
          600: '#616F48',
          700: '#4D5838',
          800: '#3D462E',
          900: '#2A3020',
        },
        cream: {
          50: '#FCFBF9',
          100: '#FAF8F3',
          DEFAULT: '#F5F1E6', // Official Warm Cream
          300: '#EDE6D4',
          400: '#DFD5BD',
          500: '#CEBE9F',
        },
        terracotta: {
          50: '#FAF2EE',
          100: '#F5E4DB',
          200: '#ECCAB9',
          300: '#DDAB92',
          400: '#CB8869',
          DEFAULT: '#B86E4C', // Official Terracotta
          600: '#A15938',
          700: '#83442A',
          800: '#6A3723',
          900: '#542D1E',
        },
        stone: {
          50: '#F6F6F5',
          100: '#EBECE9',
          200: '#D8D9D4',
          300: '#BDBFB7',
          400: '#A4A89E',
          DEFAULT: '#8D9188', // Official Stone Grey
          600: '#71756D',
          700: '#575A53',
          800: '#42453F',
          900: '#2F312D',
        },
        charcoal: {
          50: '#F5F6F5',
          100: '#E5E7E5',
          200: '#C8CCC8',
          300: '#A5ABA5',
          400: '#747C74',
          500: '#4F564F',
          DEFAULT: '#252A25', // Official Dark Charcoal
          700: '#1D211D',
          800: '#151815',
          900: '#0E100E',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Lora', 'Georgia', 'serif'],
        sans: ['var(--font-dmsans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 76, 55, 0.08)',
        'elevated': '0 12px 36px -4px rgba(36, 76, 55, 0.12)',
        'warm': '0 10px 30px -5px rgba(184, 110, 76, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
