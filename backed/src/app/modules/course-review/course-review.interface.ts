import { ObjectId } from 'mongoose';

export type TCourseReview = {
  course: ObjectId;
  name: string;
  email: string;
  photoUrl: string;
  rating: number;
  comment: string;
};
