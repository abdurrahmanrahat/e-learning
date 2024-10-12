import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Course } from '../course/course.model';
import { TEnrolledCourse } from './enrolled-course.interface';
import { EnrolledCourse } from './enrolled-course.model';

const createEnrolledCourseIntoDB = async (
  payload: Partial<TEnrolledCourse>,
) => {
  const result = await EnrolledCourse.create(payload);

  const totalStudents = await EnrolledCourse.countDocuments({
    course: payload.course,
  });

  await Course.findByIdAndUpdate({ _id: payload.course }, { totalStudents });

  return result;
};

const getAllEnrolledCoursesFromDB = async () => {
  const result = await EnrolledCourse.find().populate('course');
  return result;
};

const getSingleEnrolledCourseFromDB = async (enrolledCourseId: string) => {
  const result =
    await EnrolledCourse.findById(enrolledCourseId).populate('course');
  return result;
};

const getEnrolledCoursesByEmailFromDB = async (studentEmail: string) => {
  const result = await EnrolledCourse.find({
    studentEmail: studentEmail,
  }).populate('course');
  return result;
};

const updateEnrolledCourseIntoDB = async (
  enrolledCourseId: string,
  moduleIndex: number,
  videoIndex: number,
  percentage: number,
) => {
  const enrolledCourse = await EnrolledCourse.findById(enrolledCourseId);

  if (!enrolledCourse) {
    throw new AppError(httpStatus.NOT_FOUND, 'Enrolled course not found');
  }

  const watchedVideos = enrolledCourse.complete?.watchedVideos || [];

  const existingModuleVideos = watchedVideos.find(
    (entry) => entry.moduleIndex === moduleIndex,
  );

  if (existingModuleVideos) {
    if (!existingModuleVideos.videos.includes(videoIndex)) {
      existingModuleVideos.videos.push(videoIndex);
    }
  } else {
    watchedVideos.push({
      moduleIndex: moduleIndex,
      videos: [videoIndex],
    });
  }

  // Prepare the complete object to update
  const completeUpdate = {
    watchedVideos,
    percentage,
  };

  // Update the enrolled course in the database using findByIdAndUpdate
  const updatedCourse = await EnrolledCourse.findByIdAndUpdate(
    enrolledCourseId,
    { complete: completeUpdate },
    { new: true },
  );

  return updatedCourse;
};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
  getAllEnrolledCoursesFromDB,
  getSingleEnrolledCourseFromDB,
  getEnrolledCoursesByEmailFromDB,
  updateEnrolledCourseIntoDB,
};
