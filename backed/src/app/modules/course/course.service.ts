import { QueryBuilder } from '../../builder/QueryBuilder';
import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (courseData: TCourse) => {
  const result = await Course.create(courseData);
  return result;
};

const getAllCoursesFromDB = async (payload: Record<string, unknown>) => {
  // const result = await Course.find();
  // return result;

  const courseQuery = new QueryBuilder(Course.find(), payload)
    .search(['title', 'category'])
    .paginate()
    .filter();
  // .sort();

  const result = await courseQuery.modelQuery;

  return result;
};

const getSingleCourseFromDB = async (courseId: string) => {
  const result = await Course.findById(courseId);
  return result;
};

const updateCourseIntoDB = async (
  courseId: string,
  payload: Partial<TCourse>,
) => {
  const result = await Course.findByIdAndUpdate({ _id: courseId }, payload, {
    new: true,
  });

  return result;
};

const deleteCourseFromDB = async (courseId: string) => {
  const result = await Course.findByIdAndDelete(courseId);
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  updateCourseIntoDB,
  deleteCourseFromDB,
};
