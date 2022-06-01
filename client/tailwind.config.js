module.exports = {
  purge: ['./src/*{.js}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: '#030303',
          brighter: '#272728'
        },
        reddit_border: {
          DEFAULT: '#343536',
        },  
      },
    },
  },
  plugins: [],
}
