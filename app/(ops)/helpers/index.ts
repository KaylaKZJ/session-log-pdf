import jsPDF from 'jspdf';
import { PdfFormData } from '../types';

export const getEntries = (formData: PdfFormData): [string, string][] => [
  ['Mentee name and surname:', formData.menteeNameSurname],
  ['Date:', formData.date],
  ['Successes:', formData.successes],
  ['Challenges:', formData.challenges],
  ['AI Tools Discussed:', formData.aiTools],
  ['VLE Progress:', formData.vleProgress],
  ['Short-term Goals:', formData.shortGoals],
  ['Long-term Goals:', formData.longGoals],
  ['Velocity Check (% of expected):', formData.velocity],
  ['Additional Notes:', formData.notes],
];

export const formatTextBlock = (
  doc: jsPDF,
  label: string,
  text: string,
  y: number
): number => {
  doc.setFont('helvetica', 'bold');
  doc.text(label, 10, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(text || '-', 180);
  doc.text(lines, 10, y);
  return y + lines.length * 6 + 4;
};

export const generatePDF = (pdfFormData: PdfFormData) => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Session Log', 105, 15, { align: 'center' });

  doc.setFontSize(12);
  let y = 25;

  getEntries(pdfFormData).forEach(([label, text]) => {
    y = formatTextBlock(doc, label, text, y);
  });

  doc.save(
    `Session_Log_${pdfFormData.date}-${pdfFormData.menteeNameSurname}.pdf`
  );
};
