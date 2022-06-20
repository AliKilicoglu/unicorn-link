/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js}"
],
  theme: {
    screens: {
      'mobile': { 'raw': '(max-width: 800px)' },
      'desktop': { 'raw': '(min-width: 800px)' }
    },
    extend: {},
  },
  plugins: [],
}
