import { LuBookUp } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const LatestBlog = ({ blogs }) => {
      // Limit to the first 9 blogs
      const limitedBlogs = blogs?.slice(0, 9);

      return (
            <div className="container-class my-20">
                  <div className="flex flex-col gap-2 mb-5">
                        <h2 className="text-[34px] font-medium">
                              <span className="text-[#00CBB8]">Latest</span>{" "}
                              <span className="text-[#101828]">Blogs</span>
                        </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                        {limitedBlogs?.map((blog, index) => (
                              <Link key={index}>
                                    <div className="drop-shadow-xl bg-[#f8fafc] border flex flex-col h-full">
                                          <figure className="h-[200px] w-full">
                                                <img className="w-full h-full object-cover" src={blog?.image} alt="" />
                                          </figure>
                                          <div className="flex flex-col justify-between flex-1">
                                                <h2 className="mx-5 text-xl font-bold mt-4 mb-6">
                                                      {blog?.title.length > 30 ? blog?.title.slice(0, 30) + '...' : blog?.title}
                                                </h2>
                                                <div className="mx-5 pt-2 pb-6 flex-1">
                                                      <div className="flex items-center justify-between gap-6">
                                                            <p className="flex items-center gap-2 text-gray-500">
                                                                  <RiContactsLine className="text-[#4bc0c0] text-xl font-bold" />{" "}
                                                                  {blog?.author?.name}
                                                            </p>
                                                            <p className="flex items-center gap-2 text-gray-500">
                                                                  <LuBookUp className="text-[#4bc0c0] text-xl font-bold" />{" "}
                                                                  {blog?.categoryName}
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </Link>
                        ))}
                  </div>
            </div>
      );
};

export default LatestBlog;
