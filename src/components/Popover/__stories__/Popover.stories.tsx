import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Popover, { PopoverProps } from '../Popover';

export default {
  title: 'Popover/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args: PopoverProps) => (
  <Popover {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      title: '1. Popover Title',
      body: 'Popover Body',
      errorText: 'Popover Error',
    },
    {
      title: '2. Popover Title',
      body: 'Another Popover Body',
      errorText: 'Another Popover Error',
    },
  ],
  isError: false,
  position: 'top',
};
