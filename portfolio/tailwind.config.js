/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-home": "url('/home.jpg')",
      },
      keyframes: {
        moveDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" }, // Adjust the downward distance as needed
        },
      },
      animation: {
        moveDown: "moveDown 1s ease-in-out infinite", // Looping animation
      },
    },
  },
  plugins: [],
};
