/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xsm: ['12px', '16px'],
        sm: ['14px', '18px'],
        base: ['16px', '20px'],
        lg: ['20px', '24px'],
        medium : ['24px', '28px'],
        xl: ['28px', '34px'],
        xxl: ['36px', '40px'],
      },
      boxShadow:{
        'lg' : '0 0 3px 0 rgba(0,0,0,0.4), 1px 5px 13px 0px rgba(31,107,153,0.5)'
      },
      screens:{
        'mobile': '500px'
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
