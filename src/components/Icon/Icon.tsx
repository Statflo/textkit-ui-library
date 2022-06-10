import React from 'react';

import { classNames } from '../../utils/classnames';

import iconPaths from './icons';

interface IconProps {
  active?: boolean;
  className?: string;
  color?:
    | 'primary'
    | 'white'
    | 'grey'
    | 'lightGrey'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  icon: keyof typeof iconPaths;
  size?: 'xxSmall' | 'xSmall' | 'small' | 'medium' | 'large';
}

const Icon = ({
  active = false,
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
          color === 'primary' && 'fill-primary group-disabled:fill-primary-l1',
          color === 'white' && 'fill-white',
          color === 'grey' &&
            (active
              ? 'fill-primary-d2'
              : 'fill-main-l2 group-hover-not-disabled:fill-primary-d1 group-disabled:fill-main-l3'),
          color === 'lightGrey' &&
            (active
              ? 'fill-primary'
              : 'fill-main-l3 group-hover-not-disabled:fill-primary'),
          color === 'success' && 'fill-success',
          color === 'warning' && 'fill-warning-l1',
          color === 'error' && 'fill-error',
          color === 'info' && 'fill-info',
          className ?? ''
        )}
        fillRule="evenodd"
        clipRule="evenodd"
        d={path}
        fill={color}
        key={path}
      />
    ))}
  </svg>
);

export { iconPaths };
export default Icon;
