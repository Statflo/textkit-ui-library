import React from 'react';

import { classNames } from '../../utils/classnames';

type Props = React.HtmlHTMLAttributes<HTMLSpanElement>;

export default function InputError({
  children,
  className,
  ...otherProps
}: Props) {
  return (
    <span
      className={classNames(
        'tk-block tk-text-sm tk-text-error-default tk-text-left tk-font-medium',
        className ?? ''
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
}
