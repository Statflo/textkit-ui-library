import React from 'react';
import BreadcrumbItem from '../src/components/BreadcrumbBar/BreadcrumbItem/BreadcrumbItem';

export default {
  title: 'Components/BreadcrumbBar/BreadcrumbItem',
  component: BreadcrumbItem,
};

const Template = (args: any) => (
  <BreadcrumbItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Breadcrumb Label',
};

export const Clickable = Template.bind({});
Clickable.args = {
  label: 'Breadcrumb Label',
  isClickable: true,
};
