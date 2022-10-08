/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1440px'
      },
      backgroundImage: {
        'bg-cover': "url('./images/background.jpg')",
      }
    },
  },
  plugins: [],
}
