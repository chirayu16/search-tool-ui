/** @type {import('tailwindcss').Config} */

const customColors = {
  'card-hover': '#2e3f5b',
  'page-bg': '#0f172a',
};
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "page-bg": "#0f172a",
      }
    },
  },
  plugins: [],
}

