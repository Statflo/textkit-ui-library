import { addDecorator } from "@storybook/react";
import Layout from "./Layout";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on[A-Z].*' },
};
