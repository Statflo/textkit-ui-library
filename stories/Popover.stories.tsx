import React from 'react';
import Popover from '../src/components/Popover/Popover';

export default {
  title: "Popover",
  component: Popover,
};

const Template = (args: any) => (
  <Popover {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: [{
    title: '1. Popover Title',
    body: 'Popover Body',
    errorText: 'Popover Error',
  }, {
    title: '2. Popover Title',
    body: 'Another Popover Body',
    errorText: 'Another Popover Error',
  }],
  isError: false,
  position: 'top'
}