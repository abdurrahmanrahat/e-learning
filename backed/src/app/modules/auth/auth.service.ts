import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createJwtToken } from './auth.utils';

// post
const loginUserIntoDb = async (payload: TLoginUser) => {
  // check if user already exists or not
  const existingUser = await User.isUserExistsByEmail(payload.email);

  if (!existingUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found.');
  }

  // compare hashed password
  const isPasswordValid = await User.isPasswordMatched(
    payload.password,
    existingUser.password,
  );

  if (!isPasswordValid) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Password is not match.');
  }

  // Generate JWT token
  const jwtPayload = { email: existingUser?.email, role: existingUser.role };

  const accessToken = createJwtToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createJwtToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthServices = {
  loginUserIntoDb,
};
