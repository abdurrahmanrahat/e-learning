import mongoose from 'mongoose';
import { z } from 'zod';

const objectIdValidation = z
  .string()
  .refine((value) => mongoose.Types.ObjectId.isValid(value), {
    message: 'Invalid MongoDB ObjectId.',
  });

const createEnrolledCourseValidationSchema = z.object({
  body: z.object({
    course: objectIdValidation,
    studentName: z.string(),
    studentEmail: z.string().email('Invalid email address'),
  }),
});

export const EnrolledCourseValidations = {
  createEnrolledCourseValidationSchema,
};
