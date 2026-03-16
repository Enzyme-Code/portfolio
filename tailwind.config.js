/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      // 定義動畫的「動作關鍵影格 (Keyframes)」
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(80px)' }, // 起始狀態：透明、偏下
          '100%': { opacity: '1', transform: 'translateY(0)' },  // 結束狀態：不透明、原位
        }
      },
      // 定義動畫的「類別名稱 (Utility Class)」
      animation: {
        fadeInUp: 'fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1)' // 我們把它命名為 animate-fadeInUp，持續 0.6 秒
      }
    },
  },
  plugins: [],
}

