import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TextField, { TextFieldProps } from '../TextField';

export default {
  title: 'Inputs/TextField',
  component: TextField,
  decorators: [
    (Story) => (
      <div className="flex flex-col flex-wrap gap-2 max-h-80">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TextField>;

const DefaultTemplate: ComponentStory<typeof TextField> = (
  args: TextFieldProps
) => (
  <div className="w-72">
    <TextField {...args} />
  </div>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Label Text',
  name: 'textfield',
  required: true,
};

const StatesTemplate: ComponentStory<typeof TextField> = (
  args: TextFieldProps
) => (
  <>
    <Default {...args} />
    <Default {...args} value="Populated" />
    <Default {...args} placeholder="Optional" required={false} />
    <Default {...args} disabled value="Disabled" />
    <Default
      {...args}
      validation={{ status: 'success', text: 'Success Text' }}
      value="Success"
    />
    <Default
      {...args}
      validation={{ status: 'warning', text: 'Warning Text' }}
      value="Warning"
    />
    <Default
      {...args}
      validation={{ status: 'error', text: 'Error Text' }}
      value="Error"
    />
    <Default
      {...args}
      validation={{ status: 'neutral', text: 'Help Text' }}
      value="Help"
    />
  </>
);

export const States = StatesTemplate.bind({});
States.args = {
  ...Default.args,
};

export const Password = DefaultTemplate.bind({});
Password.args = {
  ...Default.args,
  placeholder: 'Password',
  type: 'password',
};
