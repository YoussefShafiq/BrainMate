/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        medium: 500,
        semiBold: 600,
        extraBold: 800,
      },
      backgroundImage: {
        'bg-pattern': "url('./src/assets/images/bgpattern.png')",
        'side-pattern': "url('./src/assets/images/BACKGROUND.png')",
      }, colors: {
        'primary': '#00adb5',
        'primarybg': '#133d57',
        'textprimary': '#133d57',
      }
    },
  },
  plugins: [],
}

