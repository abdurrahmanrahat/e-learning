import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { CourseModuleServices } from './course-module.service';

const createModule = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const moduleData = req.body;

  const result = await CourseModuleServices.createModuleIntoDB(
    courseId,
    moduleData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course Module upload successfully',
    data: result,
  });
});

const createContent = catchAsync(async (req, res) => {
  const { courseId, moduleId } = req.params;
  const contentData = req.body;

  const result = await CourseModuleServices.createContentIntoDB(
    courseId,
    moduleId,
    contentData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course content upload successfully',
    data: result,
  });
});

const getAllModules = catchAsync(async (req, res) => {
  const { courseId } = req.params;

  const result = await CourseModuleServices.getAllModulesFromDB(courseId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course Modules get successfully',
    data: result,
  });
});

const getModuleById = catchAsync(async (req, res) => {
  const { moduleId } = req.params;
  const result = await CourseModuleServices.getModuleByIdFromDB(moduleId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Module fetched successfully',
    data: result,
  });
});

const updateModuleById = catchAsync(async (req, res) => {
  const { courseId, moduleId } = req.params;
  const updatedData = req.body;

  const result = await CourseModuleServices.updateModuleByIdFromDB(
    courseId,
    moduleId,
    updatedData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Module updated successfully',
    data: result,
  });
});

const deleteModuleById = catchAsync(async (req, res) => {
  const { courseId, moduleId } = req.params;

  const result = await CourseModuleServices.deleteModuleByIdFromDB(
    courseId,
    moduleId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Module deleted successfully',
    data: result,
  });
});

export const CourseModuleControllers = {
  createModule,
  createContent,
  getAllModules,
  getModuleById,
  updateModuleById,
  deleteModuleById,
};
