/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('public/Assets/Wave.svg')",
      },
      colors:{
        'merah' : "#FE6557",
        'putih' : "#F8F9F4",
        'biru'  : "#C7EDE9"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

