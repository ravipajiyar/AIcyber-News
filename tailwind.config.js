/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00bcd4', // Example vibrant blue
        'secondary': '#ff9800', // Example vibrant orange
        'dark-bg': '#121212',    // Dark background color
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}