import React, { JSX } from 'react';

interface LabelProps {
  children: string;
  className?: string;
}

export function Label({ children, className }: LabelProps): JSX.Element {
  return (
    <label
      className={`text-sm font-medium text-[#e67e22] text-[18px] ${
        className || ''
      }`}
    >
      {children}
    </label>
  );
}
