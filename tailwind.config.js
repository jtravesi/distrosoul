/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Body font (pixel sans, readable for long text)
        body: ['"Pixelify Sans"', 'system-ui', 'sans-serif'],
        // Display font (arcade, for titles and reveals)
        display: ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        // PMD-inspired palette: deep navy backgrounds, warm cream text, soft accents
        bg: {
          DEFAULT: '#0a1428',
          deep: '#050a18',
          panel: '#13213d',
        },
        ink: {
          DEFAULT: '#f4ecd8',
          dim: '#c9bfa6',
          shadow: '#3a2a1a',
        },
        accent: {
          gold: '#f4c95d',
          rust: '#c75d4e',
          mist: '#7ba7c4',
          moss: '#7a9b5d',
        },
        border: {
          DEFAULT: '#f4ecd8',
          dim: '#8b7d63',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'blink': 'blink 1s steps(2) infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
