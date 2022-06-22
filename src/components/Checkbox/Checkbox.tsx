import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

import { classNames } from '../../utils/classnames';

export interface CheckboxProps {
  ariaLabel?: string;
  checked: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  indeterminate?: boolean;
  label: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CheckProps {
  indeterminate?: boolean;
}

const variants = {
  checked: {
    pathLength: 1,
    transition: {
      duration: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
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

const Check = ({ indeterminate = false }: CheckProps) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <svg
      className="fill-transparent absolute stroke-white"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={indeterminate ? 'M4 8H11.5' : 'M3 10.5L6 13.5L13.5 3'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={{ pathLength, opacity }}
        variants={variants}
      />
    </svg>
  );
};

const Checkbox = ({
  ariaLabel,
  checked,
  className,
  defaultChecked,
  disabled = false,
  id,
  indeterminate = false,
  label,
  name,
  onChange,
}: CheckboxProps) => (
  <motion.label
    className={classNames(
      'group items-center flex gap-3 relative select-none',
      disabled ? 'text-main-l3' : 'text-main hover:cursor-pointer',
      className ?? ''
    )}
    animate={checked ? 'checked' : 'unchecked'}
    whileTap={!disabled ? 'tap' : undefined}
  >
    <motion.input
      aria-label={ariaLabel}
      checked={checked}
      className={classNames(
        'appearance-none bg-white border border-background-spacer rounded-sm h-4 w-4 checked:bg-primary checked:border-primary hover-not-disabled:cursor-pointer hover-not-disabled:checked:bg-primary-d1 hover-not-disabled:checked:border-primary-d1 disabled:checked:bg-[#AEB8EA] disabled:checked:border-[#AEB8EA] disabled:bg-background-secondary',
        !disabled &&
          'group-hover:cursor-pointer group-hover:border-main-l2 group-hover:checked:bg-primary-d1 group-hover:checked:border-primary-d1'
      )}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      type="checkbox"
      variants={variants}
    />
    <Check indeterminate={indeterminate} />
    {label}
  </motion.label>
);

export default Checkbox;
