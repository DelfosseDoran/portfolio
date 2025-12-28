/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        height: {
          "screen-dvh": "100dvh",
        },
        fontFamily: {
          sans: ["Sono"],
          Signika: ["Signika Negative"],
        },
        margin: {
          "1/4": "25%",
          "1/8": "12.5%",
        },
      },
    },
  plugins: [],
};
