

import { ZodSchema } from 'zod';

export function validateWithZodSchema<T>(
    schema: ZodSchema<T>,
    data: unknown
  ): T {
    const result = schema.safeParse(data);
  
    if (!result.success) {
       console.log('Validation errors:', result.error.errors);
      const errors = result.error.errors.map((error) => error.message);
      throw new Error(errors.join(','));
    }
    return result.data;
  }

