'use client';

import { JSX } from 'react';

interface HeaderProps {
  children?: React.ReactNode;
}
export default function Header({ children }: HeaderProps): JSX.Element {
  return <h1 className='text-2xl font-bold text-center'>{children}</h1>;
}
