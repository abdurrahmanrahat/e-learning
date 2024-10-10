import axios from 'axios';
import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createJwtToken, googleClient } from './auth.utils';

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
  const jwtPayload = {
    name: existingUser.name,
    email: existingUser?.email,
    role: existingUser.role,
    photoUrl: existingUser.photoUrl,
    gender: existingUser.gender,
  };

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

const googleLoginIntoDB = async (code: string) => {
  const oauth2Client = googleClient();
  const googleRes = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(googleRes.tokens);

  const userRes = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`,
  );

  const { name, email, picture } = userRes.data;

  const newUser = {
    name: name,
    email: email,
    photoUrl: picture,
    gender: 'male',
    password: '123456',
  };

  // check if user already exists or not
  const existingUser = await User.isUserExistsByEmail(email);

  let result;
  if (!existingUser) {
    result = await User.create(newUser);
  } else {
    result = existingUser;
  }

  // Generate JWT token
  const jwtPayload = {
    name: result.name,
    email: result?.email,
    role: result.role,
    photoUrl: result.photoUrl,
    gender: result.gender,
  };

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
  googleLoginIntoDB,
};
