import React from 'react';

interface BreadcrumbItemProps {
  /** Should the item be clickable - this should be received from the BreadcrumbBar */
  isClickable?: boolean;
  label: string;
  onClick?: () => void;
}

const BreadcrumbItem = ({
  isClickable = false,
  label,
  onClick = undefined,
}: BreadcrumbItemProps) => (
  <button
    className="text-16 text-main-l2 font-semibold hover-not-disabled:text-[#6177DE]"
    disabled={!isClickable}
    onClick={onClick}
  >
    {label}
  </button>
);

export default BreadcrumbItem;
