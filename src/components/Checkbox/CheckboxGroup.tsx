import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function CheckboxGroup({ children }: Props) {
  return <div className="tk-w-full tk-space-y-1">{children}</div>;
}
