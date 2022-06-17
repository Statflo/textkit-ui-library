import React from 'react';

import { classNames } from '../../../utils/classnames';

interface SortArrowsProps {
  isSorted?: boolean;
  isSortedDesc?: boolean;
}

export const SortArrows = ({
  isSorted = false,
  isSortedDesc = false,
}: SortArrowsProps) => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 12 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {(!isSorted || !isSortedDesc) && (
      <path
        className={classNames(isSorted ? 'stroke-primary' : 'stroke-main-l3')}
        d="M2.25 6.5L5.82333 2.927C5.84652 2.90378 5.87406 2.88536 5.90437 2.87279C5.93469 2.86022 5.96718 2.85375 6 2.85375C6.03282 2.85375 6.06531 2.86022 6.09563 2.87279C6.12594 2.88536 6.15348 2.90378 6.17667 2.927L9.75 6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
    {(!isSorted || isSortedDesc) && (
      <path
        className={classNames(isSorted ? 'stroke-primary' : 'stroke-main-l3')}
        d="M9.75 11.5L6.17667 15.073C6.15348 15.0962 6.12594 15.1146 6.09563 15.1272C6.06531 15.1398 6.03282 15.1463 6 15.1463C5.96718 15.1463 5.93469 15.1398 5.90437 15.1272C5.87406 15.1146 5.84652 15.0962 5.82333 15.073L2.25 11.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);
