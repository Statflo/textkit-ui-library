import { Combobox } from '@headlessui/react';
import React from 'react';

import { classNames } from '../../utils/classnames';

import { DropdownOption } from './Dropdown';

interface Props {
  group: DropdownOption;
  selectedOption?: DropdownOption;
}

export default function GroupedOptions({ group, selectedOption }: Props) {
  return (
    <div>
      <div className="tk-px-4 tk-pt-3 tk-pb-2 tk-uppercase tk-text-main-l2 tk-text-xs tk-font-medium">
        {group.label}
      </div>
      {group.options &&
        group.options.map((option) => (
          <Combobox.Option
            key={option.id}
            className={({ active }) =>
              classNames(
                'tk-cursor-default tk-select-none tk-relative tk-py-2 tk-px-4 tk-text-main-default',
                active ? 'tk-bg-gray-hover' : '',
                selectedOption && selectedOption.id === option.id
                  ? 'tk-bg-gray-hover'
                  : ''
              )
            }
            value={option}
          >
            <span className="tk-block tk-truncate tk-font-medium tk-text-main-default">
              {option.label}
            </span>
          </Combobox.Option>
        ))}
    </div>
  );
}
