'use client';

import { INPUT_FIELDS, PdfFormDataDefault } from '@/app/(ops)/constants';
import { generatePDF } from '@/app/(ops)/helpers';
import { ChangeEvent, JSX, useState } from 'react';
import { Button } from '../Button/Textarea';
import { Textarea } from '../Textarea/Textarea';
import { TextInput } from '../TextInput/TextInput';
import { PdfFormData } from '@/app/(ops)/types';

export default function SessionLogPDFGenerator(): JSX.Element {
  const [pdfFormData, setPdfFormData] =
    useState<PdfFormData>(PdfFormDataDefault);

  const handleChange =
    (field: keyof PdfFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPdfFormData({ ...pdfFormData, [field]: e.target.value });
    };

  return (
    <div className='p-4 max-w-2xl mx-auto space-y-6'>
      <h1 className='text-2xl font-bold text-center'>
        Session Log PDF Generator
      </h1>
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

      <div className='pt-2'>
        <Button
          className='w-full p-2 rounded bg-[#e67e22] hover:cursor-pointer'
          onClick={() => generatePDF(pdfFormData)}
        >
          Generate PDF
        </Button>
      </div>
    </div>
  );
}
