import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const BlogData = req.body;

  const result = await BlogServices.createBlogIntoDB(BlogData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getAllBlogsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs get successfully',
    data: result,
  });
});

const getBlogsByEmail = catchAsync(async (req: Request, res: Response) => {
  const { authorEmail } = req.params;
  const result = await BlogServices.getBlogsByEmailFromDB(
    authorEmail as string,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs get successfully',
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { blogId } = req.params;

  const result = await BlogServices.getSingleBlogFromDB(blogId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog get successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { blogId } = req.params;
  const updatedBlogData = req.body;

  const result = await BlogServices.updateBlogIntoDB(blogId, updatedBlogData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { blogId } = req.params;

  const result = await BlogServices.deleteBlogFromDB(blogId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getBlogsByEmail,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
