import React from 'react';

import { classNames } from '../../utils/classnames';
import Icon, { iconPaths } from '../Icon';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;

  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: {
    name: keyof typeof iconPaths;
    position: 'leading' | 'trailing' | 'only';
  };
  label?: string;
  active?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  fullWidth = false,
  size = 'medium',
  variant = 'primary',
  icon,
  label,
  active = false,
  disabled = false,
  className,
  ...otherProps
}: Props) => {
  return (
    <button
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
        variant === 'primary' && active
          ? 'bg-primary-d2 text-white'
          : 'bg-primary text-white disabled:bg-primary-l1 hover:bg-primary-d1',
        variant === 'secondary' &&
          'bg-white border border-primary text-primary active:border-primary-d2 active:text-primary-d2 disabled:border-primary-l1 disabled:text-primary-l1 hover:border-primary-d2 hover:text-primary-d1',
        variant === 'tertiary' &&
          'text-primary active:text-primary-d2 disabled:text-primary-l1 hover:text-primary-d1',
        fullWidth ? 'w-full' : '',
        className ?? ''
      )}
      disabled={disabled}
      {...otherProps}
    >
      {icon && (icon.position === 'leading' || icon.position === 'only') && (
        <Icon color="white" icon={icon.name} size="small" />
      )}
      {label}
      {icon && icon.position === 'trailing' && (
        <Icon color="white" icon={icon.name} size="small" />
      )}
    </button>
  );
};

export default Button;
