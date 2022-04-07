import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props {
  children: React.ReactNode;
  type?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

export default function Segment({ children, type = 'default' }: Props) {
  return (
    <div
      className={classNames(
        'tk-inline-block tk-text-xs tk-font-medium tk-leading-4 tk-px-1 tk-h-4 tk-rounded tk-whitespace-nowrap tk-overflow-hidden tk-select-none',
        type === 'default' ? 'tk-bg-gray-spacer tk-text-main-default' : '',
        type === 'success' ? 'tk-bg-success-l2 tk-text-success-default' : '',
        type === 'warning' ? 'tk-bg-warning-l2 tk-text-warning-default' : '',
        type === 'danger' ? 'tk-bg-error-l2 tk-text-error-default' : '',
        type === 'info' ? 'tk-bg-info-l2 tk-text-info-default' : ''
      )}
    >
      {children}
    </div>
  );
}
