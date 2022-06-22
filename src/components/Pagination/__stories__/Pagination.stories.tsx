import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import Pagination, { PaginationProps } from '../Pagination';

export default {
  title: 'Data Display/Pagination',
  component: Pagination,
  argTypes: {
    canPreviousPage: {
      control: {
        disable: true,
      },
    },
    canNextPage: {
      control: {
        disable: true,
      },
    },
    previousPage: { action: 'previousPage' },
    nextPage: { action: 'nextPage' },
    gotoPage: { action: 'gotoPage' },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args: PaginationProps) => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <Pagination
      {...args}
      pageIndex={pageIndex}
      canPreviousPage={pageIndex !== 0}
      canNextPage={pageIndex !== args.pageCount - 1}
      previousPage={() => {
        // @ts-ignore
        args.previousPage({ pageIndex: pageIndex - 1 });
        setPageIndex((prevIndex) => prevIndex - 1);
      }}
      nextPage={() => {
        // @ts-ignore
        args.nextPage({ pageIndex: pageIndex + 1 });
        setPageIndex((prevIndex) => prevIndex + 1);
      }}
      gotoPage={(i) => {
        // @ts-ignore
        args.gotoPage({ pageIndex: i });
        setPageIndex(i);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  pageIndex: 0,
  pageCount: 7,
};
