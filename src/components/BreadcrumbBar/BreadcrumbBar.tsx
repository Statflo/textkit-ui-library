import React from 'react';

import Icon from '../Icon/Icon';

export interface BreadcrumbBarProps {
  children: React.ReactNode;
}

const BreadcrumbBar = ({ children }: BreadcrumbBarProps) => (
  <div className="items-center flex gap-2">
    {children &&
      React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? [
              React.cloneElement(child, {
                ...child?.props,
                isClickable: index < React.Children.count(children) - 1,
              }),
              index < React.Children.count(children) - 1 && (
                <Icon color="lightGrey" icon="angle-right" size="xxSmall" />
              ),
            ]
          : null
      )}
  </div>
);

export default BreadcrumbBar;
