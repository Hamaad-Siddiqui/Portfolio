const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.7rem", // 11px
      base: "0.9375rem", // 15px
      xl: "1rem", // 16px
      "2xl": "1.25rem", // 20px
      "3xl": "1.625rem", // 26px
      "4xl": "2rem", // 32px
      "5xl": "2.5rem", // 40px
    },
    extend: {
      colors: {
        primary: "#E5E5E5",
        background: "#050505",
        ash: "#bababa",
        light: "#27272A",
        badge: "#1E1E1E",
        grass: "#3ef760",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
