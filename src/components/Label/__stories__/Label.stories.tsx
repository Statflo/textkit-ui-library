import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Label, { LabelProps } from '../Label';

export default { title: 'Inputs/Label' } as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: LabelProps) => (
  <Label required={args.required}>{args.children}</Label>
);

export const Default = Template.bind({});
Default.args = {
  children: 'My label',
  required: false,
};

export const Required = () => {
  return <Label required>My Label</Label>;
};
