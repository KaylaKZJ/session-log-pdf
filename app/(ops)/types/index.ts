import { FieldType } from '../enums';

/**
 * PdfFormData represents the structure of the session log form data.
 * Each property corresponds to a field in the session log PDF.
 *
 * @property menteeNameSurname - Name and surname of the mentee
 * @property date - Date of the session
 * @property successes - Successes achieved during the session
 * @property challenges - Challenges faced during the session
 * @property aiTools - AI tools used in the session
 * @property vleProgress - VLE progress details
 * @property shortGoals - Short-term goals set in the session
 * @property longGoals - Long-term goals set in the session
 * @property velocity - Velocity check (percentage)
 * @property notes - Additional notes
 */
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
/**
 * FieldData describes the configuration for each input field in the form.
 *
 * @property fieldKey - Key of the field in PdfFormData
 * @property type - Type of input (TextInput or Textarea)
 * @property placeholder - Placeholder text for the input
 * @property required - Whether the field is required
 * @property hidden - Whether the field is hidden
 */
export interface FieldData {
  fieldKey: keyof PdfFormData;
  type: FieldType;
  placeholder: string;
  required: boolean;
  hidden: boolean;
}
