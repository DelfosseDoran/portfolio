/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-orange": "#44bba4",
        "lemon-chiffon": "#FFFBEB",
        "Feldgrau": "#3b5249",
        "cool-grey": "#A4A8D1",
        "indian-red": "#e5989b",
        "tea-green": "#BFD7B5",
        "royal-purple":"#7E5A9B",
        "hunyadi-yelow":"#EEC170",
        "moonstone":"#5EB1BF",
        "asparagus":"#679436",
        "burnt-sienna": "#E26D5A",
        "wine":"#773344",
        "coral":"#EF7674",
        "raisin-black": {
          100: '#F7F3F5',
          200: '#DECED6',
          300: '#C6A9B8',
          400: '#AD859A',
          500: '#93627B',
          600: '#6E495C',
          700: '#49313E',
          800: '#25181F',
          900: '#0C080A',
        },
      },
      fontFamily: {
        sans: ['Sono'],
        Signika: ['Signika Negative']
      },
      margin: {
        '1/4': '25%',
        '1/8': '12.5%',
      },
      
    },
  },
  plugins: [],
}
