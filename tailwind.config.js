/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000'
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(320px, max-content))'
      }
    },
  },
  plugins: [],
}

