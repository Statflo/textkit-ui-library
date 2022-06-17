import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import InputError, { InputErrorProps } from '../InputError';

export default { title: 'Inputs/Input Error' } as ComponentMeta<
  typeof InputError
>;

const Template: ComponentStory<typeof InputError> = (args: InputErrorProps) => (
  <InputError>{args.children}</InputError>
);

export const Default = Template.bind({});
Default.args = {
  children: 'My error message',
};
