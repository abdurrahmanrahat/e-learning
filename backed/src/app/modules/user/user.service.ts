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

const getSingleUserFromDB = async (userId: string) => {
  const result = await User.findById(userId);
  return result;
};

export const UserServices = {
  createUserInfoDb,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
