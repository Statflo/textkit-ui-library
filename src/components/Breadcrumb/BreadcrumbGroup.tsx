import React from 'react';

interface BreadcrumbGroupProps {
  children: React.ReactNode;
}

export const BreadcrumbGroup = ({ children }: BreadcrumbGroupProps) => (
  <div className="items-center flex gap-2">{children}</div>
);
