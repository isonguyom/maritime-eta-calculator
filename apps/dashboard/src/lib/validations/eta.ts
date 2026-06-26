import { z } from 'zod';
import { numericString } from '@/lib/validations/helpers';

export const etaFormSchema = z.object({
  vessel: z.string().min(1, 'Please select a vessel'),
  distance: numericString('Distance'),
  speed: numericString('Speed'),
  departure: z.string().min(1, 'Departure date is required'),
});

export type EtaFormSchemaType = z.infer<typeof etaFormSchema>;
