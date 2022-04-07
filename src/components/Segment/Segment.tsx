import React, { useEffect, useState } from 'react';

import { classNames } from '../../utils/classnames';

interface Props {
  activeIndex?: number;
  items: string[];
  onChange: (name: string, index: number) => void;
}

export default function Segment({ activeIndex = 0, items, onChange }: Props) {
  const [selected, setSelected] = useState<number>(activeIndex);

  useEffect(() => {
    setSelected(activeIndex);
  }, [activeIndex]);

  const handleSwitchItem = (index: number, name: string) => {
    setSelected(index);
    onChange(name, index);
  };

  return (
    <div className="tk-flex tk-w-full tk-h-8 tk-p-[2px] tk-rounded-md tk-cursor-pointer tk-bg-gray-secondary">
      {items.map((item, index) => (
        <button
          type="button"
          key={item}
          className={classNames(
            'tk-flex tk-items-center tk-justify-center tk-flex-1 tk-px-px tk-py-1 tk-text-main-default tk-rounded-md',
            selected === index ? 'tk-bg-white tk-shadow-sm tk-font-bold' : ''
          )}
          onClick={() => handleSwitchItem(index, item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
