import React from 'react';
import Badge from '../src/components/Badge/Badge';

export default {
  title: 'Badge',
  component: Badge,
  args: {
    label: '123',
  },
  decorators: [
    (Story) => (
      <div className="flex gap-4">
        <Story />
      </div>
    )
  ]
};

const Template = (args: any) => (
  <>
    <Badge {...args} isFilled={true} />
    <Badge {...args} isFilled={false} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
}

const SecondaryTemplate = (args: any) => (
  <Badge {...args} isFilled={true} />
);

export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  type: 'secondary',
}

export const Success = Template.bind({});
Success.args = {
  type: 'success',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
};