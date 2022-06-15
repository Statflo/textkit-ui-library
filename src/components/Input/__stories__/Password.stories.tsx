import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { InputProps } from '../Default';
import { Password } from '../Password';

export default {
  title: 'Components/Password',
  component: Password,
} as ComponentMeta<typeof Password>;

const Template: ComponentStory<typeof Password> = (args: InputProps) => (
  <Password {...args} />
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: 'Label Text',
  name: 'password',
  placeholder: 'Password',
};
