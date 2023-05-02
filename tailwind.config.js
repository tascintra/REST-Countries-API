/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',

      blue: {
        100: 'hsl(200, 15%, 8%)',
        200: 'hsl(207, 26%, 17%)',
        300: 'hsl(209, 23%, 22%)',
      },

      gray: {
        100: 'hsl(0, 0%, 52%)',
        200: 'hsl(0, 0%, 98%)',
      },
    },
    extend: {
      fontFamily: {
        sansBody: 'Arial, sans-serif',
        sansDetail: 'Nunito Sans, sans-serif',
      },
    },
  },
  plugins: [],
}
