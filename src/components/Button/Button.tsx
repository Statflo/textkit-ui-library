import { motion } from 'framer-motion';
import React, { useCallback } from 'react';

import { classNames } from '../../utils/classnames';
import Icon, { iconPaths } from '../Icon/Icon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the button is active or not */
  active?: boolean;
  /** Aria label to provide information when there is no text */
  ariaLabel?: string;
  /** Whether to blur the button after clicked or not */
  blurOnClick?: boolean;
  /** Custom classname to be passed to the component */
  className?: string;
  children: React.ReactNode;
  /** Whether the button is disabled or not */
  disabled?: boolean;
  /** Whether the button should take the full width of its container or not */
  fullWidth?: boolean;
  /** Custom id to pass to the component */
  id?: string;
  /** Name of the icon to render on the left side of the component */
  leadingIcon?: keyof typeof iconPaths;
  /** Whether there should be padding or not */
  noSidePadding?: boolean;
  /** Callback function to run when the button is clicked */
  onClick?: (e: React.MouseEvent) => void;
  /** Size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Name of the icon to render on the right side of the component */
  trailingIcon?: keyof typeof iconPaths;
  /** Type of the button */
  type?: 'button' | 'submit' | 'reset';
  /** Variation of the button */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      active = false,
      ariaLabel,
      blurOnClick = true,
      children,
      className,
      disabled = false,
      fullWidth = false,
      leadingIcon,
      noSidePadding = false,
      onBlur,
      onClick,
      onFocus,
      onMouseMove,
      onPointerDown,
      onPointerEnter,
      size = 'medium',
      trailingIcon,
      type = 'button',
      variant = 'primary',
    },
    ref
  ) => {
    const onButtonClick = useCallback(
      (e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }

        if (blurOnClick) {
          e.currentTarget.blur();
        }

        if (onClick) {
          onClick(e);
        }
      },
      [blurOnClick, disabled, onClick]
    );

    return (
      <motion.button
        aria-label={ariaLabel}
        className={classNames(
          'group items-center border rounded-md flex font-semibold gap-2 justify-center select-none',
          size === 'small' && 'h-6',
          size === 'medium' && 'h-8',
          size === 'large' ? 'text-base h-10' : 'text-sm',
          variant === 'primary' &&
            (active
              ? 'bg-primary-d2 border-primary-d2 text-white'
              : 'bg-primary border-primary text-white disabled:bg-primary-l1 disabled:border-primary-l1 hocus-not-disabled:bg-primary-d1 hocus-not-disabled:border-primary-d1'),
          variant === 'secondary' &&
            (active
              ? 'bg-primary-d1/15 border-primary-d2 text-primary-d2'
              : 'bg-white border-primary text-primary disabled:border-primary-l1 disabled:text-primary-l1 hocus-not-disabled:bg-primary-d1/10 hocus-not-disabled:border-primary-d2 hocus-not-disabled:text-primary-d1'),
          variant === 'tertiary' &&
            (active
              ? 'bg-primary-d1/15 border-transparent text-primary-d2'
              : 'text-primary border-transparent disabled:text-primary-l1 hocus-not-disabled:bg-primary-d1/10 hocus-not-disabled:text-primary-d1'),
          fullWidth && 'w-full',
          !noSidePadding && 'px-4',
          className ?? ''
        )}
        disabled={disabled}
        onBlur={onBlur}
        onClick={onButtonClick}
        onFocus={onFocus}
        onMouseMove={onMouseMove}
        onPointerDown={onPointerDown}
        onPointerEnter={onPointerEnter}
        ref={ref}
        type={type}
        whileTap={!disabled ? { scale: 0.95 } : undefined}
      >
        {leadingIcon && (
          <Icon
            color={variant === 'primary' ? 'white' : 'primary'}
            icon={leadingIcon}
            size="small"
          />
        )}
        {children}
        {trailingIcon && (
          <Icon
            color={variant === 'primary' ? 'white' : 'primary'}
            icon={trailingIcon}
            size="small"
          />
        )}
      </motion.button>
    );
  }
);

export default Button;
