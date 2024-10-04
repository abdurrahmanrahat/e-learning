import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { EnrolledCourseControllers } from './enrolled-course.controller';
import { EnrolledCourseValidations } from './enrolled-course.validation';

const router = express.Router();

router.post(
  '/create-enrolled-course',
  validateRequest(
    EnrolledCourseValidations.createEnrolledCourseValidationSchema,
  ),
  EnrolledCourseControllers.createEnrolledCourse,
);

router.get('/', EnrolledCourseControllers.getAllEnrolledCourses);

router.get(
  '/email/:studentEmail',
  EnrolledCourseControllers.getEnrolledCourseByEmail,
);

router.get(
  '/:enrolledCourseId',
  EnrolledCourseControllers.getEnrolledCourseById,
);

export const EnrolledCourseRoutes = router;
