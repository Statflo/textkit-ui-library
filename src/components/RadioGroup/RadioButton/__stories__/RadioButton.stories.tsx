import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import RadioButton, { RadioButtonProps } from '../RadioButton';

export default {
  title: 'Components/RadioGroup/RadioButton',
  component: RadioButton,
  decorators: [
    (Story) => (
      <div className="items-center flex gap-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof RadioButton>;

const DefaultTemplate: ComponentStory<typeof RadioButton> = (
  args: RadioButtonProps
) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <RadioButton
      {...args}
      checked={checked}
      onChange={(...props) => {
        args.onChange(...props);
        setChecked(true);
      }}
    />
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Option',
  name: 'radio',
  value: 'option',
};

export const States: ComponentStory<typeof RadioButton> = (
  args: RadioButtonProps
) => (
  <>
    <Default {...args} label="Default" />
    <Default {...args} checked label="Selected" />
    <Default {...args} disabled label="Disabled" />
    <Default {...args} checked disabled label="Selected/Disabled" />
  </>
);
