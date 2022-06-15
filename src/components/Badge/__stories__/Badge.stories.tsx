import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Badge, { BadgeProps } from '../Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <div className="flex gap-8">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Badge>;

const DefaultTemplate: ComponentStory<typeof Badge> = (args: BadgeProps) => (
  <Badge {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  text: '123',
};

const GroupTemplate: ComponentStory<typeof Badge> = (args: BadgeProps) => (
  <>
    <Badge {...args} type="primary" />
    <Badge {...args} type="secondary" />
    <Badge {...args} type="success" />
    <Badge {...args} type="warning" />
    <Badge {...args} type="error" />
    <Badge {...args} type="info" />
  </>
);

export const Filled = GroupTemplate.bind({});
Filled.args = {
  ...Default.args,
};

export const Inverse = GroupTemplate.bind({});
Inverse.args = {
  ...Default.args,
  kind: 'inverse',
};
