import { Combobox, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';

import { classNames } from '../../utils/classnames';
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';
import Search from '../icons/Search';

import GroupedOptions from './GroupedOptions';

export type DropdownOption = {
  id: string | number;
  disabled?: boolean;
  label: string;
  value?: string;
  options?: DropdownOption[];
};

interface Props {
  openTop?: boolean;
  options: DropdownOption[];
  placeholder?: string;
  selected?: DropdownOption;
  onChange: (option: DropdownOption) => void;
}

export default function Dropdown({
  openTop = false,
  options = [],
  placeholder = 'Select',
  selected,
  onChange,
}: Props) {
  const [selectedOption, setSelectedOption] =
    useState<DropdownOption | undefined>(selected);
  const [grouped, setGrouped] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (options[0].options && options[0].options.length > 0) {
      setGrouped(true);
    }
  }, [options]);

  const handleOnChange = (option: DropdownOption) => {
    setSelectedOption(option);
    onChange(option);
  };

  const filteredOptions = () => {
    if (query === '') {
      return options;
    }

    const list: DropdownOption[] = [];

    options.forEach((opt) => {
      if (opt.options && opt.options.length > 0) {
        const filteredOpts = opt.options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );
        if (filteredOpts.length > 0) {
          list.push({
            ...opt,
            options: filteredOpts,
          });
        }
      }

      if (!opt.options || opt.options.length === 0) {
        if (opt.label.toLowerCase().includes(query.toLowerCase())) {
          list.push(opt);
        }
      }
    });

    return list;
  };

  return (
    <Combobox value={selectedOption} onChange={handleOnChange}>
      {({ open }) => (
        <div className="tk-relative tk-block">
          <Combobox.Button className="tk-w-full tk-border tk-rounded-md tk-border-gray-spacer tk-bg-white tk-text-left tk-h-10 focus:tk-outline-none focus:tk-ring-2 focus:tk-ring-offset-2 focus:tk-ring-primary-default">
            <Combobox.Label className="tk-px-4 tk-select-none tk-flex tk-items-center tk-justify-between tk-text-main-default tk-cursor-pointer tk-space-x-2">
              <span className="tk-text-sm tk-font-medium tk-text-main-default tk-flex-1 tk-truncate">
                {selectedOption ? selectedOption.label : placeholder}
              </span>
              {open ? (
                <ChevronUp className="tk-w-2 tk-h-2 tk-text-main-l2" />
              ) : (
                <ChevronDown className="tk-w-2 tk-h-2 tk-text-main-l2" />
              )}
            </Combobox.Label>
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="tk-transition tk-ease-in tk-duration-100"
            leaveFrom="tk-opacity-100"
            leaveTo="tk-opacity-0"
            afterLeave={() => setQuery('')}
          >
            <div
              className={classNames(
                'tk-absolute tk-w-full tk-text-base tk-bg-white tk-rounded-md tk-shadow-md focus:tk-outline-none tk-border tk-border-gray-spacer',
                openTop ? 'tk-bottom-11' : 'tk-mt-1'
              )}
            >
              <div className="tk-w-full tk-flex tk-items-center tk-border-b tk-border-gray-spacer tk-px-2 tk-space-x-2 tk-py-2">
                <Search className="tk-w-4 tk-h-4 tk-text-main-l2" />
                <Combobox.Input
                  className="tk-border-none tk-text-sm tk-text-main-default focus:tk-outline-none focus:tk-ring-0 tk-h-8 placeholder:tk-text-main-l2 tk-w-full"
                  placeholder="Search"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <Combobox.Options className="tk-w-full tk-overflow-auto tk-max-h-60 tk-text-sm">
                {filteredOptions().length === 0 && query !== '' ? (
                  <div className="tk-cursor-default tk-select-none tk-relative tk-py-2 tk-px-4 tk-text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  <div
                    className={
                      grouped ? 'tk-divide-y tk-divide-gray-space' : ''
                    }
                  >
                    {filteredOptions().map((option) => {
                      if (option.options && option.options.length > 0) {
                        return (
                          <GroupedOptions
                            key={option.id}
                            group={option}
                            selectedOption={selectedOption}
                          />
                        );
                      } else {
                        return (
                          <Combobox.Option
                            key={option.id}
                            className={({ active }) =>
                              classNames(
                                'tk-cursor-default tk-select-none tk-relative tk-py-2 tk-px-4 tk-text-main-default',
                                active ? 'tk-bg-gray-hover' : '',
                                selectedOption &&
                                  selectedOption.id === option.id
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
                        );
                      }
                    })}
                  </div>
                )}
              </Combobox.Options>
            </div>
          </Transition>
        </div>
      )}
    </Combobox>
  );
}
