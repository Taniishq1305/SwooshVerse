/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00c3ff', // Primary blue
          600: '#009cc9',
          700: '#007595',
          800: '#004e62',
          900: '#00272e',
        },
        secondary: {
          50: '#f2e6ff',
          100: '#e5ccff',
          200: '#cb99ff',
          300: '#b166ff',
          400: '#9733ff',
          500: '#8A2BE2', // Secondary purple
          600: '#6e22b5',
          700: '#531a88',
          800: '#37115a',
          900: '#1c092d',
        },
        accent: {
          50: '#ffe6f9',
          100: '#ffccf3',
          200: '#ff99e7',
          300: '#ff66db',
          400: '#ff33cf',
          500: '#ff00c3', // Accent pink
          600: '#c9009c',
          700: '#950075',
          800: '#62004e',
          900: '#2e0027',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
        dark: {
          100: '#202024',
          200: '#18181b',
          300: '#121215',
          400: '#0c0c0e',
          500: '#050507',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #1e1e24 1px, transparent 1px), linear-gradient(to bottom, #1e1e24 1px, transparent 1px)',
      },
      boxShadow: {
        'neon': '0 0 5px rgba(0, 195, 255, 0.5), 0 0 20px rgba(0, 195, 255, 0.2)',
        'neon-purple': '0 0 5px rgba(138, 43, 226, 0.5), 0 0 20px rgba(138, 43, 226, 0.2)',
      },
    },
  },
  plugins: [],
};