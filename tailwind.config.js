/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      textStrokeWidth: {
        sm: '1px',
        sm: '2px',
        lg: '3px',
      },
      cursor: {
        custom: "url('/logo.svg')",
      },
      backgroundImage: {
        'noise': "url('/src/assets/headernoise.png')",
        'noise2': "url('/src/assets/quotenoise.png')",
        'noise3': "url('/src/assets/watercolornoise.png')",
      },
      fontFamily: {
        bulletto: ['"Bulletto Killa"', 'cursive'], // Adding the custom font
        streetwear: ['"Streetwear"', 'cursive'],
        'american-captain': ['"American Captain"', 'sans-serif'], // Adjust fallback as needed
        lemonada: ['Lemonada', 'sans-serif'],

      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
          color: 'transparent',
        },
      });
    },
  ],
}

