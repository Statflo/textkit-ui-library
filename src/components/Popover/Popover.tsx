import React, { useState } from 'react';

import { classNames } from '../../utils/classnames';
import Icon from '../Icon/Icon';

interface PopoverProps {
  content: {
    title: string;
    body: string;
    errorText?: string;
  }[];
  isError?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const Popover = ({
  content,
  isError = false,
  position = 'top',
}: PopoverProps) => {
  const [index, setIndex] = useState(0);

  return (
    <div
      className={classNames(
        'rounded-md h-40 relative shadow-popover w-64',
        isError ? 'pt-2 px-3 pb-3' : 'p-3'
      )}
    >
      <div
        className={classNames(
          'bg-white h-2 absolute rotate-45 w-2',
          position === 'top' && 'left-1/2 -bottom-1 -translate-x-1',
          position === 'right' && '-left-1 top-1/2 -translate-y-1',
          position === 'bottom' && 'left-1/2 -top-1 -translate-x-1',
          position === 'left' && '-right-1 top-1/2 -translate-y-1'
        )}
      />
      <div
        className={classNames(
          'border-b border-background-spacer flex flex-col pb-2',
          isError && 'text-center'
        )}
      >
        {isError && (
          <span className="text-error text-10 font-semibold pb-1 uppercase">
            {content.length > 1 ? `${content.length} ERRORS` : '1 ERROR'}
          </span>
        )}
        <div className="items-center text-main text-14 font-bold flex justify-between">
          {content.length > 1 && (
            <button
              aria-label="Previous"
              className="group"
              disabled={index === 0}
              onClick={() => setIndex((prevIndex) => prevIndex - 1)}
            >
              <Icon color="lightGrey" icon="angle-left" size="xSmall" />
            </button>
          )}
          {content[index].title}
          {content.length > 1 && (
            <button
              aria-label="Next"
              className="group"
              disabled={index === content.length - 1}
              onClick={() => setIndex((prevIndex) => prevIndex + 1)}
            >
              <Icon color="lightGrey" icon="angle-right" size="xSmall" />
            </button>
          )}
        </div>
      </div>
      <div
        className={classNames('flex flex-col pt-1', isError && 'items-center')}
      >
        {isError && (
          <p className="border-b-2 border-error text-main text-14 font-bold mb-1 w-fit">
            {content[index]?.errorText}
          </p>
        )}
        <p className="text-main-l1 text-14">{content[index].body}</p>
      </div>
    </div>
  );
};

export default Popover;
