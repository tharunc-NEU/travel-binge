/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CC9F30", // Gold color
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"], // Font for the main text
        body: ["Inter", "sans-serif"], // Font for body text
      },
    },
  },
  plugins: [],
};
