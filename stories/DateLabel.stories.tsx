import { subDays } from 'date-fns';
import React from 'react';
import DateLabel from '../src/components/DateLabel';

export default {
  title: 'Date Label',
  component: DateLabel,
};

const Template = (args: any) => (
  <DateLabel {...args} />
);

export const Today = Template.bind({});
Today.args = {
  date: new Date(),
}

export const Yesterday = Template.bind({});
Yesterday.args = {
  date: subDays(new Date(), 1),
}

export const Short = Template.bind({});
Short.args = {
  date: new Date('5/30/2023'),
  isLong: false,
}

export const Long = Template.bind({});
Long.args = {
  date: new Date('5/30/2023'),
  isLong: true,
}