/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        blue: "#7884F5",
        orange: '#ff914d',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 500px) { ... }
        'Btablet': '683px',
        // => @media (min-width: 600px) { ... }
        'Stablet': '700px',
        // => @media (min-width: 600px) { ... }
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}