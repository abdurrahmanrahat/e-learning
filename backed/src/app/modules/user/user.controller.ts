import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const user = req.body;

  const result = await UserServices.createUserInfoDb(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User register successfully',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users get successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const result = await UserServices.getSingleUserFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User get successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
};
