import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    photoUrl: z.string(),
    gender: z.enum(['male', 'female', 'others']),
    password: z
      .string()
      .max(10, { message: 'Password size maximum 10 characters.' })
      .min(6, { message: 'Password at least 6 characters' }),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};
