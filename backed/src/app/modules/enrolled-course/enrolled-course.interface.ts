import { ObjectId } from 'mongoose';

// type TWatchVideo = {
//   moduleIndex: number;
//   videos: number[];
// };

export type TEnrolledCourse = {
  course: ObjectId;
  studentName: string;
  studentEmail: string;
  // complete?: {
  //   watchedVideos?: TWatchVideo[];
  //   percentage?: number;
  // };
  complete?: {
    moduleIndex: number;
    videoIndex: number;
    percentage: number;
  };
};
