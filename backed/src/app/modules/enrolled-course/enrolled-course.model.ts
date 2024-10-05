import { model, Schema } from 'mongoose';
import { TEnrolledCourse } from './enrolled-course.interface';

const enrolledCourseSchema = new Schema<TEnrolledCourse>(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course is required.'],
    },
    studentName: {
      type: String,
      required: [true, 'Student Name is required'],
    },
    studentEmail: {
      type: String,
      required: [true, 'StudentEmail is required'],
    },
    completedPercentage: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const EnrolledCourse = model<TEnrolledCourse>(
  'EnrolledCourse',
  enrolledCourseSchema,
);
