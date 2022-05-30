import React from 'react';
import ConfirmationMessage from '../src/components/ConfirmationMessage';

export default {
  title: 'ConfirmationMessage',
  component: ConfirmationMessage,
};

const Template = (args: any) => (
  <ConfirmationMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: 'Spicy jalapeno bacon ipsum dolor amet biltong eu swine proident pancetta esse sint ribeye sirloin eiusmod aliqua tail. Tenderloin prosciutto adipisicing esse, meatloaf short ribs tri-tip nulla cupidatat commodo shank pancetta qui bresaola sirloin.',
  label: 'Confirmation Message Label'
}