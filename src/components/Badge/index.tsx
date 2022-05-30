import React from 'react';

import { classNames } from '../../utils/classnames';

interface BadgeProps {
  isFilled?: boolean;
  label: string;
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
}

// TODO: Hopefully get the non filled background colours into the colour styles
const Badge = ({ isFilled = true, label, type = 'primary' }: BadgeProps) => (
  <div
    className={classNames(
      'rounded-lg text-12 font-semibold tracking-[0.02em] py-px px-1.5 w-fit',
      type === 'primary' &&
        (isFilled ? 'bg-primary text-white' : 'bg-[#C9D1F3] text-primary-d2'),
      type === 'secondary' &&
        (isFilled ? 'bg-background-spacer text-main-l2' : ''),
      type === 'success' &&
        (isFilled ? 'bg-success text-white' : 'bg-[#CCDFD2] text-success'),
      type === 'info' &&
        (isFilled ? 'bg-info text-white' : 'bg-[#C9D7FE] text-info'),
      type === 'warning' &&
        (isFilled ? 'bg-warning-l1 text-main' : 'bg-[#FFE6DA] text-warning'),
      type === 'error' &&
        (isFilled ? 'bg-error text-white' : 'bg-[#F1CBC8] text-error')
    )}
  >
    {label}
  </div>
);

export default Badge;
