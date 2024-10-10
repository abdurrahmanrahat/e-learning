import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogControllers } from './blog.controller';
import { BlogValidations } from './blog.validation';

const router = express.Router();

router.post(
  '/create-blog',
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.createBlog,
);

router.get('/', BlogControllers.getAllBlogs);

router.get('/:blogId', BlogControllers.getSingleBlog);

router.get('/email/:authorEmail', BlogControllers.getBlogsByEmail);

router.patch(
  '/:blogId',
  validateRequest(BlogValidations.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);

router.delete('/:blogId', BlogControllers.deleteBlog);

export const BlogRoutes = router;
