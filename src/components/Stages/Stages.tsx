import React from 'react';

import { classNames } from '../../utils/classnames';

interface Props {
  completed?: number;
  stages?: number;
}

export default function Stages({ completed = 0, stages = 5 }: Props) {
  return (
    <div className="tk-flex tk-items-center tk-space-x-1">
      {Array.from(Array(stages).keys()).map((index) => {
        return (
          <div
            key={index}
            className={classNames(
              'tk-inline-block tk-w-5 tk-h-2 tk-rounded-sm tk-text-sm',
              completed >= stages
                ? 'tk-bg-success-default'
                : index <= completed
                ? 'tk-bg-warning-l1'
                : 'tk-bg-gray-spacer'
            )}
          />
        );
      })}
    </div>
  );
}
