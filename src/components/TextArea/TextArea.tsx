import React from 'react';

import { classNames } from '../../utils/classnames';
import Icon from '../Icon/Icon';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  onChange: (e: React.ChangeEvent) => void;
  label?: string;
  name: string;
  placeholder?: string;
  rows?: number;
  validation?: {
    status: 'success' | 'warning' | 'error' | 'neutral';
    text: string;
  };
  value?: string;
}

export default function TextArea({
  disabled = false,
  onChange,
  label,
  name,
  placeholder = 'Placeholder',
  rows = 2,
  required = false,
  validation,
  value,
  ...otherProps
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <div className="items-center flex justify-between">
          <label className="text-main text-14 font-semibold" htmlFor={name}>
            {label}
          </label>
          {!required && (
            <span className="text-10 text-main-l3 uppercase">(Optional)</span>
          )}
        </div>
      )}
      <textarea
        className={classNames(
          'border rounded-md text-main text-16 py-2.5 pr-5 pl-3 placeholder:text-main-l3 hover-not-disabled:border-primary-d1 focus:border-primary-d2 focus-visible:outline-0 disabled:background-secondary disabled:text-main-l3',
          validation?.status === 'success'
            ? 'bg-success-l2 border-success-l1'
            : validation?.status === 'warning'
            ? 'bg-warning-l2 border-warning-l1'
            : validation?.status === 'error'
            ? 'bg-error-l2 border-error'
            : disabled
            ? 'background-secondary'
            : 'bg-background border-background-spacer'
        )}
        disabled={disabled}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        {...otherProps}
      />
      <div className="items-center flex gap-1.5 h-4">
        {validation && (
          <>
            {validation.status !== 'neutral' && (
              <Icon
                color={validation.status}
                icon={
                  validation.status === 'success'
                    ? 'check-circle'
                    : validation.status === 'warning'
                    ? 'warning'
                    : 'exclamation'
                }
                size="small"
              />
            )}
            <span
              className={classNames(
                'text-14',
                validation.status === 'success'
                  ? 'text-success'
                  : validation.status === 'warning'
                  ? 'text-warning'
                  : validation.status === 'error'
                  ? 'text-error'
                  : 'text-main-l2 pl-2'
              )}
            >
              {validation.text}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
