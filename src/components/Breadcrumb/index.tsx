import React from 'react';

import Icon from '../Icon/Icon';

interface BreadcrumbProps {
  isFinal?: boolean;
  label: string;
  onClick?: () => void;
}

const Breadcrumb = ({
  isFinal = true,
  label,
  onClick = undefined,
}: BreadcrumbProps) => (
  <div className="flex gap-1 h-9">
    <button
      className="text-24 text-[#314DCC] font-bold hover-not-disabled:text-[#6177DE]"
      disabled={isFinal}
      onClick={onClick}
    >
      {label}
    </button>
    {!isFinal && (
      <span className="pt-3 pb-2">
        <Icon color="grey" icon="caret-right" size="small" />
      </span>
    )}
  </div>
);

export * from './BreadcrumbGroup';
export default Breadcrumb;
