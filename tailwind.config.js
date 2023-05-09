/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        transparent: 'transparent',

        blue: {
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
          220: 'var(--blue-220)',
          300: 'var(--blue-300)',
        },

        gray: {
          100: 'var(--gray-100)',
          140: 'var(--gray-140)',
          160: 'var(--gray-160)',
          200: 'var(--gray-200)',
        },
      },
      fontFamily: {
        sansb: 'Nunito Sans, sans-serif',
      },
      fontSize: {
        body: '0.875rem',
      },
      boxShadow: {
        bar: 'var(--shadow-bar)',
        darkBar: 'var(--shadow-dark-bar)',
        components: 'var(--shadow-components)',
        selected: 'var(--shadow-selected)',
        darkSelected: 'var(--shadow-dark-selected)',
      },
      maxWidth: {
        sxs: '12.5rem',
        mxs: '15.5rem',
        smd: '30rem',
        '8xl': '88rem',
      },
      width: {
        66: '16.5rem',
        82: '20.5rem',
      },
      height: {
        84: '21rem',
        104: '26rem',
      },
    },
  },
  plugins: [],
}
