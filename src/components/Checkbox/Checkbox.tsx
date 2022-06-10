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
  onChange: () => void;
}

interface CheckProps {
  checked: boolean;
  indeterminate?: boolean;
}

const variants = {
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
};

const Check = ({ checked, indeterminate = false }: CheckProps) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.svg
      animate={checked ? 'checked' : 'unchecked'}
      className="fill-transparent absolute left-0.5 stroke-white"
      width="12"
      height="12"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={indeterminate ? 'M3 8H13' : 'M1 11L5 15L15 1'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={{ pathLength, opacity }}
        transition={{ duration: 0.2 }}
        variants={variants}
      />
    </motion.svg>
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
  <label
    className={classNames(
      'group items-center flex gap-3 relative select-none',
      disabled ? 'text-main-l3' : 'text-main hover:cursor-pointer',
      className ?? ''
    )}
  >
    <input
      aria-label={ariaLabel}
      checked={checked}
      className={classNames(
        'peer appearance-none bg-white border border-background-spacer rounded-sm grid h-4 place-content-center w-4 checked:bg-primary checked:border-primary hover-not-disabled:cursor-pointer hover-not-disabled:checked:bg-primary-d1 hover:checked:border-primary-d1  disabled:checked:bg-[#AEB8EA] disabled:checked:border-[#AEB8EA] disabled:bg-background-secondary',
        !disabled &&
          'group-hover:cursor-pointer group-hover:border-main-l1 group-hover:checked:bg-primary-d1 group-hover:checked:border-primary-d1'
      )}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      type="checkbox"
    />
    <Check checked={checked} indeterminate={indeterminate} />
    {label}
  </label>
);

export default Checkbox;
