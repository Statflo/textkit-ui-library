import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import IconButton, { IconButtonProps } from '../IconButton';

export default {
  title: 'Buttons/Icon Button',
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
    <IconButton {...args} ariaLabel="Primary" variant="primary" />
    <IconButton {...args} ariaLabel="Secondary" variant="secondary" />
    <IconButton {...args} ariaLabel="Tertiary" variant="tertiary" />
  </>
);

export const Variants: ComponentStory<typeof IconButton> =
  VariantsTemplate.bind({});
Variants.args = {
  ...Default.args,
};

const SizesTemplate = (args: any) => (
  <>
    <IconButton {...args} ariaLabel="Small" size="small" />
    <IconButton {...args} ariaLabel="Medium" size="medium" />
    <IconButton {...args} ariaLabel="Large" size="large" />
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
    <IconButton {...args} ariaLabel="Primary" color="primary" />
    <div className="bg-main-l1 rounded-md">
      <IconButton {...args} ariaLabel="White" color="white" />
    </div>
    <IconButton {...args} ariaLabel="Grey" color="grey" />
    <IconButton {...args} ariaLabel="Light Grey" color="lightGrey" />
    <IconButton {...args} ariaLabel="Success" color="success" />
    <IconButton {...args} ariaLabel="Warning" color="warning" />
    <IconButton {...args} ariaLabel="Error" color="error" />
    <IconButton {...args} ariaLabel="Info" color="info" />
  </>
);

export const Colors: ComponentStory<typeof IconButton> = ColorsTemplate.bind(
  {}
);
Colors.args = {
  ...Default.args,
};
