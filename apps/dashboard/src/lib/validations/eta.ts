import { z } from 'zod';

const numericString = z
  .string()
  .trim()
  .min(1, 'This field is required')
  .refine((value) => !Number.isNaN(Number(value)), 'Must be a valid number');

export const etaFormSchema = z.object({
  vessel: z.string().min(1, 'Select a vessel'),
  distance: numericString,
  speed: numericString,
  departure: z.string().min(1, 'Departure date is required'),
});

export type EtaFormSchemaType = z.infer<typeof etaFormSchema>;
