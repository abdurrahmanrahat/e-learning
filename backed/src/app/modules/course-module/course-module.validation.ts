import mongoose from 'mongoose';
import { z } from 'zod';

const contentValidationSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  duration: z.string({
    required_error: 'Duration is required',
  }),
  contentLink: z
    .string({
      required_error: 'Content link is required',
    })
    .url('Content link must be a valid URL'),
});

const createCourseModuleValidationSchema = z.object({
  body: z.object({
    course: z
      .string()
      .refine((value) => mongoose.Types.ObjectId.isValid(value), {
        message: 'Invalid MongoDB ObjectId',
      }),
    moduleName: z.string({
      required_error: 'Module name is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    notes: z.string({
      required_error: 'Notes are required',
    }),
    resources: z.string({
      required_error: 'Resources are required',
    }),
    content: z
      .array(contentValidationSchema)
      .nonempty('Content array cannot be empty'), // Ensures there is at least one content entry
  }),
});

const updateContentValidationSchema = z.object({
  title: z.string().optional(),
  duration: z.string().optional(),
  contentLink: z.string().url().optional(),
});

const updateCourseModuleValidationSchema = z.object({
  body: z.object({
    course: z
      .string()
      .optional()
      .refine((value) => !value || mongoose.Types.ObjectId.isValid(value), {
        message: 'Invalid MongoDB ObjectId',
      }),
    moduleName: z.string().optional(),
    description: z.string().optional(),
    notes: z.string().optional(),
    resources: z.string().optional(),
    content: z.array(updateContentValidationSchema).optional(),
  }),
});

export const CourseModuleValidations = {
  createCourseModuleValidationSchema,
  updateCourseModuleValidationSchema,
};
