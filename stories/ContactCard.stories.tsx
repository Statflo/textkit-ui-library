import React from 'react';
import ContactCard from '../src/components/ContactCard';

export default {
  title: 'Contact Card',
  component: ContactCard,
};

const Template = (args: any) => (
  <ContactCard {...args} />
);

export const Unread = Template.bind({});
Unread.args = {
  isLoading: false,
  isSmsCapable: true,
  isVoiceCapable: true,
  title: 'FullName',
  timestamp: new Date(),
  preview: 'Aute turkey elit, ipsum do pig boudin consectetur t-bone. Cupim culpa ribeye flank in eiusmod minim esse. In tri-tip qui pork landjaeger laborum cupidatat biltong eu.',
  unreadMessages: 2,
}