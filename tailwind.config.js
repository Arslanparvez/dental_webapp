/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Metallic red & white palette (light-first).
        // The accent tokens below (`teal`, `teal-600`, `mint`, `sky`) are kept
        // by name so existing utility classes keep working, but now hold the
        // metallic-red brand values. Prefer the `red*`/`brand` aliases in new code.
        ink: '#0A0A0B',
        teal: '#A4172A', // brand metallic red (deep, refined)
        'teal-600': '#7C1020', // darker red (hover/active)
        mint: '#E7B3B8', // soft muted rose highlight (use sparingly on dark)
        // Red-named aliases (point at the same brand values)
        brand: '#A4172A',
        red: '#A4172A',
        'red-600': '#7C1020',
        'red-200': '#E7B3B8',
        // Legacy aliases kept so any stray reference still resolves sensibly
        navy: '#0A0A0B',
        offwhite: '#FFFFFF',
        lightgray: '#FAFAFA',
        sky: '#F7EBEC', // very light red-tinted white
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
        glow: '0 0 0 1px rgba(164,23,42,0.20), 0 12px 40px -14px rgba(164,23,42,0.30)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(10,10,11,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,11,0.04) 1px, transparent 1px)',
        // True metallic-red: alternating light/dark bands mimic the anisotropic
        // sheen of brushed metal / red chrome (specular highlights at ~22% & ~78%).
        'metallic-red':
          'linear-gradient(135deg, #5C0B16 0%, #9E1622 8%, #E06A74 22%, #A4172A 38%, #6E0E1B 50%, #A4172A 62%, #E06A74 78%, #9E1622 92%, #5C0B16 100%)',
        'metallic-red-hover':
          'linear-gradient(135deg, #4A0912 0%, #8A1320 8%, #CF4B56 22%, #8E1320 38%, #5C0B16 50%, #8E1320 62%, #CF4B56 78%, #8A1320 92%, #4A0912 100%)',
        // Cleaner single-sweep metallic for large surfaces (hero, headers, footer)
        'metallic-red-panel':
          'linear-gradient(125deg, #6E0E1B 0%, #A4172A 26%, #C9434E 46%, #911322 60%, #6E0E1B 82%, #500A14 100%)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        'gradient-shift': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
        'pulse-subtle': {
          '0%': { boxShadow: '0 0 0 0 rgba(164,23,42,0.40)' },
          '70%': { boxShadow: '0 0 0 12px rgba(164,23,42,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(164,23,42,0)' },
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
