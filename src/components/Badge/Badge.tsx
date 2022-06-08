import React from 'react';

import { classNames } from '../../utils/classnames';

interface BadgeProps {
  /** The badge's kind  */
  kind?: 'filled' | 'inverse';
  /** The display text */
  text: string;
  /** The badge's type */
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
}

// TODO: Hopefully get the non filled background colours into the colour styles
const Badge = ({ kind = 'filled', text, type = 'primary' }: BadgeProps) => (
  <div
    className={classNames(
      'rounded-lg text-12 font-semibold tracking-[0.02em] py-px px-1.5 w-fit',
      type === 'primary' &&
        (kind === 'filled'
          ? 'bg-primary text-white'
          : 'bg-[#C9D1F3] text-primary-d2'),
      type === 'secondary' &&
        (kind === 'filled' ? 'bg-background-spacer text-main-l2' : ''),
      type === 'success' &&
        (kind === 'filled'
          ? 'bg-success text-white'
          : 'bg-[#CCDFD2] text-success'),
      type === 'info' &&
        (kind === 'filled' ? 'bg-info text-white' : 'bg-[#C9D7FE] text-info'),
      type === 'warning' &&
        (kind === 'filled'
          ? 'bg-warning-l1 text-main'
          : 'bg-[#FFE6DA] text-warning'),
      type === 'error' &&
        (kind === 'filled' ? 'bg-error text-white' : 'bg-[#F1CBC8] text-error')
    )}
  >
    {text}
  </div>
);

export default Badge;
