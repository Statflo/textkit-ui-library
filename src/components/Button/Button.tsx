import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  large?: boolean;
  reversed?: boolean;
  secondary?: boolean;
  small?: boolean;
}

const Button = ({
  children,
  fullWidth = false,
  large = false,
  reversed = false,
  secondary = false,
  small = false,
  className,
  ...otherProps
}: Props) => {
  return (
    <button
      className={classNames(
        'tk-px-3 tk-font-medium tk-rounded focus:tk-outline-none focus:tk-ring-2 focus:tk-ring-offset-2 focus:tk-ring-primary-default tk-select-none disabled:tk-opacity-50',
        large ? 'tk-text-base tk-leading-6' : 'tk-text-sm tk-leading-4',
        small ? 'tk-h-6' : large ? 'tk-h-10' : 'tk-h-8',
        reversed
          ? 'tk-bg-white tk-border tk-border-transparent tk-text-primary-default hover:tk-text-primary-hover hover:tk-bg-gray-hover'
          : secondary
          ? 'tk-bg-white tk-border tk-border-primary-default tk-text-primary-default hover:tk-bg-primary-active hover:tk-bg-opacity-20'
          : 'tk-text-white tk-border tk-border-transparent tk-bg-primary-default hover:tk-bg-primary-hover',
        fullWidth ? 'tk-w-full' : '',
        className ?? ''
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
