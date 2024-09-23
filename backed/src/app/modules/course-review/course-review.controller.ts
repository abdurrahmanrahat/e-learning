import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { CourseReviewServices } from './course-review.service';

const createReview = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const reviewData = req.body;

  const result = await CourseReviewServices.createReviewIntoDB(
    courseId,
    reviewData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course review make successfully',
    data: result,
  });
});

export const CourseReviewControllers = {
  createReview,
};
