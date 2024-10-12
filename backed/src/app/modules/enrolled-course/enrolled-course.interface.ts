import { ObjectId } from 'mongoose';

type TWatchVideo = {
  moduleIndex: number;
  videos: number[];
};

export type TEnrolledCourse = {
  course: ObjectId;
  studentName: string;
  studentEmail: string;
  // completedPercentage?: boolean;
  complete?: {
    watchedVideos?: TWatchVideo[];
    percentage?: number;
  };
};
