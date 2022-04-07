import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export default function Label({
  children,
  className,
  required = false,
  ...otherProps
}: Props) {
  return (
    <label
      className={classNames(
        'tk-block tk-text-sm tk-text-main-default tk-text-left tk-font-medium',
        className ?? ''
      )}
      {...otherProps}
    >
      {children}
      {required && (
        <span className="tk-ml-1 tk-text-xs tk-text-error-default">*</span>
      )}
    </label>
  );
}
