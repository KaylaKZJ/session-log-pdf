'use client';

import { INPUT_FIELDS, PdfFormDataDefault } from '@/app/(ops)/constants';
import { generatePDF } from '@/app/(ops)/helpers';
import { useSessionLog } from '@/app/(ops)/hooks';
import { PdfFormData } from '@/app/(ops)/types';
import { JSX, useState } from 'react';
import { Button } from '../common/Button/Button';
import InputFields from './components/InputFields/InputFields';
import Header from './components/Header/Header';

export default function SessionLogPDFGenerator(): JSX.Element {
  const [pdfFormData, setPdfFormData] =
    useState<PdfFormData>(PdfFormDataDefault);

  const { generatePDFDisabled } = useSessionLog(pdfFormData);

  return (
    <div className='p-4 max-w-2xl mx-auto space-y-6'>
      <Header>Session Log PDF Generator</Header>

      <InputFields
        fieldData={INPUT_FIELDS}
        setPdfFormData={setPdfFormData}
        pdfFormData={pdfFormData}
      />

      <div className='pt-2'>
        <Button
          className={`w-full p-2 rounded bg-[#e67e22]  ${
            generatePDFDisabled
              ? 'hover:cursor-not-allowed opacity-50'
              : 'hover:cursor-pointer'
          }`}
          onClick={() => generatePDF(pdfFormData)}
          disabled={generatePDFDisabled}
        >
          Generate PDF
        </Button>
      </div>
    </div>
  );
}
