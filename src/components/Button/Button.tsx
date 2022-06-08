import React from 'react';

import { classNames } from '../../utils/classnames';
import Icon, { iconPaths } from '../Icon/Icon';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;

  active?: boolean;
  disabled?: boolean;
  icon?: {
    name: keyof typeof iconPaths;
    position: 'leading' | 'trailing' | 'only';
  };
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({
  children,
  active = false,
  disabled = false,
  fullWidth = false,
  icon,
  label,
  size = 'medium',
  variant = 'primary',
  className,
  ...otherProps
}: Props) => {
  return (
    <button
      aria-label={label}
      className={classNames(
        'items-center rounded-md flex font-medium gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-default select-none',
        icon?.position === 'only'
          ? size === 'small'
            ? 'px-1'
            : size === 'medium'
            ? 'px-2'
            : 'px-3'
          : 'px-4',
        size === 'small' && 'h-6',
        size === 'medium' && 'h-8',
        size === 'large' ? 'text-base h-10' : 'text-sm',
        variant === 'primary' &&
          (active
            ? 'bg-primary-d2 text-white'
            : 'bg-primary text-white disabled:bg-primary-l1 hover-not-disabled:bg-primary-d1'),
        variant === 'secondary' &&
          (active
            ? 'bg-primary-d1/15 border border-primary-d2 text-primary-d2'
            : 'bg-white border border-primary text-primary disabled:border-primary-l1 disabled:text-primary-l1 hover-not-disabled:bg-primary-d1/10 hover-not-disabled:border-primary-d2 hover-not-disabled:text-primary-d1'),
        variant === 'tertiary' &&
          (active
            ? 'bg-primary-d1/15 text-primary-d2'
            : 'text-primary disabled:text-primary-l1 hover-not-disabled:bg-primary-d1/10 hover-not-disabled:text-primary-d1'),
        fullWidth ? 'w-full' : '',
        className ?? ''
      )}
      disabled={disabled}
      {...otherProps}
    >
      {(icon?.position === 'leading' || icon?.position === 'only') && (
        <Icon
          color={
            variant === 'primary'
              ? 'white'
              : variant === 'secondary'
              ? 'primary'
              : 'lightGrey'
          }
          icon={icon.name}
          size="small"
        />
      )}
      {icon?.position !== 'only' && label}
      {icon?.position === 'trailing' && (
        <Icon
          color={
            variant === 'primary'
              ? 'white'
              : variant === 'secondary'
              ? 'primary'
              : 'lightGrey'
          }
          icon={icon.name}
          size="small"
        />
      )}
    </button>
  );
};

export default Button;
