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
  const result = await EnrolledCourse.find();
  return result;
};

const getSingleEnrolledCourseFromDB = async (enrolledCourseId: string) => {
  const result = await EnrolledCourse.findById(enrolledCourseId);
  return result;
};

const getEnrolledCoursesByEmailFromDB = async (studentEmail: string) => {
  const result = await EnrolledCourse.find({ studentEmail: studentEmail });
  return result;
};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
  getAllEnrolledCoursesFromDB,
  getSingleEnrolledCourseFromDB,
  getEnrolledCoursesByEmailFromDB,
};
