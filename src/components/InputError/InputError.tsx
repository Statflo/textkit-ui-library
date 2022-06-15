import React from 'react';

import { classNames } from '../../utils/classnames';

export type InputErrorProps = React.HtmlHTMLAttributes<HTMLSpanElement>;

export default function InputError({
  children,
  className,
  ...otherProps
}: InputErrorProps) {
  return (
    <span
      className={classNames(
        'block text-sm text-error-default text-left font-medium',
        className ?? ''
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
}
