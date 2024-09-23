import { z } from 'zod';

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string().url('Please provide a valid image URL'),
    instructorImg: z
      .string()
      .url('Please provide a valid instructor image URL'),
    instructorName: z.string(),
    price: z.number().positive('Price must be a positive number'),
    description: z.string(),
    bigDescription: z.string(),
    courseDuration: z.string(),
    totalRatings: z.number().min(0).default(0),
    averageRatings: z.number().min(0).max(5).default(0),
    isDeleted: z.boolean().optional(),
  }),
});

const updateCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    image: z.string().url('Please provide a valid image URL').optional(),
    instructorImg: z
      .string()
      .url('Please provide a valid instructor image URL')
      .optional(),
    instructorName: z.string().optional(),
    price: z.number().positive('Price must be a positive number').optional(),
    description: z.string().optional(),
    bigDescription: z.string().optional(),
    courseDuration: z.string().optional(),
    totalRatings: z.number().min(0).default(0).optional(),
    averageRatings: z.number().min(0).max(5).default(0).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const CourseValidation = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
};
