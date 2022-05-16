const postcss = require("rollup-plugin-postcss");
const copy = require("rollup-plugin-copy");
const postcssImport = require('postcss-import');
const tailwindcss = require("tailwindcss");
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      copy({
        targets: [
          {
            src: [
              './src/theme.js'
            ],
            dest: 'dist'
          },
          {
            src: [
              './tailwind.config.js'
            ],
            dest: 'dist'
          }
        ]
      }),
      postcss({
        plugins: [
          postcssImport(),
          tailwindcss("./tailwind.config.js"),
          autoprefixer(),
          cssnano({ preset: "default" }),
        ],
      })
    );

    return config;
  }
};
