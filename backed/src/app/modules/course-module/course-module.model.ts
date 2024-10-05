import { Schema, model } from 'mongoose';
import { TContent, TCourseModule } from './course-module.interface';

const contentSchema = new Schema<TContent>({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
  },
  contentLink: {
    type: String,
    required: [true, 'Content link is required'],
  },
});

const courseModuleSchema = new Schema<TCourseModule>(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course', // Refers to the 'Course' model
      required: [true, 'Course is required'],
    },
    moduleName: {
      type: String,
      required: [true, 'Module name is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    notes: {
      type: String,
      required: [true, 'Notes are required'],
    },
    resources: {
      type: String,
      required: [true, 'Resources are required'],
    },
    content: {
      type: [contentSchema], // Array of TContent
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const CourseModule = model<TCourseModule>(
  'CourseModule',
  courseModuleSchema,
);
