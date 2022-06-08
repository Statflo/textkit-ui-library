import React from 'react';
import Input from '../src/components/Input';

export default {
  title: "Input",
  component: Input,
};

const Template = (args: any) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: 'Label Text',
  name: 'default',
  placeholder: 'Placeholder',
  required: true,
  type: 'text',
};
