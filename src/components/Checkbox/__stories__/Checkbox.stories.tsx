import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import Checkbox, { CheckboxProps } from '../Checkbox';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className="items-center flex gap-4">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const DefaultTemplate: ComponentStory<typeof Checkbox> = (
  args: CheckboxProps
) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(...props) => {
        args.onChange(...props);
        setChecked((prevValue) => !prevValue);
      }}
    />
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Option',
};

export const States: ComponentStory<typeof Checkbox> = (
  args: CheckboxProps
) => (
  <>
    <Default {...args} label="Regular" />
    <Default {...args} checked label="Selected" />
    <Default {...args} disabled label="Disabled" />
    <Default {...args} checked disabled label="Selected/Disabled" />
    <Default {...args} checked indeterminate label="Indeterminate" />
  </>
);

export const Group: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => (
  <CheckboxGroup>
    <Default {...args} checked label="Option 1" />
    <Default {...args} checked label="Option 2" />
    <Default {...args} label="Option 3" />
  </CheckboxGroup>
);
