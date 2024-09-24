import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';
import { UserValidations } from './user.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidations.createUserValidationSchema),
  UserControllers.createUser,
);

router.get('/', UserControllers.getAllUsers);

router.get('/:userId', UserControllers.getSingleUser);

export const UserRoutes = router;
