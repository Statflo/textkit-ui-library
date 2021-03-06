import * as React from 'react';

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

function ChevronDown({ width = 16, height = 16, className }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M.17 1.536L3.59 5.101a.568.568 0 00.822 0L7.83 1.536C8.194 1.154 7.934.5 7.418.5H.582c-.515.004-.775.654-.41 1.036z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ChevronDown;
