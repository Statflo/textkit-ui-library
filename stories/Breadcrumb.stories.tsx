import React from 'react';
import Breadcrumb, { BreadcrumbGroup } from '../src/components/Breadcrumb';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  subComponent: { BreadcrumbGroup },
};

const Template = (args: any) => (
  <Breadcrumb {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Breadcrumb',
  isFinal: true,
}

export const Group = () => (
  <BreadcrumbGroup>
    <Breadcrumb label="Level 1" isFinal={false} />
    <Breadcrumb label="Level 2" isFinal={false} />
    <Breadcrumb label="Level 3" isFinal={false} />
    <Breadcrumb label="Level 4" isFinal={true} />
  </BreadcrumbGroup>
);
