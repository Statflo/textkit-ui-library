import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Tag, { TagProps } from '../Tag';

export default {
  title: 'Components/Tag',
  argTypes: {
    type: {
      options: ['default', 'success', 'warning', 'danger', 'info'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args: TagProps) => (
  <div className="w-96">
    <Tag type={args.type}>{args.children}</Tag>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Tag Label',
  type: 'default',
};

export const Success = () => {
  return (
    <div className="w-96">
      <Tag type="success">Success Tag</Tag>
    </div>
  );
};

export const Warning = () => {
  return (
    <div className="w-96">
      <Tag type="warning">Warning Tag</Tag>
    </div>
  );
};

export const Danger = () => {
  return (
    <div className="w-96">
      <Tag type="danger">Danger Tag</Tag>
    </div>
  );
};

export const Info = () => {
  return (
    <div className="w-96">
      <Tag type="info">Info Tag</Tag>
    </div>
  );
};
