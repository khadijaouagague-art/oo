/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          'from': { 'transform': 'translateY(100%)', 'opacity': '0' },
          'to': { 'transform': 'translateY(0)', 'opacity': '1' },
        },
        'slide-down': {
          'from': { 'transform': 'translateY(-100%)', 'opacity': '0' },
          'to': { 'transform': 'translateY(0)', 'opacity': '1' },
        },
        'fade-in-up': {
          'from': { 'transform': 'translateY(30px)', 'opacity': '0' },
          'to': { 'transform': 'translateY(0)', 'opacity': '1' },
        },
        'fade-in-left': {
          'from': { 'transform': 'translateX(-30px)', 'opacity': '0' },
          'to': { 'transform': 'translateX(0)', 'opacity': '1' },
        },
        'fade-in': {
          'from': { 'opacity': '0' },
          'to': { 'opacity': '1' },
        },
        'blob': {
          '0%, 100%': { 'transform': 'translate(0, 0) scale(1)' },
          '33%': { 'transform': 'translate(30px, -50px) scale(1.1)' },
          '66%': { 'transform': 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
    },
  },
  plugins: [],
};
