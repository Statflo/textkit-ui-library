import React from "react";
import Button from "../src/components/Button/Button";

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div className="items-center flex gap-4">
        <Story />
      </div>
    )
  ]
};

const DefaultTemplate = (args: any) => (
  <Button {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    children: 'Button',
};

export const Variants = (args: any) => (
    <>
        <Button {...args} variant="primary">Primary</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="tertiary">Tertiary</Button>
    </>
);

export const Sizes = (args: any) => (
    <>
        <Button {...args} size="large">Large</Button>
        <Button {...args} size="medium">Medium</Button>
        <Button {...args} size="small">Small</Button>
    </>
);

export const Disabled = (args: any) => (
    <>
        <Button {...args} disabled variant="primary">Primary</Button>
        <Button {...args} disabled variant="secondary">Secondary</Button>
        <Button {...args} disabled variant="tertiary">Tertiary</Button>
    </>
);

export const Active = (args: any) => (
    <>
        <Button {...args} active variant="primary">Primary</Button>
        <Button {...args} active variant="secondary">Secondary</Button>
        <Button {...args} active variant="tertiary">Tertiary</Button>
    </>
);

export const Icons = (args: any) => (
    <>
        <Button {...args} trailingIcon="smile">Trailing Icon</Button>
        <Button {...args} leadingIcon="smile">Leading Icon</Button>
    </>
)