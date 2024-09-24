import { Schema, model } from 'mongoose';
import { TCourseReview } from './course-review.interface';

const courseReviewSchema = new Schema<TCourseReview>(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course', // Refers to the 'Course' model
      required: [true, 'Course is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    photoUrl: {
      type: String,
      required: [true, 'Photo URL is required'],
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const CourseReview = model<TCourseReview>(
  'CourseReview',
  courseReviewSchema,
);
