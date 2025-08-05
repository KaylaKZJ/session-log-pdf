import React, { JSX } from 'react';
import { Label } from '../Label/Label';

interface TextareaProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}
export function Textarea({
  placeholder,
  value,
  onChange,
  className,
}: TextareaProps): JSX.Element {
  return (
    <>
      <Label>{placeholder}</Label>
      <textarea
        className={`border rounded p-2 ${className || ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
