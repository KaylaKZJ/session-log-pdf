import { FieldType } from '../enums';
import { PdfFormData } from '../types';

export const FIELD_KEYS = {
  menteeNameSurname: 'menteeNameSurname',
  date: 'date',
  successes: 'successes',
  challenges: 'challenges',
  aiTools: 'aiTools',
  vleProgress: 'vleProgress',
  shortGoals: 'shortGoals',
  longGoals: 'longGoals',
  velocity: 'velocity',
  notes: 'notes',
} as const;

export const INPUT_FIELDS = [
  {
    fieldKey: FIELD_KEYS.menteeNameSurname,
    type: FieldType.TextInput,
    placeholder: 'Name & surname',
    required: true,
  },
  {
    fieldKey: FIELD_KEYS.date,
    type: FieldType.TextInput,
    placeholder: 'Date',
    required: true,
  },
  {
    fieldKey: FIELD_KEYS.successes,
    type: FieldType.Textarea,
    placeholder: 'Successes',
    required: true,
  },
  {
    fieldKey: FIELD_KEYS.challenges,
    type: FieldType.Textarea,
    placeholder: 'Challenges',
    required: true,
  },
  {
    fieldKey: FIELD_KEYS.aiTools,
    type: FieldType.Textarea,
    placeholder: 'AI Tools Discussed',
    required: true,
  },
  {
    fieldKey: FIELD_KEYS.vleProgress,
    type: FieldType.Textarea,
    placeholder: 'VLE Progress',
    required: true,
  },
  {
    fieldKey: FIELD_KEYS.shortGoals,
    type: FieldType.Textarea,
    placeholder: 'Short-term Goals',
    required: true,
  },
  {
    fieldKey: FIELD_KEYS.longGoals,
    type: FieldType.Textarea,
    placeholder: 'Long-term Goals',
    required: true,
  },
  {
    fieldKey: FIELD_KEYS.velocity,
    type: FieldType.TextInput,
    placeholder: 'Velocity Check (%)',
    required: true,
  },
  {
    fieldKey: FIELD_KEYS.notes,
    type: FieldType.Textarea,
    placeholder: 'Additional Notes',
    required: false,
  },
];

export const PdfFormDataDefault: PdfFormData = {
  menteeNameSurname: '',
  date: '',
  successes: '',
  challenges: '',
  aiTools: '',
  vleProgress: '',
  shortGoals: '',
  longGoals: '',
  velocity: '',
  notes: '',
};
