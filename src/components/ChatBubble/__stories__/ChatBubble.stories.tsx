import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ChatBubble, { ChatBubbleProps } from '../ChatBubble';

export default {
  title: 'Components/Chat Bubble',
  component: ChatBubble,
} as ComponentMeta<typeof ChatBubble>;

const Template: ComponentStory<typeof ChatBubble> = (args: ChatBubbleProps) => (
  <ChatBubble {...args} />
);

export const Outgoing = Template.bind({});
Outgoing.args = {
  content:
    'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin. Nostrud aliquip cupim kielbasa.',
  state: 'outgoing',
  timestamp: new Date(),
};

export const Incoming = Template.bind({});
Incoming.args = {
  content:
    'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin. Nostrud aliquip cupim kielbasa.',
  state: 'incoming',
  timestamp: new Date(),
};

export const Error = Template.bind({});
Error.args = {
  content:
    'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin. Nostrud aliquip cupim kielbasa.',
  state: 'error',
  timestamp: new Date(),
};

export const Sending = Template.bind({});
Sending.args = {
  content:
    'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin. Nostrud aliquip cupim kielbasa.',
  state: 'sending',
  timestamp: new Date(),
};
