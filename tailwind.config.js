/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: 'var(--white)',
      black: 'var(--black)',
      transparent: 'transparent',

      blue: {
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
      },

      gray: {
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
      },
    },
    extend: {
      fontFamily: {
        sansb: 'Nunito Sans, sans-serif',
      },
      boxShadow: {
        bar: 'var(--shadow-bar)',
        darkBar: 'var(--shadow-dark-bar)',
        components: 'var(--shadow-components)',
        selected: 'var(--shadow-selected)',
        darkSelected: 'var(--shadow-dark-selected)',
      },
      maxWidth: {
        smd: '30rem',
        '8xl': '88rem',
      },
      width: {
        66: '16.5rem',
      },
      height: {
        84: '21rem',
      },
    },
  },
  plugins: [],
}
