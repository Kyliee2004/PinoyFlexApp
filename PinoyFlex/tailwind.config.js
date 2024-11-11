/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],     
        pblack: ["Poppins-Black", "sans-serif"],
      },
 

    },
  },
  plugins: [],
}

