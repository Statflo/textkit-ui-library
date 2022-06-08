import React from 'react';
import Icon from '../src/components/Icon/Icon';

export default {
  title: 'Icon',
  component: Icon,
};

const Template = (args: any) => (
  <Icon {...args} />
);

export const Info = Template.bind({});
Info.args = {
  icon: 'info',
};