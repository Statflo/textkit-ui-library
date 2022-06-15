import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import WidgetError, { WidgetErrorProps } from '../WidgetError';

export default { title: 'Components/Widget Error' } as ComponentMeta<
  typeof WidgetError
>;

const Template: ComponentStory<typeof WidgetError> = (
  args: WidgetErrorProps
) => (
  <div className="w-96">
    <WidgetError>{args.children}</WidgetError>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'You have a widget error',
};

export const WithRefreshFunction = () => {
  return (
    <div className="w-96">
      <WidgetError onRefresh={() => null}>You have a widget error</WidgetError>
    </div>
  );
};
