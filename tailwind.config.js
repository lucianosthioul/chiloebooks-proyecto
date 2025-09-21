/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'chiloe-primary': '#f0ad4e',
        'chiloe-hover': '#d98f2b',
        'chiloe-light': '#f9c36a',
        'brand-background': '#FFFFFF',
        'brand-text': '#1D1D1F',
        'brand-accent': '#007AFF', 
        'brand-accent-hover': '#0071E3',
        'brand-subtle': '#F5F5F7', 
      }
    }
  },
  plugins: [],
  safelist: [
    'hover:bg-chiloe-hover',
    'hover:text-chiloe-primary',
    'hover:border-chiloe-primary'
  ],
}