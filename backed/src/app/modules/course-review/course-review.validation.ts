import { z } from 'zod';

const createCourseReviewValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email('Invalid email address'),
    photoUrl: z.string().url('Please provide a valid photo URL'),
    rating: z
      .number()
      .min(1, 'Rating must be at least 1')
      .max(5, 'Rating must be no more than 5'),
    comment: z.string(),
  }),
});

const updateCourseReviewValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email('Invalid email address').optional(),
    photoUrl: z.string().url('Please provide a valid photo URL').optional(),
    rating: z.number().min(1).max(5).optional(),
    comment: z.string().optional(),
  }),
});

export const CourseReviewValidations = {
  createCourseReviewValidationSchema,
  updateCourseReviewValidationSchema,
};
