import { model, Schema } from 'mongoose';
import { TCourse } from './course.interface';

const courseSchema = new Schema<TCourse>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      // unique: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    instructorImg: {
      type: String,
      required: [true, 'Instructor image is required'],
    },
    instructorName: {
      type: String,
      required: [true, 'Instructor name is required'],
    },
    instructorEmail: {
      type: String,
      required: [true, 'Instructor email is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    bigDescription: {
      type: String,
      required: [true, 'Big description is required'],
    },
    courseDuration: {
      type: String,
      required: [true, 'Course duration is required'],
    },
    totalRatings: {
      type: Number,
      default: 0,
    },
    averageRatings: {
      type: Number,
      default: 0,
    },
    totalStudents: {
      type: Number,
      default: 0,
    },
    // status: {
    //   type: String,
    //   enum: ['pending', 'approved', 'rejected'],
    //   default: 'pending',
    // },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Course = model<TCourse>('Course', courseSchema);
