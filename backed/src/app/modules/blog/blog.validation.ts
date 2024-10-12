import { z } from 'zod';

// Author details validation schema
const authorDetailsSchema = z.object({
  authorName: z.string().min(1, 'Author Name is required.'),
  authorImage: z.string().url('Invalid URL for Author Image.'),
  authorEmail: z.string().email('Invalid email address.'),
});

// Blog validation schema
const createBlogValidationSchema = z.object({
  body: z.object({
    image: z.string().url('Invalid URL for Image.'),
    title: z.string().min(1, 'Title is required.'),
    category: z.string().min(1, 'Category is required.'),
    description: z.string().min(1, 'Description is required.'),
    shortDescription: z.string().min(1, 'Description is required.'),
    author_details: authorDetailsSchema,
  }),
});

// Author details validation schema
const updateAuthorDetailsSchema = z.object({
  authorName: z.string().min(1, 'Author Name is required.').optional(),
  authorImage: z.string().url('Invalid URL for Author Image.').optional(),
  authorEmail: z.string().email('Invalid email address.').optional(),
});

// Blog update validation schema
const updateBlogValidationSchema = z.object({
  body: z.object({
    image: z.string().url('Invalid URL for Image.').optional(),
    title: z.string().min(1, 'Title is required.').optional(),
    category: z.string().min(1, 'Category is required.').optional(),
    description: z.string().min(1, 'Description is required.').optional(),
    shortDescription: z
      .string()
      .min(1, 'Short description is required.')
      .optional(),
    author_details: updateAuthorDetailsSchema.optional(),
  }),
});

export const BlogValidations = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
