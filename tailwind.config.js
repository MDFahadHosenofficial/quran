/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom fonts
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Custom font family
      },
      // Center containers
      container: {
        center: true,
      },
      // Custom background images
      backgroundImage: {
        appImg: "url('../assets/quran.jpg')",
      },
      // Custom animations
      animation: {
        fadeIn: "fadeIn 1s ease-in-out", // fadeIn animation
      },
      // Custom keyframes
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
