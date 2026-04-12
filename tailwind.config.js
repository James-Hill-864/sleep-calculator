/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sleep: {
          bg: '#0a0e1a',
          surface: '#111827',
          card: '#151c2e',
          'card-active': '#1a2540',
          border: 'rgba(100,120,160,0.12)',
          'border-active': 'rgba(61,212,184,0.25)',
          accent: '#3dd4b8',
          'accent-dim': 'rgba(61,212,184,0.08)',
          'accent-glow': 'rgba(61,212,184,0.15)',
          text: '#e2e8f0',
          muted: '#94a3b8',
          faint: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
