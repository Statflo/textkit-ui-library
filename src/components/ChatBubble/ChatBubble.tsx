import { format } from 'date-fns';
import React from 'react';

import { classNames } from '../../utils/classnames';
import Icon from '../Icon/Icon';
import RotatingLines from '../Loader/RotatingLines';

export interface ChatBubbleProps {
  content: string;
  onDelete?: () => void;
  onTryAgain?: () => void;
  state: 'outgoing' | 'incoming' | 'sending' | 'error';
  timestamp: Date;
}

// TODO: Image/Link Messages
const ChatBubble = ({
  content,
  onDelete,
  onTryAgain,
  state,
  timestamp,
}: ChatBubbleProps) => (
  <div
    className={classNames(
      'flex flex-col gap-2 w-full md:w-100',
      state === 'incoming' ? 'items-start' : 'items-end'
    )}
  >
    <div
      className={classNames(
        'rounded-2xl text-16 p-2.5 relative',
        state === 'incoming'
          ? 'bg-background-spacer text-main'
          : 'bg-primary text-white',
        state === 'error' && 'border border-error'
      )}
    >
      {state === 'error' && (
        <button
          className="items-center bg-background-navigation border border-background-spacer rounded-xl flex h-6 justify-center absolute -right-2.5 -top-2.5 w-6"
          onClick={onDelete}
        >
          <Icon color="lightGrey" icon="close" size="small" />
        </button>
      )}
      {content}
    </div>
    <span
      className={classNames(
        'items-center flex text-12 font-semibold uppercase',
        state === 'error' ? 'text-error' : 'text-main-l3',
        state === 'sending' && 'gap-2'
      )}
    >
      {(state === 'outgoing' || state === 'incoming') &&
        format(timestamp, 'h:MM aa')}
      {state === 'sending' && (
        <>
          {'Sending'}
          <RotatingLines />
        </>
      )}
      {state === 'error' && (
        <>
          {'Not Delivered, '}
          <button
            className="text-primary font-semibold uppercase pl-1 pr-2 hover:text-primary-d1"
            onClick={onTryAgain}
          >
            {'Try Again?'}
          </button>
          <Icon color="error" icon="exclamation" />
        </>
      )}
    </span>
  </div>
);

export default ChatBubble;
