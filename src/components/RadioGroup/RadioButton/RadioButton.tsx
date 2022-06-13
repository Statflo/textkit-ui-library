import { motion } from 'framer-motion';
import React from 'react';

import { classNames } from '../../../utils/classnames';

export interface RadioButtonProps {
  ariaLabel?: string;
  checked?: boolean;
  className?: string;
  default?: boolean;
  disabled?: boolean;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const variants = {
  checked: {
    r: 4,
    fill: 'white',
    transition: {
      duration: 0.2,
    },
  },
  unchecked: {
    r: 1,
    fill: 'transparent',
    transition: {
      duration: 0,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.1,
    },
  },
};

const Check = () => (
  <svg
    className="absolute"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.circle cx="8" cy="8" variants={variants} />
  </svg>
);

const RadioButton = ({
  ariaLabel,
  checked = false,
  className,
  disabled = false,
  label,
  name,
  onChange,
  value,
}: RadioButtonProps) => (
  <motion.label
    className={classNames(
      'group items-center flex gap-3 relative select-none',
      disabled ? 'text-main-l3' : 'text-main hover:cursor-pointer',
      className ?? ''
    )}
    animate={checked ? 'checked' : 'unchecked'}
    whileTap={!checked && !disabled ? 'tap' : undefined}
  >
    <motion.input
      aria-label={ariaLabel}
      checked={checked}
      className={classNames(
        'appearance-none bg-white border border-background-spacer rounded-lg h-4 w-4 checked:bg-primary checked:border-primary hover-not-disabled:cursor-pointer hover-not-disabled:checked:bg-primary-d1 hover-not-disabled:checked:border-primary-d1 disabled:checked:bg-[#AEB8EA] disabled:checked:border-[#AEB8EA] disabled:bg-background-secondary',
        !disabled &&
          'group-hover:cursor-pointer group-hover:border-main-l2 group-hover:checked:bg-primary-d1 group-hover:checked:border-primary-d1'
      )}
      disabled={disabled}
      name={name}
      onChange={onChange}
      type="radio"
      value={value}
      variants={variants}
    />
    <Check />
    {label}
  </motion.label>
);

export default RadioButton;
