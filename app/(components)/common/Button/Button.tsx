import React, { JSX } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
export function Button({
  onClick,
  children,
  className,
  disabled,
}: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
