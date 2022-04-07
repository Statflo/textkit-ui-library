import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export default function TextAreaInput({
  error = false,
  className,
  ...otherProps
}: Props) {
  return (
    <textarea
      rows={2}
      className={classNames(
        'tk-w-full tk-border tk-text-sm tk-font-medium tk-rounded-md tk-px-3 tk-py-2 placeholder:tk-text-main-l2 tk-bg-white',
        error
          ? 'tk-bg-error-l2 tk-border-error-default tk-text-main-default'
          : 'tk-text-main-default tk-border-gray-spacer',
        className ?? ''
      )}
      {...otherProps}
    />
  );
}
