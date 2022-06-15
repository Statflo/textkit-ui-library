import { motion } from 'framer-motion';
import React from 'react';

import { classNames } from '../../utils/classnames';

interface PaginationOptionProps {
  active?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  key?: string;
  onClick: () => void;
}

export interface PaginationProps {
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  gotoPage: (pageIndex: number) => void;
  pageCount: number;
  pageIndex: number;
}

const PaginationOption = ({
  active,
  children,
  disabled,
  key,
  onClick,
}: PaginationOptionProps) => (
  <button
    className={classNames(
      'text-text-l1 text-base mx-3 my-0 min-w-4 text-center disabled:text-main-l3',
      active ? 'font-semibold' : 'pb-0.5'
    )}
    disabled={disabled}
    key={key}
    onClick={onClick}
  >
    {children}
    {active ? (
      <motion.div
        className="border-b-2 border-primary w-full"
        layoutId="underline"
      />
    ) : null}
  </button>
);

const Pagination = ({
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  gotoPage,
  pageCount,
  pageIndex,
}: PaginationProps) => {
  const pageOptions = [];

  for (let i = 0; i < pageCount; i++) {
    pageOptions.push(
      <PaginationOption
        active={pageIndex === i}
        key={i.toString()}
        onClick={() => gotoPage(i)}
      >
        {i + 1}
      </PaginationOption>
    );
  }

  return (
    <div className="items-center flex justify-end h-14 px-8 py-0">
      {pageCount > 1 && (
        <>
          <PaginationOption
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
          >
            Previous
          </PaginationOption>
          {pageOptions}
          <PaginationOption disabled={!canNextPage} onClick={() => nextPage()}>
            Next
          </PaginationOption>
        </>
      )}
    </div>
  );
};

export default Pagination;
