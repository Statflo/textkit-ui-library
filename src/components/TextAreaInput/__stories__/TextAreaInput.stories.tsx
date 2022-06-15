import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TextAreaInput, { TextAreaInputProps } from '../TextAreaInput';

export default { title: 'Components/Textarea Input' } as ComponentMeta<
  typeof TextAreaInput
>;

const Template: ComponentStory<typeof TextAreaInput> = (
  args: TextAreaInputProps
) => (
  <div className="w-96">
    <TextAreaInput
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
  return <TextAreaInput value="With value" />;
};

export const WithError = () => {
  return <TextAreaInput value="Error value" error />;
};
