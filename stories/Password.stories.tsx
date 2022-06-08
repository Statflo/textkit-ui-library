import React from 'react';
import { Password } from '../src/components/Input';

export default {
  title: "Password",
  component: Password,
};

const Template = (args: any) => (
  <Password {...args} />
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: 'Label Text',
  name: 'password',
  placeholder: 'Password',
}