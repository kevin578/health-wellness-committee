const colors = require('tailwindcss/colors')
console.log(colors)

module.exports = {
  content: ["./app/javascript/**/*.{html,js}"],
  theme: {
    container: {
      padding: '2rem',
      center: true
    }, 
    extend: {
      colors: {
        orange: colors.orange,
        lime: colors.lime,
      }
    },
  },
  plugins: [],
}
