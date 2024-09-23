import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseReviewControllers } from '../course-review/course-review.controller';
import { CourseControllers } from './course.controller';
import { CourseValidation } from './course.validation';

const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidation.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/', CourseControllers.getAllCourses);

router.get('/:courseId', CourseControllers.getSingleCourse);

router.patch(
  '/:courseId',
  validateRequest(CourseValidation.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);

router.delete('/:courseId', CourseControllers.deleteCourse);

// course review route
router.post(
  '/:courseId/reviews/create-review',
  CourseReviewControllers.createReview,
);

export const CourseRoutes = router;
