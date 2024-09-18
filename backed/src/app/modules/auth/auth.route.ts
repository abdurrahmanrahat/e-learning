import express from 'express';
import validateRequest from '../../middlewares/ValidateRequest';
import { AuthControllers } from './auth.controller';
import { AuthValidations } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidations.createAuthValidationSchema),
  AuthControllers.loginUser,
);

export const AuthRoutes = router;
