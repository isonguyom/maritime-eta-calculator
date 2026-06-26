import { z } from 'zod';

export const numericString = (label: string) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required`)
    .refine((value) => !isNaN(Number(value)), {
      message: `${label} must be a valid number`,
    })
    .refine((value) => parseFloat(value) > 0, {
      message: `${label} must be greater than 0`,
    });
