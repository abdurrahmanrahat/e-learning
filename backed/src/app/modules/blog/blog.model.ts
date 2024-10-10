import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface'; // Adjust the import path based on your project structure

const authorDetailsSchema = new Schema({
  authorName: {
    type: String,
    required: [true, 'Author Name is required.'],
  },
  authorImage: {
    type: String,
    required: [true, 'Author Image is required.'],
  },
  authorEmail: {
    type: String,
    required: [true, 'Author Email is required.'],
    unique: true,
  },
});

const blogSchema = new Schema<TBlog>(
  {
    image: {
      type: String,
      required: [true, 'Image is required.'],
    },
    title: {
      type: String,
      required: [true, 'Title is required.'],
    },
    category: {
      type: String,
      required: [true, 'Category is required.'],
    },
    description: {
      type: String,
      required: [true, 'Description is required.'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    author_details: {
      type: authorDetailsSchema,
      required: [true, 'Author details are required.'],
    },
  },
  {
    timestamps: true,
  },
);

export const Blog = model<TBlog>('Blog', blogSchema);
