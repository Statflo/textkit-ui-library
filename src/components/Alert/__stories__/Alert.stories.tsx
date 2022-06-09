import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Alert, { AlertProps } from '../Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Alert>;

const DefaultTemplate = (args: AlertProps) => <Alert {...args} />;

export const Default: ComponentStory<typeof Alert> = DefaultTemplate.bind({});
Default.args = {
  isOpen: true,
  text: 'Spicy jalapeno bacon ipsum dolor amet chislic proident officia spare ribs',
};

const StatusTemplate = (args: AlertProps) => (
  <>
    <Alert {...args} status="neutral" />
    <Alert {...args} status="success" />
    <Alert {...args} status="warning" />
    <Alert {...args} status="error" />
    <Alert {...args} status="info" />
  </>
);

export const Statuses: ComponentStory<typeof Alert> = StatusTemplate.bind({});
Statuses.args = {
  ...Default.args,
};

const TypeTemplate = (args: AlertProps) => (
  <>
    <Alert {...args} type="toast" />
    <Alert {...args} type="embedded" />
    <Alert {...args} type="stripe" />
  </>
);

export const Types: ComponentStory<typeof Alert> = TypeTemplate.bind({});
Types.args = {
  ...Default.args,
};
