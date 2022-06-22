import React from 'react';
import { Column, usePagination, useSortBy, useTable } from 'react-table';

import { classNames } from '../../utils/classnames';
import Pagination from '../Pagination/Pagination';
import Tooltip from '../Tooltip/Tooltip';

import { SortArrows } from './SortArrows/SortArrows';

export interface TableProps<T> {
  columns: Column[];
  data: T[];
  defaultPageSize?: number;
  useFooterAsSubHeader?: boolean;
}

const Table = <T,>({
  columns,
  data,
  defaultPageSize = 10,
  useFooterAsSubHeader = false,
}: TableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    prepareRow,

    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: defaultPageSize },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="bg-white border border-background-spacer rounded-md w-full">
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((group) => (
            <tr
              {...group.getHeaderGroupProps()}
              className="border-b border-background-spacer flex justify-between"
            >
              {group.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps)}
                  className={classNames(
                    'items-center text-10 text-main-l2 font-regular flex gap-1 h-14 tracking-wide min-w-24 px-3 py-0 relative select-none',
                    column.border && 'border-r border-background-spacer',
                    column.large
                      ? 'flex-8 justify-start w-full'
                      : 'flex-1 justify-end'
                  )}
                >
                  {column?.tooltipText ? (
                    <Tooltip text={column.tooltipText}>
                      <div
                        className={classNames(
                          'items-center flex gap-1 h-full w-full',
                          column.large ? 'justify-start' : 'justify-end'
                        )}
                      >
                        <span>{column.render('Header')}</span>
                        <SortArrows
                          isSorted={column.isSorted}
                          isSortedDesc={column.isSortedDesc}
                        />
                      </div>
                    </Tooltip>
                  ) : (
                    <>
                      <span>{column.render('Header')}</span>
                      <SortArrows
                        isSorted={column.isSorted}
                        isSortedDesc={column.isSortedDesc}
                      />
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
          {useFooterAsSubHeader &&
            footerGroups.map((group) => (
              <tr
                {...group.getFooterProps()}
                className="border-b border-background-spacer flex justify-between"
              >
                {group.headers.map((column) => (
                  <th
                    {...column.getFooterProps()}
                    className={classNames(
                      'items-center bg-background-navigation text-main flex text-base font-semibold h-14 tracking-wide min-w-24 px-3 py-0',
                      column.border && 'border-r border-background-spacer',
                      column.large
                        ? 'flex-8 justify-start w-full'
                        : 'flex-1 justify-end'
                    )}
                  >
                    {column.render('Footer')}
                  </th>
                ))}
              </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="border-b border-background-spacer flex justify-between"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className={classNames(
                      'items-center flex text-base h-12 tracking-wide min-w-24 px-3 py-0',
                      cell.column.border && 'border-r border-background-spacer',
                      cell.column.highlight
                        ? 'bg-background-navigation text-main font-semibold'
                        : 'text-main-l2',
                      cell.column.large
                        ? 'flex-8 justify-start w-full'
                        : 'flex-1 justify-end'
                    )}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        previousPage={previousPage}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>
  );
};

export default Table;
