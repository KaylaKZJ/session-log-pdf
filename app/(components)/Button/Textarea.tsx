import React, { JSX } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
export function Button({
  onClick,
  children,
  className,
}: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
