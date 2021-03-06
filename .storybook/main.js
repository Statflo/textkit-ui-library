module.exports = {
  stories: [
    '../stories/Intro.stories.mdx',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/**/*.stories.@(ts|tsx|js|jsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      }
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ],
  features: {
    interactionsDebugger: true,
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  core: {
    builder: 'webpack5',
  },
};
