/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  photoUrl: string;
  gender: 'male' | 'female' | 'others';
  password: string;
  role?: 'student' | 'instructor' | 'admin';
  isDeleted: boolean;
};

// creating custom statics method
export interface UserStaticModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(id: string): Promise<TUser | null>;

  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
