import React from 'react';

import { classNames } from '../../utils/classnames';
import Icon from '../Icon/Icon';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  feedback?: {
    status: 'success' | 'warning' | 'error' | 'neutral';
    message: string;
  };
  label?: string;
}

const Input = ({
  disabled,
  feedback,
  onChange,
  label,
  name,
  placeholder,
  required,
  type,
  value,
}: InputProps) => (
  <div className="flex flex-col gap-1 h-22">
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
    <input
      className={classNames(
        'border rounded-md text-main text-16 py-2.5 px-3 placeholder:text-main-l3 focus:border-primary-d2 disabled:background-secondary disabled:text-main-l3',
        feedback?.status === 'success'
          ? 'bg-success-l2 border-success-l1'
          : feedback?.status === 'warning'
          ? 'bg-warning-l2 border-success-l1'
          : feedback?.status === 'error'
          ? 'bg-error-l2 border-error'
          : disabled
          ? 'background-secondary'
          : 'bg-background border-background-spacer'
      )}
      disabled={disabled}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    <div className="items-center flex gap-1.5">
      {feedback && (
        <>
          {feedback.status !== 'neutral' && (
            <Icon
              color={feedback.status}
              icon={
                feedback.status === 'success'
                  ? 'check-circle'
                  : feedback.status === 'warning'
                  ? 'warning'
                  : 'exclamation'
              }
              size="small"
            />
          )}
          <span
            className={classNames(
              'text-14',
              feedback.status === 'success'
                ? 'text-success'
                : feedback.status === 'warning'
                ? 'text-warning'
                : feedback.status === 'error'
                ? 'text-error'
                : 'text-main-l2'
            )}
          >
            {feedback.message}
          </span>
        </>
      )}
    </div>
  </div>
);

export default Input;
