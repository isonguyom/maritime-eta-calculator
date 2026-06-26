import { numericString } from '@/lib/validations/helpers';
import z from 'zod';

export const fuelEstimatorSchema = z.object({
  vessel: z.string().min(1, 'Please select a vessel'),
  distance: numericString('Distance'),
  speed: numericString('Speed'),
  fuelPrice: numericString('Fuel price'),
});

export type FuelEstimatorSchemaType = z.infer<typeof fuelEstimatorSchema>;
