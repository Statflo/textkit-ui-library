import React from 'react';

export interface RadioGroupProps {
  children: React.ReactNode;
  name: string;
}

const RadioGroup = ({ children, name }: RadioGroupProps) => (
  <div className="flex flex-col gap-1">
    {children &&
      React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? [
              React.cloneElement(child, {
                ...child?.props,
                name,
              }),
            ]
          : null
      )}
  </div>
);

export default RadioGroup;
