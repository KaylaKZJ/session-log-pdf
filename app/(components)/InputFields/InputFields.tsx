'use client';

import { INPUT_FIELDS } from '@/app/(ops)/constants';
import { PdfFormData } from '@/app/(ops)/types';
import { ChangeEvent, JSX } from 'react';
import { Textarea } from '../Textarea/Textarea';
import { TextInput } from '../TextInput/TextInput';

interface InputFieldsProps {
  setPdfFormData: (data: PdfFormData) => void;
  pdfFormData: PdfFormData;
}

export default function InputFields({
  setPdfFormData,
  pdfFormData,
}: InputFieldsProps): JSX.Element {
  const handleChange =
    (field: keyof PdfFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPdfFormData({ ...pdfFormData, [field]: e.target.value });
    };

  return (
    <>
      {INPUT_FIELDS.map(({ type, placeholder, fieldKey }) => {
        const commonProps = {
          placeholder,
          value: pdfFormData[fieldKey],
          onChange: handleChange(fieldKey),
        };

        if (type === 'TextInput') {
          return (
            <div key={fieldKey} className='flex flex-col space-y-1'>
              <TextInput {...commonProps} />
            </div>
          );
        }

        if (type === 'Textarea') {
          return (
            <div key={fieldKey} className='flex flex-col space-y-1'>
              <Textarea {...commonProps} />
            </div>
          );
        }

        return null;
      })}
    </>
  );
}
