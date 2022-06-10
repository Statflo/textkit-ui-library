import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import BreadcrumbBar from '../BreadcrumbBar';
import BreadcrumbItem from '../BreadcrumbItem/BreadcrumbItem';
import { Default as BreadcrumbItemStory } from '../BreadcrumbItem/__stories__/BreadcrumbItem.stories';

export default {
  title: 'Components/BreadcrumbBar/BreadcrumbBar',
  component: BreadcrumbBar,
} as ComponentMeta<typeof BreadcrumbBar>;

// @ts-ignore
const Template: ComponentStory<typeof BreadcrumbBar> = ({ items, ...args }) => (
  <BreadcrumbBar>
    {items.map((item: any) => (
      <BreadcrumbItem {...item} />
    ))}
  </BreadcrumbBar>
);

export const Default = Template.bind({});
Default.args = {
  // @ts-ignore
  items: [
    {
      ...BreadcrumbItemStory.args,
      label: 'Home',
    },
    {
      ...BreadcrumbItemStory.args,
      label: 'Alberta',
    },
    {
      ...BreadcrumbItemStory.args,
      label: 'Inuvik District',
    },
    {
      ...BreadcrumbItemStory.args,
      label: 'Concha Store',
    },
  ],
};
