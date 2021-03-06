import React from 'react';

import { classNames } from '../../utils/classnames';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export default function Label({
  children,
  className,
  required = false,
  ...otherProps
}: LabelProps) {
  return (
    <label
      className={classNames(
        'block text-sm text-main-default text-left font-medium',
        className ?? ''
      )}
      {...otherProps}
    >
      {children}
      {required && <span className="ml-1 text-xs text-error-default">*</span>}
    </label>
  );
}
