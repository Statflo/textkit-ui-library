import React, { useState } from 'react';

import Icon from '../Icon';

import Input, { InputProps } from './Default';

export const Password = ({
  disabled,
  feedback,
  onChange,
  label,
  name,
  placeholder,
  value,
}: InputProps) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Input
        disabled={disabled}
        feedback={feedback}
        onChange={onChange}
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        type={isVisible ? 'text' : 'password'}
      />
      <button
        aria-label={isVisible ? 'Hide Password' : 'Show Password'}
        className="group absolute right-3 top-8"
        onClick={() => setVisible((prevState) => !prevState)}
      >
        {isVisible ? (
          <Icon color="grey" icon="no-view" size="small" />
        ) : (
          <Icon color="grey" icon="view" size="small" />
        )}
      </button>
    </div>
  );
};
