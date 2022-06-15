import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Input, { InputProps } from '../Default';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
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
