import React, { useState } from 'react';
import MessageInput from '../src/components/MessageInput';

export default {
  title: "Message Input",
  component: MessageInput,
  argTypes: {
    value: {
      control: {
        disable: true,
      }
    }
  },
};

const Template = (args: any) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <>
      <MessageInput
        {...args}
        onChange={(...props) => {
          args.onChange(...props)
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
  state: 'ready'
}