import React from 'react';
import ChatBubble from '../src/components/ChatBubble/ChatBubble';

export default {
  title: 'Chat Bubble',
  component: ChatBubble,
}

const Template = (args: any) => (
  <ChatBubble {...args} />
);

export const Outgoing = Template.bind({});
Outgoing.args = {
  content: 'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin. Nostrud aliquip cupim kielbasa.',
  state: 'outgoing',
  timestamp: new Date(),
};

export const Incoming = Template.bind({});
Incoming.args = {
  content: 'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin. Nostrud aliquip cupim kielbasa.',
  state: 'incoming',
  timestamp: new Date(),
};

export const Error = Template.bind({});
Error.args = {
  content: 'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin. Nostrud aliquip cupim kielbasa.',
  state: 'error',
  timestamp: new Date(),
};

export const Sending = Template.bind({});
Sending.args = {
  content: 'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin. Nostrud aliquip cupim kielbasa.',
  state: 'sending',
  timestamp: new Date(),
};