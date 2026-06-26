import z from 'zod';

import { numericString } from '@/lib/validations/helpers';

export const voyagePlannerSchema = z.object({
  vessel: z.string().min(1, 'Please select a vessel'),

  origin: z.string().trim().min(2, 'Origin port is required'),

  destination: z.string().trim().min(2, 'Destination port is required'),

  departure: z.string().min(1, 'Departure date is required'),

  distance: numericString('Distance'),

  speed: numericString('Speed'),

  fuelPrice: numericString('Fuel price'),
});

export type VoyagePlannerSchemaType = z.infer<typeof voyagePlannerSchema>;
