/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(80px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(14px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-flow': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
        'gradient-flow': 'gradient-flow 6s ease infinite',
      }
    },
  },
  plugins: [],
}

