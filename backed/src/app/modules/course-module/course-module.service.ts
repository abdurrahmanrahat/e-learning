import { TContent, TCourseModule } from './course-module.interface';
import { CourseModule } from './course-module.model';

const createModuleIntoDB = async (
  courseId: string,
  payload: Partial<TCourseModule>,
) => {
  const result = await CourseModule.create({
    course: courseId,
    ...payload,
  });

  return result;
};

const createContentIntoDB = async (
  courseId: string,
  moduleId: string,
  payload: TContent,
) => {
  const result = await CourseModule.findOneAndUpdate(
    { course: courseId, _id: moduleId },
    { $push: { content: payload } },
    { new: true },
  );

  return result;
};

const getAllModulesFromDB = async (courseId: string) => {
  const result = await CourseModule.find({ course: courseId }).populate(
    'course',
  );
  return result;
};

const getModuleByIdFromDB = async (moduleId: string) => {
  const result = await CourseModule.findOne({ _id: moduleId }).populate(
    'course',
  );
  return result;
};

const updateModuleByIdFromDB = async (
  courseId: string,
  moduleId: string,
  payload: Partial<TCourseModule>,
) => {
  const result = await CourseModule.findByIdAndUpdate(
    { _id: moduleId },
    payload,
    {
      new: true,
    },
  );
  return result;
};

const deleteModuleByIdFromDB = async (courseId: string, ModuleId: string) => {
  const result = await CourseModule.findByIdAndDelete({
    _id: ModuleId,
  });
  return result;
};

export const CourseModuleServices = {
  createModuleIntoDB,
  createContentIntoDB,
  getAllModulesFromDB,
  getModuleByIdFromDB,
  updateModuleByIdFromDB,
  deleteModuleByIdFromDB,
};
