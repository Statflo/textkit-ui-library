import React from 'react';

import { classNames } from '../../utils/classnames';

import iconPaths from './icons';

export interface IconProps {
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
    | 'info'
    | 'current';
  icon: keyof typeof iconPaths;
  size?: 'small' | 'medium' | 'large' | number;
}

const Icon = ({
  active = false,
  className,
  color = 'primary',
  icon,
  size = 'medium',
}: IconProps) => (
  <svg
    className={classNames(
      color === 'current' && 'fill-current',
      className ?? ''
    )}
    height={
      size === 'small'
        ? '12'
        : size === 'medium'
        ? '16'
        : size === 'large'
        ? '20'
        : size
    }
    width={
      size === 'small'
        ? '12'
        : size === 'medium'
        ? '16'
        : size === 'large'
        ? '20'
        : size
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
        key={path}
      />
    ))}
  </svg>
);

export { iconPaths };
export default Icon;
