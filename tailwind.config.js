/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: {
        100: '#ffffff',
        200: '#ECECEC',
        300: '#cccccc',
      },
      black: {
        100: '#000000',
        200: '#161616',
        300: '#595959',
        400: '#a6a6a6',
      },
      danger: {
        100: '#EE0979',
        200: '#f6097c',
        300: '#f72289',
        400: '#fb84bd',
      },
      orange: {
        100: '#FF6A00',
        200: '#ff791a',
        300: '#ff8833',
        400: '#ffc499',
      },
      maron: {
        100: '#833556',
        200: '#a3436b',
        300: '#b54a77',
        400: '#c46e92',
      },
    },
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
};
