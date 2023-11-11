const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 darkMode: 'class',
 theme: {
  fontSize: {
   sm: '0.7rem', // 11px
   base: '0.9375rem', // 15px
   xl: '1rem', // 16px
   '2xl': '1.25rem', // 20px
   '3xl': '1.625rem', // 26px
   '4xl': '2rem', // 32px
   '5xl': '2.5rem', // 40px
  },
  extend: {
   colors: {
    // light
    primary: '#212529',
    background: '#E9ECEF',

    light: '#CED4DA',
    secondary: '#ADB5BD',
    // dark
    // dark-txt = darkPrimary
    darkPrimary: '#E5E5E5',
    darkBackground: '#1A1A1A',

    darkLight: '#27272A',
    darkBadge: '#1E1E1E',
    // old
    snow: '#F9FAFB',
    coal: '#0A0A0A',
    gray: '#292929',
    smoke: '#3d3d3d',
    cyan: '#00D5DB',
   },
   fontFamily: {
    sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
   },
  },
 },
 plugins: [],
};
