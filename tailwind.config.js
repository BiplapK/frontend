/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      pink: '#EE0979',
      orange: '#FF6A00',
      grey: '#161616',
      black: '#000000',
      light: '#ECECEC',
      white: '#ffffff',
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
  },
  plugins: [],
};
