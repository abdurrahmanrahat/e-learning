import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (BlogData: TBlog) => {
  const result = await Blog.create(BlogData);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getBlogsByEmailFromDB = async (email: string) => {
  const result = await Blog.find({ 'author_details.authorEmail': email });
  return result;
};

const getSingleBlogFromDB = async (blogId: string) => {
  const result = await Blog.findById(blogId);
  return result;
};

const updateBlogIntoDB = async (blogId: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate({ _id: blogId }, payload, {
    new: true,
  });

  return result;
};

const deleteBlogFromDB = async (blogId: string) => {
  const result = await Blog.findByIdAndDelete(blogId);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getBlogsByEmailFromDB,
  getSingleBlogFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
