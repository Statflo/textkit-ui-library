import React from 'react';
import ConversationStarter from '../src/components/ConversationStarter/ConversationStarter';

export default {
  title: 'Conversation Starter',
  component: ConversationStarter,
  decorators: [
    (Story) => (
      <div className="w-100">
        <Story />
      </div>
    )
  ]
};

const Template = (args: any) => (
  <ConversationStarter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  campaignName: 'Vintage Cars 0375bb79-dfdb-4861-9002-6ac26f65220f',
  template: [
    "Hello ",
    "{{displayName}}",
    ". Your ",
    "{{manufacturer}}",
    " ",
    "{{model}}",
    " is due for maintenance. Would you like to schedule an appointment?"
  ],
  variables: [{
    "name": "displayName",
    "value": "Idell Lemke",
  }, {
    "name": "manufacturer",
    "value": "Ford",
  }, {
    "name": "model",
    "value": "Model T",
  }],
}