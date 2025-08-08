'use client';

import { FieldData, PdfFormData } from '@/app/(ops)/types';
import { ChangeEvent, JSX, useState } from 'react';
import { FieldType } from '@/app/(ops)/enums';
import { Textarea } from '../Textarea/Textarea';
import { TextInput } from '../TextInput/TextInput';

interface InputFieldsProps {
  setPdfFormData: (data: PdfFormData) => void;
  pdfFormData: PdfFormData;
  fieldData: FieldData[];
}

export default function InputFields({
  setPdfFormData,
  pdfFormData,
  fieldData,
}: InputFieldsProps): JSX.Element {
  // Track touched fields for validation feedback
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange =
    (field: keyof PdfFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPdfFormData({ ...pdfFormData, [field]: e.target.value });
      setTouched((prev) => ({ ...prev, [field]: true }));
    };

  return (
    <>
      {fieldData?.map(({ type, placeholder, fieldKey, required }) => {
        const value = pdfFormData[fieldKey];
        const showError = required && touched[fieldKey] && !value.trim();
        const commonProps = {
          placeholder,
          value,
          onChange: handleChange(fieldKey),
          required,
          className: showError ? 'border-red-500' : '',
        };

        if (type === FieldType.TextInput) {
          return (
            <div key={fieldKey} className='flex flex-col space-y-1'>
              <TextInput {...commonProps} />
              {showError && (
                <span className='text-xs text-red-500'>
                  This field is required.
                </span>
              )}
            </div>
          );
        }

        if (type === FieldType.Textarea) {
          return (
            <div key={fieldKey} className='flex flex-col space-y-1'>
              <Textarea {...commonProps} />
              {showError && (
                <span className='text-xs text-red-500'>
                  This field is required.
                </span>
              )}
            </div>
          );
        }

        return null;
      })}
    </>
  );
}
