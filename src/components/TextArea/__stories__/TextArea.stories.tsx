import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TextArea, { TextAreaProps } from '../TextArea';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
  decorators: [
    (Story) => (
      <div className="flex flex-col flex-wrap gap-4 max-h-96">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TextArea>;

const DefaultTemplate: ComponentStory<typeof TextArea> = (
  args: TextAreaProps
) => (
  <div className="w-64">
    <TextArea {...args} />
  </div>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Label Text',
  name: 'textarea',
  required: true,
};

const StatesTemplate: ComponentStory<typeof TextArea> = (
  args: TextAreaProps
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
