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
        cream: '#FAF9F6',
        'cream-dark': '#F5F3EF',
        sage: {
          50: '#f4f6f3',
          100: '#e6ebe3',
          200: '#cdd7c8',
          300: '#a8bba0',
          400: '#7d9a72',
          500: '#6B7F5E',
          600: '#4a5c41',
          700: '#3c4a35',
          800: '#323d2d',
          900: '#2a3326',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#4A4A4A',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        baskerville: ['Libre Baskerville', 'Baskerville', 'Georgia', 'serif'],
        garamond: ['EB Garamond', 'Garamond', 'Georgia', 'serif'],
        sans: ['Gill Sans', 'Gill Sans MT', 'Calibri', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.25em',
      },
    },
  },
  plugins: [],
}

export default config

