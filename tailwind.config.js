/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customNormal: ['MyCustomFont', 'sans-serif'],
      },
      colors: {
        customPurple: 'rgb(140, 105, 145)', 
        customDarkPurple: 'rgb(47, 21, 51)', 
        customPink: 'rgb(249, 240, 255)',
      },
    },
  },
  plugins: [],
};
