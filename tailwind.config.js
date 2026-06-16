/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Mono-premium palette (Linear/Vercel, light-first)
        ink: '#0A0A0B',
        teal: '#00A6A6',
        'teal-600': '#008C8C',
        mint: '#7ED6C2',
        // Legacy aliases kept so any stray reference still resolves sensibly
        navy: '#0A0A0B',
        offwhite: '#FFFFFF',
        lightgray: '#FAFAFA',
        sky: '#EAF8F7',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: { container: '1200px' },
      boxShadow: {
        soft: '0 1px 2px rgba(10,10,11,0.04), 0 8px 24px -12px rgba(10,10,11,0.12)',
        lift: '0 2px 4px rgba(10,10,11,0.04), 0 24px 48px -16px rgba(10,10,11,0.20)',
        glow: '0 0 0 1px rgba(0,166,166,0.25), 0 12px 40px -12px rgba(0,166,166,0.35)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(10,10,11,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,11,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        'gradient-shift': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
        'pulse-subtle': {
          '0%': { boxShadow: '0 0 0 0 rgba(0,166,166,0.45)' },
          '70%': { boxShadow: '0 0 0 12px rgba(0,166,166,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0,166,166,0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 7s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        shimmer: 'shimmer 1.6s infinite',
        'pulse-subtle': 'pulse-subtle 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
