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

  try {
    const review = await CourseReview.create({
      course: course._id,
      ...payload,
    });

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
    } else {
      await Course.findByIdAndUpdate(
        { _id: courseId },
        { totalRatings: reviewsCount },
      );
    }

    return review;
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Error found');
  }
};

export const CourseReviewServices = {
  createReviewIntoDB,
};
