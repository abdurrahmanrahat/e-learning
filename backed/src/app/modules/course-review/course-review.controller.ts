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

const getAllReviews = catchAsync(async (req, res) => {
  const { courseId } = req.params;

  const result = await CourseReviewServices.getAllReviewsFromDB(courseId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course reviews get successfully',
    data: result,
  });
});

const getReviewById = catchAsync(async (req, res) => {
  const { reviewId } = req.params;
  const result = await CourseReviewServices.getReviewByIdFromDB(reviewId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review fetched successfully',
    data: result,
  });
});

const updateReviewById = catchAsync(async (req, res) => {
  const { reviewId } = req.params;
  const updatedData = req.body;

  const result = await CourseReviewServices.updateReviewByIdFromDB(
    reviewId,
    updatedData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review updated successfully',
    data: result,
  });
});

const deleteReviewById = catchAsync(async (req, res) => {
  const { courseId, reviewId } = req.params;

  const result = await CourseReviewServices.deleteReviewByIdFromDB(
    courseId,
    reviewId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review deleted successfully',
    data: result,
  });
});

export const CourseReviewControllers = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReviewById,
  deleteReviewById,
};
