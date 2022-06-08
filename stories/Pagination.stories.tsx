import React, { useState } from 'react';
import Pagination from '../src/components/Pagination';

export default {
  title: "Pagination",
  component: Pagination,
  argTypes: {
    canPreviousPage: {
      control: {
        disable: true,
      }
    },
    canNextPage: {
      control: {
        disable: true,
      }
    },
    previousPage: { action: 'previousPage' },
    nextPage: { action: 'nextPage' },
    gotoPage: { action: 'gotoPage' },
  }
};

const Template = (args: any) => {
  const [pageIndex, setPageIndex] = useState(args.value ?? 0);

  return (
    <Pagination
      {...args}
      pageIndex={pageIndex}
      canPreviousPage={pageIndex !== 0}
      canNextPage={pageIndex !== args.pageCount - 1}
      previousPage={() => {
        args.previousPage({ pageIndex: pageIndex - 1 });
        setPageIndex(prevIndex => prevIndex - 1);
      }}
      nextPage={() => {
        args.nextPage({ pageIndex: pageIndex + 1 });
        setPageIndex(prevIndex => prevIndex + 1);
      }}
      gotoPage={(i) => {
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