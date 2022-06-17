import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Icon, { IconProps } from '../Icon';
import icons from '../icons';

export default {
  title: 'Media/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <div className="items-center flex flex-wrap gap-8">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => (
  <Icon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: 'smile',
};

const SizesTemplate: ComponentStory<typeof Icon> = (args: IconProps) => (
  <>
    <Icon {...args} size="small" />
    <Icon {...args} size="medium" />
    <Icon {...args} size="large" />
  </>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  ...Default.args,
};

const ColorsTemplate: ComponentStory<typeof Icon> = (args: IconProps) => (
  <>
    <Icon {...args} color="primary" />
    <div className="bg-main-l1 rounded-md p-1">
      <Icon {...args} color="white" />
    </div>
    <Icon {...args} color="grey" />
    <Icon {...args} color="lightGrey" />
    <Icon {...args} color="success" />
    <Icon {...args} color="warning" />
    <Icon {...args} color="error" />
    <Icon {...args} color="info" />
  </>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  ...Default.args,
};

const CurrentColorTemplate: ComponentStory<typeof Icon> = (args: IconProps) => (
  <>
    <div className="text-[#05BAF3]">
      <Icon {...args} />
    </div>
    <div className="text-[#3EC71B]">
      <Icon {...args} />
    </div>
  </>
);

export const CurrentColor = CurrentColorTemplate.bind({});
CurrentColor.args = {
  ...Default.args,
  color: 'current',
};

export const IconsList: ComponentStory<typeof Icon> = () => (
  <div className="grid grid-cols-4 gap-8">
    {Object.keys(icons).map((icon) => (
      <div className="items-center flex gap-2">
        <Icon icon={icon as keyof typeof icons} />
        <p className="text-main text-14">{icon}</p>
      </div>
    ))}
  </div>
);
