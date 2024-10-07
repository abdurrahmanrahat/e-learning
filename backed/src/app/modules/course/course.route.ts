import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseModuleControllers } from '../course-module/course-module.controller';
import { CourseModuleValidations } from '../course-module/course-module.validation';
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
router.get('/email/:email', CourseControllers.getCoursesByEmail);

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

// course module
router.post(
  '/:courseId/course-modules/create-course-module',
  validateRequest(CourseModuleValidations.createCourseModuleValidationSchema),
  CourseModuleControllers.createModule,
);

router.post(
  '/:courseId/course-modules/:moduleId/add-content',
  validateRequest(CourseModuleValidations.createContentValidationSchema),
  CourseModuleControllers.createContent,
);

router.get('/:courseId/course-modules', CourseModuleControllers.getAllModules);

router.get(
  '/:courseId/course-modules/:moduleId',
  CourseModuleControllers.getModuleById,
);

router.patch(
  '/:courseId/course-modules/:moduleId',
  validateRequest(CourseModuleValidations.updateCourseModuleValidationSchema),
  CourseModuleControllers.updateModuleById,
);

router.delete(
  '/:courseId/course-modules/:moduleId',
  CourseModuleControllers.deleteModuleById,
);

export const CourseRoutes = router;
