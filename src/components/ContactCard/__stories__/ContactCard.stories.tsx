import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ContactCard, { ContactCardProps } from '../ContactCard';

export default {
  title: 'Messaging/Contact Card',
  component: ContactCard,
} as ComponentMeta<typeof ContactCard>;

const Template: ComponentStory<typeof ContactCard> = (
  args: ContactCardProps
) => <ContactCard {...args} />;

export const Unread = Template.bind({});
Unread.args = {
  isLoading: false,
  isSmsCapable: true,
  isVoiceCapable: true,
  title: 'FullName',
  timestamp: new Date(),
  preview:
    'Aute turkey elit, ipsum do pig boudin consectetur t-bone. Cupim culpa ribeye flank in eiusmod minim esse. In tri-tip qui pork landjaeger laborum cupidatat biltong eu.',
  unreadMessages: 2,
};
