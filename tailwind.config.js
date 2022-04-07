const theme = require('./src/theme');

module.exports = {
  prefix: 'tk-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      ...theme
    }
  },
  plugins: [],
}
