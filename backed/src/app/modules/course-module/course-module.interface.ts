import { ObjectId } from 'mongoose';

export type TContent = {
  title: string;
  duration: string;
  contentLink: string;
};

export type TCourseModule = {
  course: ObjectId;
  moduleName: string;
  description: string;
  notes: string;
  resources: string;
  content: TContent[];
};
