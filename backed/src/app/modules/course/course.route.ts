import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseReviewControllers } from '../course-review/course-review.controller';
import { CourseReviewValidations } from '../course-review/course-review.validation';
import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validation';

const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/', CourseControllers.getAllCourses);

router.get('/:courseId', CourseControllers.getSingleCourse);

router.patch(
  '/:courseId',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);

router.delete('/:courseId', CourseControllers.deleteCourse);

// course review route
router.post(
  '/:courseId/reviews/create-review',
  validateRequest(CourseReviewValidations.createCourseReviewValidationSchema),
  CourseReviewControllers.createReview,
);

router.get('/:courseId/reviews', CourseReviewControllers.getAllReviews);

router.get(
  '/:courseId/reviews/:reviewId',
  CourseReviewControllers.getReviewById,
);

router.patch(
  '/:courseId/reviews/:reviewId',
  validateRequest(CourseReviewValidations.updateCourseReviewValidationSchema),
  CourseReviewControllers.updateReviewById,
);

router.delete(
  '/:courseId/reviews/:reviewId',
  CourseReviewControllers.deleteReviewById,
);

export const CourseRoutes = router;
