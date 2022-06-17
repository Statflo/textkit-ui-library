import { ComponentMeta, ComponentStory } from '@storybook/react';
import { subDays } from 'date-fns';
import React from 'react';

import DateLabel, { DateLabelProps } from '../DateLabel';

export default {
  title: 'Data Display/Date Label',
  component: DateLabel,
} as ComponentMeta<typeof DateLabel>;

const Template: ComponentStory<typeof DateLabel> = (args: DateLabelProps) => (
  <DateLabel {...args} />
);

export const Today = Template.bind({});
Today.args = {
  date: new Date(),
};

export const Yesterday = Template.bind({});
Yesterday.args = {
  date: subDays(new Date(), 1),
};

export const Short = Template.bind({});
Short.args = {
  date: new Date('5/30/2023'),
  isLong: false,
};

export const Long = Template.bind({});
Long.args = {
  date: new Date('5/30/2023'),
  isLong: true,
};
