import React from 'react';

import { classNames } from '../../utils/classnames';

import iconPaths from './icons';

interface IconProps {
  className?: string;
  color?:
    | 'primary'
    | 'white'
    | 'grey'
    | 'lightGrey'
    | 'info'
    | 'success'
    | 'error'
    | 'warning';
  icon: keyof typeof iconPaths;
  size?: 'xxSmall' | 'xSmall' | 'small' | 'medium' | 'large';
}

const Icon = ({
  className,
  color = 'primary',
  icon,
  size = 'medium',
}: IconProps) => (
  <svg
    className={className}
    height={
      size === 'xxSmall'
        ? '8'
        : size === 'xSmall'
        ? '12'
        : size === 'small'
        ? '16'
        : size === 'medium'
        ? '18'
        : '20'
    }
    width={
      size === 'xxSmall'
        ? '8'
        : size === 'xSmall'
        ? '12'
        : size === 'small'
        ? '16'
        : size === 'medium'
        ? '18'
        : '20'
    }
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    {iconPaths[icon].map((path) => (
      <path
        className={classNames(
          color === 'primary' && 'fill-primary',
          color === 'white' && 'fill-white',
          color === 'grey' &&
            'fill-main-l2 group-hover-not-disabled:fill-primary-d1',
          color === 'lightGrey' &&
            'fill-main-l3 group-hover-not-disabled:fill-primary',
          color === 'info' && 'fill-info',
          color === 'success' && 'fill-success',
          color === 'error' && 'fill-error',
          color === 'warning' && 'fill-warning-l1',
          className ?? ''
        )}
        fillRule="evenodd"
        clipRule="evenodd"
        d={path}
        fill={color}
      />
    ))}
  </svg>
);

export { iconPaths };
export default Icon;
