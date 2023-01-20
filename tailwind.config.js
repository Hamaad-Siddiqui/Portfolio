const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 darkMode: 'media',
 theme: {
  fontSize: {
   sm: '0.6875rem', // 11px
   base: '0.9375rem', // 15px
   xl: '1rem', // 16px
   '2xl': '1.25rem', // 20px
   '3xl': '1.625rem', // 26px
   '4xl': '2rem', // 32px
   '5xl': '2.5rem', // 40px
  },
  extend: {
   colors: {
    snow: '#F9FAFB',
    coal: '#0A0A0A',
    darkGray: '#313131',
   },
   fontFamily: {
    sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
   },
  },
 },
 plugins: [],
};
