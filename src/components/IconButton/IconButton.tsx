import React from 'react';

import { classNames } from '../../utils/classnames';
import Button from '../Button/Button';
import Icon, { iconPaths } from '../Icon/Icon';
import Tooltip from '../Tooltip/Tooltip';

export interface IconButtonProps {
  /** Whether the button is active or not */
  active?: boolean;
  /** Aria label to explain the purpose of the button */
  ariaLabel: string;
  /** Custom className to be passed to the component */
  className?: string;
  /** Color of the icon for tertiary buttons */
  color?:
    | 'primary'
    | 'white'
    | 'grey'
    | 'lightGrey'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  /** Whether the button is disabled or not */
  disabled?: boolean;
  /** Name of the icon to be displayed */
  icon: keyof typeof iconPaths;
  /** Custom id to pass to the component */
  id?: string;
  /** Callback function to run when the button is clicked */
  onClick: (e: React.MouseEvent) => void;
  /** Size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Variation of the button */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const IconButton = ({
  active = false,
  ariaLabel,
  className,
  color = 'grey',
  disabled = false,
  icon,
  id,
  onClick,
  size = 'medium',
  variant = 'tertiary',
}: IconButtonProps) => {
  return (
    <Tooltip text={ariaLabel}>
      <Button
        active={active}
        ariaLabel={ariaLabel}
        className={classNames(
          size === 'small' && 'w-6',
          size === 'medium' && 'w-8',
          size === 'large' && 'w-10',
          className ?? ''
        )}
        disabled={disabled}
        id={id}
        noSidePadding
        onClick={onClick}
        size={size}
        variant={variant}
      >
        <Icon
          active={active}
          color={
            variant === 'primary'
              ? 'white'
              : variant === 'secondary'
              ? 'primary'
              : color
          }
          icon={icon}
          size={size === 'small' ? 'xSmall' : 'small'}
        />
      </Button>
    </Tooltip>
  );
};

export default IconButton;
