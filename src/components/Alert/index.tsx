import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { classNames } from '../../utils/classnames';
import Icon from '../Icon';

interface AlertProps {
  isOpen: boolean;
  alertText: string;
  onClose: () => void;
  status?: 'neutral' | 'success' | 'info' | 'warning' | 'error';
  type?: 'toast' | 'embedded' | 'stripe';
}

const Alert = ({
  isOpen,
  alertText,
  onClose,
  status = 'neutral',
  type = 'toast',
}: AlertProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className={classNames(
          'items-center flex gap-2 p-4',
          status === 'neutral' && 'bg-main border-main',
          status === 'info' && `bg-info-l2 border-info-l1`,
          status === 'success' && `bg-success-l2 border-success-l1`,
          status === 'error' && `bg-error-l2 border-error-l1`,
          status === 'warning' && `bg-warning-l2 border-warning-l1`,
          type === 'toast' && 'shadow-alert',
          type === 'stripe' ? 'border-b' : 'border rounded-md'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Icon
          color={status === 'neutral' ? 'white' : status}
          icon={
            status === 'info'
              ? 'info'
              : status === 'success'
              ? 'check-circle'
              : status === 'error'
              ? 'exclamation'
              : status === 'warning'
              ? 'warning'
              : 'info'
          }
          size="small"
        />
        <span
          className={classNames(
            'flex-1 text-14',
            status === 'neutral' && 'text-white',
            status === 'info' && 'text-info',
            status === 'success' && 'text-success',
            status === 'error' && 'text-error',
            status === 'warning' && 'text-warning'
          )}
        >
          {status === 'info'
            ? `Info: ${alertText}`
            : status === 'success'
            ? `Success: ${alertText}`
            : status === 'error'
            ? `Error: ${alertText}`
            : status === 'warning'
            ? `Warning: ${alertText}`
            : alertText}
        </span>
        <button aria-label="Close" onClick={onClose}>
          <Icon
            color={status === 'neutral' ? 'white' : status}
            icon="close"
            size="small"
          />
        </button>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Alert;
