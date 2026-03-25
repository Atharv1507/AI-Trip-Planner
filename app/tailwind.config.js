/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#aa3bff',
          600: '#8b2df3',
        },
      },
    },
  },
  plugins: [],
}

