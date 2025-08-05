'use client';

import { PdfFormDataDefault } from '@/app/(ops)/constants';
import { generatePDF } from '@/app/(ops)/helpers';
import { PdfFormData } from '@/app/(ops)/types';
import { JSX, useState } from 'react';
import { Button } from '../Button/Textarea';
import InputFields from '../InputFields/InputFields';

export default function SessionLogPDFGenerator(): JSX.Element {
  const [pdfFormData, setPdfFormData] =
    useState<PdfFormData>(PdfFormDataDefault);

  return (
    <div className='p-4 max-w-2xl mx-auto space-y-6'>
      <h1 className='text-2xl font-bold text-center'>
        Session Log PDF Generator
      </h1>

      <InputFields setPdfFormData={setPdfFormData} pdfFormData={pdfFormData} />

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
