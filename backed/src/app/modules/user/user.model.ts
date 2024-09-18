import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
import { TUser, UserStaticModel } from './user.interface';

const userSchema = new Schema<TUser, UserStaticModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    photoUrl: { type: String, required: true },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'others'],
    },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ['student', 'instructor', 'admin'],
      default: 'student',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// check user exists or not : FOR LOGIN
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  const existingUser = await User.findOne({ email });
  return existingUser;
};

// check for password matched : FOR LOGIN
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  const isPasswordValid = await bcrypt.compare(
    plainTextPassword,
    hashedPassword,
  );

  return isPasswordValid;
};

// pre save middleware : FOR REGISTRATION
userSchema.pre('save', async function (next) {
  // hashing password and saved into db
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// post save middleware : FOR REGISTRATION
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// model
export const User = model<TUser, UserStaticModel>('User', userSchema);
