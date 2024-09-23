import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Course } from '../course/course.model';
import { TCourseReview } from './course-review.interface';
import { CourseReview } from './course-review.model';

const createReviewIntoDB = async (
  courseId: string,
  payload: Partial<TCourseReview>,
) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new AppError(httpStatus.NOT_FOUND, 'Course not found.');
  }

  // start session
  const session = await CourseReview.startSession();

  try {
    session.startTransaction();

    const review = await CourseReview.create(
      [
        {
          course: course._id,
          ...payload,
        },
      ],
      { session },
    );

    const reviewsCount = await CourseReview.countDocuments({
      course: course._id,
    }).session(session);

    // for average ratings
    const averageRatings = await CourseReview.aggregate([
      {
        $match: { course: course._id },
      },
      {
        $group: { _id: '$course', averageRating: { $avg: '$rating' } },
      },
    ]).session(session);

    if (averageRatings.length > 0) {
      const avgRating = averageRatings[0].averageRating;

      const avgRatingWithTwoDecimal = parseFloat(avgRating.toFixed(2));

      await Course.findByIdAndUpdate(
        { _id: courseId },
        { totalRatings: reviewsCount, averageRatings: avgRatingWithTwoDecimal },
        { session },
      );
    }

    // end session
    await session.commitTransaction();
    session.endSession();

    return review[0];
  } catch (error) {
    // end session
    await session.commitTransaction();
    session.endSession();

    throw new AppError(httpStatus.BAD_REQUEST, 'Error found');
  }
};

const getAllReviewsFromDB = async (courseId: string) => {
  const result = await CourseReview.find({ course: courseId });
  return result;
};

const getReviewByIdFromDB = async (reviewId: string) => {
  const result = await CourseReview.findOne({ _id: reviewId });
  return result;
};

const updateReviewByIdFromDB = async (
  reviewId: string,
  payload: Partial<TCourseReview>,
) => {
  const result = await CourseReview.findByIdAndUpdate(
    { _id: reviewId },
    payload,
    {
      new: true,
    },
  );
  console.log(result);

  return result;
};

const deleteReviewByIdFromDB = async (courseId: string, reviewId: string) => {
  const course = await Course.findById(courseId);

  if (!course) {
    throw new AppError(httpStatus.NOT_FOUND, 'Course not found.');
  }

  const result = await CourseReview.findByIdAndDelete({ _id: reviewId });

  const reviewsCount = await CourseReview.countDocuments({
    course: course._id,
  });

  // for average ratings
  const averageRatings = await CourseReview.aggregate([
    {
      $match: { course: course._id },
    },
    {
      $group: { _id: '$course', averageRating: { $avg: '$rating' } },
    },
  ]);

  if (averageRatings.length > 0) {
    const avgRating = averageRatings[0].averageRating;

    const avgRatingWithTwoDecimal = parseFloat(avgRating.toFixed(2));

    await Course.findByIdAndUpdate(
      { _id: courseId },
      { totalRatings: reviewsCount, averageRatings: avgRatingWithTwoDecimal },
    );
  }

  return result;
};

export const CourseReviewServices = {
  createReviewIntoDB,
  getAllReviewsFromDB,
  getReviewByIdFromDB,
  updateReviewByIdFromDB,
  deleteReviewByIdFromDB,
};
