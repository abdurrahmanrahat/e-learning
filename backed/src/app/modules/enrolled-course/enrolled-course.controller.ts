import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { EnrolledCourseServices } from './enrolled-course.service';

const createEnrolledCourse = catchAsync(async (req, res) => {
  const enrolledCourseData = req.body;

  const result =
    await EnrolledCourseServices.createEnrolledCourseIntoDB(enrolledCourseData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Enrolled course make successfully',
    data: result,
  });
});

const getAllEnrolledCourses = catchAsync(async (req, res) => {
  const result = await EnrolledCourseServices.getAllEnrolledCoursesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Enrolled Courses get successfully',
    data: result,
  });
});

const getEnrolledCourseById = catchAsync(async (req, res) => {
  const { enrolledCourseId } = req.params;
  const result =
    await EnrolledCourseServices.getSingleEnrolledCourseFromDB(
      enrolledCourseId,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Enrolled Course fetched successfully',
    data: result,
  });
});

const getEnrolledCourseByEmail = catchAsync(async (req, res) => {
  const { studentEmail } = req.params;
  const result =
    await EnrolledCourseServices.getEnrolledCoursesByEmailFromDB(studentEmail);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Enrolled Courses fetched successfully',
    data: result,
  });
});

const updateEnrolledCourse = catchAsync(async (req, res) => {
  const { enrolledCourseId } = req.params;
  const { moduleIndex, videoIndex, percentage } = req.body;

  const result = await EnrolledCourseServices.updateEnrolledCourseIntoDB(
    enrolledCourseId,
    moduleIndex,
    videoIndex,
    percentage,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update enrolled Courses fetched successfully',
    data: result,
  });
});

export const EnrolledCourseControllers = {
  createEnrolledCourse,
  getAllEnrolledCourses,
  getEnrolledCourseById,
  getEnrolledCourseByEmail,
  updateEnrolledCourse,
};
