/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TUser } from './user.interface';
import { User } from './user.model';

// post
const createUserInfoDb = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

// get
const getAllUsersFromDB = async () => {
  const result = await User.find();

  return result;
};

const getSingleUserFromDB = async (email: string) => {
  const result = await User.findOne({ email: email });

  if (!result) {
    throw new Error('User not found');
  }

  // Convert the Mongoose document to a plain object and safely remove password
  const userObject = result.toObject(); // Ensure it's a plain object
  const { password, ...user } = userObject;

  return user;
};

const updateUserIntoDB = async (email: string, payload: Partial<TUser>) => {
  const result = await User.findOneAndUpdate({ email: email }, payload, {
    new: true,
  });
  return result;
};

export const UserServices = {
  createUserInfoDb,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
};
