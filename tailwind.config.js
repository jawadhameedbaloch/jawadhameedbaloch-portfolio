/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      colors: {
        'void-black': '#000000',
        'matte-charcoal': '#050505',
        'cyber-cyan': '#06b6d4',
        'amethyst-purple': '#8b5cf6',
        'surface-dark': '#0a0a0a',
        'surface-light': '#171717',
      },
      backgroundImage: {
        'neural-network': "radial-gradient(circle at center, #06b6d4 0%, transparent 70%)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
    },
  },
  plugins: [],
};
