import React from 'react';
import BreadcrumbBar from '../src/components/BreadcrumbBar/BreadcrumbBar';
import BreadcrumbItem from '../src/components/BreadcrumbBar/BreadcrumbItem/BreadcrumbItem';

import { Default as BreadcrumbItemStory } from './BreadcrumbItem.stories';

export default {
  title: 'Components/BreadcrumbBar/BreadcrumbBar',
  component: BreadcrumbBar,
};

const Template = ({ items, ...args}) => (
  <BreadcrumbBar>
    {items.map((item) => (
      <BreadcrumbItem {...item} />
    ))}
  </BreadcrumbBar>
);

export const Default = Template.bind({});
Default.args = {
  items: [{
    ...BreadcrumbItemStory.args,
    label: 'Home',
  }, {
    ...BreadcrumbItemStory.args,
    label: 'Alberta',
  }, {
    ...BreadcrumbItemStory.args,
    label: 'Inuvik District',
  }, {
    ...BreadcrumbItemStory.args,
    label: 'Concha Store',
  }]
}

