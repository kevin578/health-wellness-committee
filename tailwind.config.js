const colors = require('tailwindcss/colors')
console.log(colors)

module.exports = {
  content: ["./app/javascript/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        lime: colors.lime,
      }
    },
  },
  plugins: [],
}
