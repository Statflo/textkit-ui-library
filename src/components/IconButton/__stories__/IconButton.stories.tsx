import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import IconButton, { IconButtonProps } from '../IconButton';

export default {
  title: 'Components/Buttons/Icon Button',
  component: IconButton,
  decorators: [
    (Story) => (
      <div className="items-center flex gap-8">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof IconButton>;

const DefaultTemplate = (args: IconButtonProps) => <IconButton {...args} />;

export const Default: ComponentStory<typeof IconButton> = DefaultTemplate.bind(
  {}
);
Default.args = {
  ariaLabel: 'Button',
  icon: 'smile',
};

const VariantsTemplate = (args: IconButtonProps) => (
  <>
    <IconButton {...args} variant="primary" />
    <IconButton {...args} variant="secondary" />
    <IconButton {...args} variant="tertiary" />
  </>
);

export const Variants: ComponentStory<typeof IconButton> =
  VariantsTemplate.bind({});
Variants.args = {
  ...Default.args,
};

const SizesTemplate = (args: any) => (
  <>
    <IconButton {...args} size="small" />
    <IconButton {...args} size="medium" />
    <IconButton {...args} size="large" />
  </>
);

export const Sizes: ComponentStory<typeof IconButton> = SizesTemplate.bind({});
Sizes.args = {
  ...Default.args,
  variant: 'secondary',
};

export const Disabled: ComponentStory<typeof IconButton> =
  VariantsTemplate.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Active: ComponentStory<typeof IconButton> = VariantsTemplate.bind(
  {}
);
Active.args = {
  ...Default.args,
  active: true,
};

const ColorsTemplate = (args: IconButtonProps) => (
  <>
    <IconButton {...args} color="primary" />
    <div className="bg-main-l1 rounded-md">
      <IconButton {...args} color="white" />
    </div>
    <IconButton {...args} color="grey" />
    <IconButton {...args} color="lightGrey" />
    <IconButton {...args} color="success" />
    <IconButton {...args} color="warning" />
    <IconButton {...args} color="error" />
    <IconButton {...args} color="info" />
  </>
);

export const Colors: ComponentStory<typeof IconButton> = ColorsTemplate.bind(
  {}
);
Colors.args = {
  ...Default.args,
};
