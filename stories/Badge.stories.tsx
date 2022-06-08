import React from 'react';
import Badge from '../src/components/Badge/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <div className="flex gap-8">
        <Story />
      </div>
    )
  ]
};

const DefaultTemplate = (args: any) => (
  <Badge {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  text: '123',
};

const Template = (args: any) => (
  <>
    <Badge {...args} type="primary" />
    <Badge {...args} type="secondary" />
    <Badge {...args} type="success" />
    <Badge {...args} type="warning" />
    <Badge {...args} type="error" />
    <Badge {...args} type="info" />
  </>
);

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
};

export const Inverse = Template.bind({});
Inverse.args = {
  ...Default.args,
  kind: 'inverse',
};
