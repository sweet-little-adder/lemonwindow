/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url('/src/assets/headernoise.png')",
      },
      fontFamily: {
        bulletto: ['"Bulletto Killa"', 'cursive'], // Adding the custom font
        streetwear: ['"Streetwear"', 'cursive'],
      },
    },
  },
  plugins: [],
}

