import { FieldType } from '../enums';

export interface PdfFormData {
  menteeNameSurname: string;
  date: string;
  successes: string;
  challenges: string;
  aiTools: string;
  vleProgress: string;
  shortGoals: string;
  longGoals: string;
  velocity: string;
  notes: string;
}
export interface FieldData {
  fieldKey: keyof PdfFormData;
  type: FieldType;
  placeholder: string;
  required: boolean;
}
