import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TextInput, { TextInputProps } from '../TextInput';

export default { title: 'Components/Text Input' } as ComponentMeta<
  typeof TextInput
>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
  <div className="w-96">
    <TextInput
      placeholder={args.placeholder}
      value={args.value}
      error={args.error}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'My placeholder',
  value: '',
  error: false,
};

export const WithValue = () => {
  return <TextInput value="With value" />;
};

export const WithError = () => {
  return <TextInput value="Error value" error />;
};
