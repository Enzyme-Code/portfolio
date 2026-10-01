const defaultColors = require('tailwindcss/colors')

// Theme-aware colors: shades are read from CSS variables defined in main.css,
// so the same class (e.g. bg-slate-950) flips between light and dark themes.
const themed = (name, shades) =>
  Object.fromEntries(shades.map((shade) => [shade, `rgb(var(--${name}-${shade}) / <alpha-value>)`]))

const slateShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,vue,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        slate: themed('slate', slateShades),
        blue: { ...defaultColors.blue, ...themed('blue', [300, 400, 950]) },
        indigo: { ...defaultColors.indigo, ...themed('indigo', [300, 400, 950]) },
        emerald: { ...defaultColors.emerald, ...themed('emerald', [300, 400, 950]) },
        violet: { ...defaultColors.violet, ...themed('violet', [400]) },
        amber: { ...defaultColors.amber, ...themed('amber', [300, 400]) },
        sky: { ...defaultColors.sky, ...themed('sky', [300]) },
      },
      spacing: {
        header: '4rem',
      },
      keyframes: {
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(14px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-flow': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'catalyze': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
        'gradient-flow': 'gradient-flow 6s ease infinite',
        'catalyze': 'catalyze 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
