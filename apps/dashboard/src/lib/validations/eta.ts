import { z } from 'zod';

export const etaSchema = z.object({
  vessel: z.string().min(1, 'Please select a vessel type'),

  distance: z.coerce.number().positive('Distance must be greater than 0'),

  speed: z.coerce.number().positive('Speed must be greater than 0'),

  departure: z.string().min(1, 'Departure date is required'),
});

export type EtaSchemaType = z.infer<typeof etaSchema>;
