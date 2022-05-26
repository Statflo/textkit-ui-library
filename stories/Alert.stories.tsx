import React from 'react';
import Alert from '../src/components/Alert';

export default {
  title: 'Alert',
  component: Alert,
  args: {
    isOpen: true,
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-8">
        <Story />
      </div>
    )
  ]
};

const Template = (args: any) => (
  <>
    <Alert {...args} type="toast" />
    <Alert {...args} type="embedded" />
    <Alert {...args} type="stripe" />
  </>
);

export const Neutral = Template.bind({});
Neutral.args = {
  status: 'neutral',
  message: 'This is a neutral alert',
}

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  message: 'This is a success alert'
};

export const Info = Template.bind({});
Info.args = {
  status: 'info',
  message: 'This is an info alert',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  message: 'This is an error alert',
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  message: 'This is a warning alert',
};
