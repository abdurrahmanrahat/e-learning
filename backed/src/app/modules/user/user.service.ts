import { TUser } from './user.interface';
import { User } from './user.model';

// post
const createUserInfoDb = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

export const UserServices = {
  createUserInfoDb,
};
