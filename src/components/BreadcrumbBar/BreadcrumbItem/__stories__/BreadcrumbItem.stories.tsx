import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import BreadcrumbItem, { BreadcrumbItemProps } from '../BreadcrumbItem';

export default {
  title: 'Components/BreadcrumbBar/BreadcrumbItem',
  component: BreadcrumbItem,
} as ComponentMeta<typeof BreadcrumbItem>;

const Template: ComponentStory<typeof BreadcrumbItem> = (
  args: BreadcrumbItemProps
) => <BreadcrumbItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Breadcrumb Label',
};

export const Clickable = Template.bind({});
Clickable.args = {
  label: 'Breadcrumb Label',
  isClickable: true,
};
