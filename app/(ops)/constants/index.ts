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
    type: 'TextInput',
    placeholder: 'Name & surname',
    fieldKey: FIELD_KEYS.menteeNameSurname,
  },
  { type: 'TextInput', placeholder: 'Date', fieldKey: FIELD_KEYS.date },
  {
    type: 'Textarea',
    placeholder: 'Successes',
    fieldKey: FIELD_KEYS.successes,
  },
  {
    type: 'Textarea',
    placeholder: 'Challenges',
    fieldKey: FIELD_KEYS.challenges,
  },
  {
    type: 'Textarea',
    placeholder: 'AI Tools Discussed',
    fieldKey: FIELD_KEYS.aiTools,
  },
  {
    type: 'Textarea',
    placeholder: 'VLE Progress',
    fieldKey: FIELD_KEYS.vleProgress,
  },
  {
    type: 'Textarea',
    placeholder: 'Short-term Goals',
    fieldKey: FIELD_KEYS.shortGoals,
  },
  {
    type: 'Textarea',
    placeholder: 'Long-term Goals',
    fieldKey: FIELD_KEYS.longGoals,
  },
  {
    type: 'TextInput',
    placeholder: 'Velocity Check (%)',
    fieldKey: FIELD_KEYS.velocity,
  },
  {
    type: 'Textarea',
    placeholder: 'Additional Notes',
    fieldKey: FIELD_KEYS.notes,
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
