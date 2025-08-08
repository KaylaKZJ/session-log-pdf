import { useMemo } from 'react';
import { INPUT_FIELDS } from '../constants';
import { isFormValid } from '../helpers';
import { PdfFormData } from '../types';

export function useSessionLog(pdfFormData: PdfFormData) {
  const requiredFields = useMemo(
    () =>
      INPUT_FIELDS.filter((field) => field.required && !field.hidden).map(
        (field) => field.fieldKey
      ),
    []
  );

  const generatePDFDisabled = useMemo(
    () => !isFormValid(pdfFormData, requiredFields),
    [pdfFormData, requiredFields]
  );

  return { requiredFields, generatePDFDisabled };
}
