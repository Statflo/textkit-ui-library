import React from 'react';

import { classNames } from '../../utils/classnames';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  children,
  className,
  ...otherProps
}: Props) {
  return (
    <div className="tk-flex tk-items-start tk-flex-col">
      <div className="tk-flex tk-items-start tk-flex-row">
        <label
          htmlFor={otherProps.id}
          className="tk-flex tk-items-center tk-text-left tk-cursor-pointer tk-space-x-2"
        >
          <input
            id={otherProps.id}
            type="checkbox"
            className={classNames(
              'tk-w-4 tk-h-4 tk-rounded-sm tk-border tk-border-gray-spacer tk-appearance-none',
              'checked:tk-bg-primary-default checked:tk-border-primary-default checked:tk-text-white',
              'checked:after:tk-content-["✓"] checked:after:tk-font-bold checked:after:tk-relative checked:after:tk-text-xs',
              'checked:after:tk-text-xs checked:after:tk-top-[-6px] checked:after:tk-left-[1px]',
              'disabled:tk-opacity-50 disabled:tk-bg-gray-spacer',
              className ?? ''
            )}
            {...otherProps}
          />
          <span className="tk-inline-block tk-text-sm tk-font-medium tk-text-main-default">
            {children}
          </span>
        </label>
      </div>
    </div>
  );
}
