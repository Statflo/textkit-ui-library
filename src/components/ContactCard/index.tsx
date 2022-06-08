import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

import { classNames } from '../../utils/classnames';
import Icon from '../Icon';

interface ContactCardProps {
  active?: boolean;
  isLoading?: boolean;
  isSmsCapable?: boolean;
  isVoiceCapable?: boolean;
  onClick: () => void;
  preview?: string;
  timestamp: Date;
  title: string;
  unreadMessages?: number;
}

const ContactCard = ({
  active = false,
  isLoading = false,
  isSmsCapable = true,
  isVoiceCapable = true,
  onClick,
  preview,
  timestamp,
  title,
  unreadMessages = 0,
}: ContactCardProps) =>
  isLoading ? (
    <div className="flex flex-col h-22 justify-between p-4 relative w-full md:w-88">
      <div className="items-center flex h-5 justify-between w-full">
        <div className="bg-background-spacer h-2.5 w-24" />
        <div className="bg-background-spacer h-2.5 w-12" />
      </div>
      <div className="h-8 w-full">
        <div className="bg-background-spacer h-2.5 w-full md:w-72" />
      </div>
      <div className="bottom-0 bg-background-spacer h-px absolute w-sub4" />
    </div>
  ) : (
    <button
      className={classNames(
        'flex flex-col h-22 justify-between p-4 relative w-full md:w-88 hover:bg-background-hover',
        active ? 'bg-primary' : 'bg-background'
      )}
      onClick={onClick}
    >
      <div className="items-center flex h-5 justify-between w-full">
        <div className="items-center flex gap-2">
          <p
            className={classNames(
              'text-16 font-bold',
              active ? 'text-background' : 'text-main-l1'
            )}
          >
            {title}
          </p>
          {!isSmsCapable && (
            <Icon color="lightGrey" icon="message-prohibited" size="small" />
          )}
          {!isVoiceCapable && (
            <Icon color="lightGrey" icon="phone-prohibited" size="small" />
          )}
        </div>
        <span
          className={classNames(
            'text-14',
            active ? 'text-background' : 'text-main-l3'
          )}
        >
          {formatDistanceToNow(timestamp)} ago
        </span>
      </div>
      <div className="items-center flex gap-2 h-8">
        <p
          className={classNames(
            'text-14 text-left w-sub7',
            active ? 'text-background' : 'text-main-l2'
          )}
        >
          <LinesEllipsis text={preview} maxLine={2} />
        </p>
        {unreadMessages > 0 && !active && (
          <div className="items-center bg-primary rounded-xl flex text-background text-12 font-bold h-5 justify-center w-5">
            {unreadMessages}
          </div>
        )}
      </div>
      {!active && (
        <div className="bottom-0 bg-background-spacer h-px absolute w-sub4" />
      )}
    </button>
  );

export default ContactCard;
