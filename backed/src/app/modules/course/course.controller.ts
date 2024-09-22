import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { CourseServices } from './course.service';

const createCourse = catchAsync(async (req: Request, res: Response) => {
  const courseData = req.body;

  const result = await CourseServices.createCourseIntoDB(courseData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully',
    data: result,
  });
});

export const CourseControllers = {
  createCourse,
};
