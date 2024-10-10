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
    author_details: authorDetailsSchema,
  }),
});

export const BlogValidations = {
  createBlogValidationSchema,
};
