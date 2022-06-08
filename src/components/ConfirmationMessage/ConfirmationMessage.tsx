import React from 'react';

import { classNames } from '../../utils/classnames';
import Button from '../Button/Button';

interface ConfirmationMessageProps {
  content: string;
  label?: string;
  onCancel: () => void;
  onConfirm: () => void;
  size?: 'small' | 'medium';
}

const ConfirmationMessage = ({
  content,
  label,
  onCancel,
  onConfirm,
  size = 'medium',
}: ConfirmationMessageProps) => (
  <div
    className={classNames(
      'shadow-modal flex flex-col gap-5 p-6 w-full',
      size === 'small' ? 'md:w-84' : 'md:w-124'
    )}
  >
    {label && <p className="text-main text-20 font-bold">{label}</p>}
    <p className="text-main text-16">{content}</p>
    <div className="items-center flex gap-4 justify-end">
      <Button onClick={onCancel} variant="tertiary">
        Cancel
      </Button>
      <Button onClick={onConfirm} variant="primary">
        Confirm
      </Button>
    </div>
  </div>
);

export default ConfirmationMessage;
