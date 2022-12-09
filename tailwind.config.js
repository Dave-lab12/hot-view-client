/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "30rem",
      },
      colors: {
        "blue-black": "#1a2261",
      },
      fontFamily: {
        Poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
