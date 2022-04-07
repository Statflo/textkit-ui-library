import React from 'react';

import Refresh from '../icons/Refresh';
import Warning from '../icons/Warning';

interface Props {
  children: React.ReactNode;
  refreshLabel?: string;
  onRefresh?: VoidFunction;
}

export default function WidgetError({
  children,
  refreshLabel = 'Reload Widget',
  onRefresh,
}: Props) {
  return (
    <div className="tk-flex tk-items-center tk-justify-center tk-flex-col tk-py-20 tk-space-y-7">
      <div className="tk-flex tk-items-center tk-justify-center tk-flex-col tk-text-warning-l1 tk-space-y-2">
        <Warning className="tk-h-8 tk-w-8" />
        <div className="tk-font-medium tk-text-main-default tk-leading-5 tk-text-center">
          {children}
        </div>
      </div>
      {onRefresh && (
        <button className="tk-text-primary-default tk-flex tk-items-center tk-justify-center tk-text-sm tk-space-x-1">
          <Refresh className="tk-w-4 tk-h-4" />
          <span>{refreshLabel}</span>
        </button>
      )}
    </div>
  );
}
