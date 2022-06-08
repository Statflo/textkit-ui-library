import React from 'react';
import Alert from '../src/components/Alert/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4">
        <Story />
      </div>
    )
  ]
};

const DefaultTemplate = (args: any) => (
  <Alert {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  text: 'Spicy jalapeno bacon ipsum dolor amet chislic proident officia spare ribs',
  isOpen: true,
};

const StatusTemplate = (args: any) => (
  <>
    <Alert {...args} status="neutral" />
    <Alert {...args} status="success" />
    <Alert {...args} status="warning" />
    <Alert {...args} status="error" />
    <Alert {...args} status="info" />
  </>
);

export const Statuses = StatusTemplate.bind({});
Statuses.args = {
  ...Default.args,
};

const TypeTemplate = (args: any) => (
  <>
    <Alert {...args} type="toast" />
    <Alert {...args} type="embedded" />
    <Alert {...args} type="stripe" />
  </>
);

export const Types = TypeTemplate.bind({});
Types.args = {
  ...Default.args,
};
