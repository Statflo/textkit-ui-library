import React from 'react';
import { Rings } from 'react-loader-spinner';

interface Props {
  children: React.ReactNode;
}

export default function Loader({ children }: Props) {
  return (
    <div className="tk-flex tk-flex-1 tk-items-center tk-justify-center tk-flex-col tk-py-20 tk-space-y-4">
      <Rings color="hsl(229.3, 63.6%, 56.9%)" height={75} width={75} />
      <p className="tk-text-sm tk-font-medium tk-text-main-l2">{children}</p>
    </div>
  );
}
