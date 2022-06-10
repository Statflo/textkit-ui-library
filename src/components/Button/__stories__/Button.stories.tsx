import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button, { ButtonProps } from '../Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div className="items-center flex gap-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const DefaultTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  children: 'Button',
};

const VariantsTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <>
    <Button {...args} variant="primary">
      Primary
    </Button>
    <Button {...args} variant="secondary">
      Secondary
    </Button>
    <Button {...args} variant="tertiary">
      Tertiary
    </Button>
  </>
);

export const Variants = VariantsTemplate.bind({});

export const Sizes: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <>
    <Button {...args} size="large">
      Large
    </Button>
    <Button {...args} size="medium">
      Medium
    </Button>
    <Button {...args} size="small">
      Small
    </Button>
  </>
);

export const Disabled = VariantsTemplate.bind({});
Disabled.args = {
  disabled: true,
};

export const Active = VariantsTemplate.bind({});
Active.args = {
  active: true,
};

export const Icons: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <>
    <Button {...args} trailingIcon="smile">
      Trailing Icon
    </Button>
    <Button {...args} leadingIcon="smile">
      Leading Icon
    </Button>
  </>
);
