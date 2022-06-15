import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Icon, { IconProps } from '../Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => (
  <Icon {...args} />
);

export const Info = Template.bind({});
Info.args = {
  icon: 'info',
};
