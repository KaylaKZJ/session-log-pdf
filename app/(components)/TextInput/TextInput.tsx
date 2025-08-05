import React, { JSX } from 'react';
import { Label } from '../Label/Label';

interface TextInputProps {
  placeholder: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function TextInput({
  placeholder,
  value,
  onChange,
  className,
}: TextInputProps): JSX.Element {
  return (
    <>
      <Label>{placeholder}</Label>
      <input
        className={`border rounded p-2 ${className || ''}`}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
