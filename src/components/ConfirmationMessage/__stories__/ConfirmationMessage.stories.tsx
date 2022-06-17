import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ConfirmationMessage, {
  ConfirmationMessageProps,
} from '../ConfirmationMessage';

export default {
  title: 'Popover/Confirmation Message',
  component: ConfirmationMessage,
} as ComponentMeta<typeof ConfirmationMessage>;

const Template: ComponentStory<typeof ConfirmationMessage> = (
  args: ConfirmationMessageProps
) => <ConfirmationMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  content:
    'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin.',
  label: 'Confirmation Message Label',
};
