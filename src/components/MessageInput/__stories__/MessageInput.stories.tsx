import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import MessageInput, { MessageInputProps } from '../MessageInput';

export default {
  title: 'Messaging/Message Input',
  component: MessageInput,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof MessageInput>;

const Template: ComponentStory<typeof MessageInput> = (
  args: MessageInputProps
) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <>
      <MessageInput
        {...args}
        onChange={(...props) => {
          args.onChange(...props);
          setValue(...props);
        }}
        value={value}
      />
      <pre className="mt-3 whitespace-pre-wrap">
        {JSON.stringify({ value }, null, 2)}
      </pre>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  state: 'ready',
};
