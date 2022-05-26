const plugin = require('tailwindcss/plugin');

const theme = require('./src/theme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      ...theme
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('hover-not-disabled', '&:hover:not([disabled])')
      addVariant('hocus', ['&:hover, &:focus'])
      addVariant('hocus-not-disabled', ['&:hover:not([disabled]), &:focus'])
    })
  ],
}
