import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Loader from '../Loader';

export default { title: 'Feedback/Loader' } as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: any) => (
  <div className="w-96">
    <Loader>{args.children}</Loader>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Please wait while we load your information.',
};
