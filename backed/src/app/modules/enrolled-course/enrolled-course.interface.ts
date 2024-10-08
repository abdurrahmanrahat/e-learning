import { ObjectId } from 'mongoose';

export type TEnrolledCourse = {
  course: ObjectId;
  studentName: string;
  studentEmail: string;
  completedPercentage?: boolean;
};
