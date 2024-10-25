/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url('/src/assets/headernoise.png')",
        'noise2': "url('/src/assets/quotenoise.png')",
      },
      fontFamily: {
        bulletto: ['"Bulletto Killa"', 'cursive'], // Adding the custom font
        streetwear: ['"Streetwear"', 'cursive'],
        'american-captain': ['"American Captain"', 'sans-serif'], // Adjust fallback as needed

      },
    },
  },
  plugins: [],
}

