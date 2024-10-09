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
        "royal-purple": "#7E5A9B",
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
        "countries": {
          "oman": "#EEC170",
          "finland": "#5EB1BF",
          "belgium": "#679436",
          "canada": "#773344",
          "croatia": "#E26D5A",
          "italy": "#EF7674",
        },
        //dark mode
        "rich-black": "#040D12",
        "platinum":"#CCDBDC",
        "non-photo-blue":"#80ced7",
        "brunswick-green": "#27543F",
        "royal-blue": "#04265e",
        "white": "#fff"

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
