/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0D110F',
          green: '#133524',
          orange: '#FF5C00',
          sand: '#F3F1EC',
          stone: '#E5E2DB'
        },
      },
    },
  },
  plugins: [],
}

