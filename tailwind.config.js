import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#2dd4bf",
        secondary: "#38bdf8",
        accent: "#818cf8",
        "dark-bg": "#030712",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(45, 212, 191, 0.35)",
      },
    },
  },
  plugins: [aspectRatio],
};
