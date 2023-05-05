/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      transparent: 'transparent',

      blue: {
        100: '#111517',
        200: '#202c37',
        300: '#2b3945',
      },

      gray: {
        100: '#858585',
        200: '#fafafa',
      },
    },
    extend: {
      fontFamily: {
        sansb: 'Nunito Sans, sans-serif',
      },
      boxShadow: {
        bar: '0 2px 4px 0 #00000014',
        darkBar: '0 2px 6px 0 #00000032',
        components: '0px 0px 8px #00000014',
        selected: '0px 0px 16px #00000024',
        darkSelected: '0px 0px 16px #00000056',
      },
      maxWidth: {
        smd: '30rem',
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
