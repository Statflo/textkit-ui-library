import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import RadioButton from '../RadioButton/RadioButton';
import RadioGroup from '../RadioGroup';

export default {
  title: 'Inputs/RadioGroup/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

// @ts-ignore
const Template: ComponentStory<typeof RadioGroup> = ({ items, ...args }) => {
  const [selected, setSelected] = useState('option1');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <RadioGroup {...args}>
      {items.map((item: any) => (
        <RadioButton
          {...item}
          checked={selected === item.value}
          onChange={onChange}
        />
      ))}
    </RadioGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'radioGroup',
  // @ts-ignore
  items: [
    {
      label: 'Option 1',
      value: 'option1',
    },
    {
      label: 'Option 2',
      value: 'option2',
    },
    {
      label: 'Option 3',
      value: 'option3',
    },
    {
      label: 'Option 4',
      value: 'option4',
      disabled: true,
    },
  ],
};
