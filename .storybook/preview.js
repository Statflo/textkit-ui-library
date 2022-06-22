import { addDecorator } from "@storybook/react";
import { create } from "@storybook/theming";

import Layout from "./Layout";

const theme = create({
  base: 'light',
  fontBase: '"BrandonText", sans-serif',
  colorSecondary: '#4B64D7',
})

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: [
      { name: 'light', value: '#F1F2F5' },
      { name: 'dark', value: '#333333' },
    ]
  },
  docs: {
    theme,
  },
  options: {
    storySort: {
      order: ['Introduction', 'Changelog', 'Foundation', 'Buttons', 'Inputs', 'Data Display', 'Media', 'Popover', 'Feedback', 'Navigation', 'Messaging', 'Widgets']
    }
  }
};
