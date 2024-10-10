import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthControllers } from './auth.controller';
import { AuthValidations } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidations.createAuthValidationSchema),
  AuthControllers.loginUser,
);

router.get('/google', AuthControllers.googleLogin);

export const AuthRoutes = router;
