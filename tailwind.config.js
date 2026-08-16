/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Backgrounds — near-black with subtle navy undertone
        bg: {
          DEFAULT: '#000000',
          surface: '#0a0a0a',
          elevated: '#121212',
          hover: '#1a1a1a',
        },
        // Borders & lines
        border: {
          DEFAULT: '#222222',
          dim: '#111111',
          hover: '#333333',
        },
        // Typography
        fg: {
          DEFAULT: '#f0f0f5',
          secondary: '#8a8a9a',
          tertiary: '#55556a',
          muted: '#3a3a4a',
        },
        // Accents — restrained
        accent: {
          DEFAULT: '#3d7aed',
          dim: '#2a5bb8',
          glow: 'rgba(61, 122, 237, 0.15)',
          violet: '#7c5cfc',
          'violet-dim': 'rgba(124, 92, 252, 0.12)',
        },
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
        'heading': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.8125rem', { lineHeight: '1.5' }],
        'label': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
        'micro': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '500' }],
      },
      spacing: {
        'section': 'clamp(5rem, 12vh, 8rem)',
      },
      maxWidth: {
        'content': '1200px',
        'content-wide': '1400px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.2)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.4), 0 16px 48px rgba(0,0,0,0.3)',
        'glow-blue': '0 0 20px rgba(61,122,237,0.15), 0 0 40px rgba(61,122,237,0.05)',
        'glow-violet': '0 0 20px rgba(124,92,252,0.1)',
        'chat': '0 20px 60px rgba(0,0,0,0.5), 0 0 1px rgba(255,255,255,0.05)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease forwards',
        'fade-up': 'fade-up 0.6s ease forwards',
        'fade-down': 'fade-down 0.4s ease forwards',
        'scale-in': 'scale-in 0.5s ease forwards',
        'slide-up': 'slide-up 0.5s ease forwards',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '450': '450ms',
      },
    },
  },
  plugins: [],
};
