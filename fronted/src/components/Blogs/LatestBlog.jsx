import { useEffect, useState } from "react";
import { LuBookUp } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const LatestBlog = () => {

      // blog latest category
      const [blogs, setBlogs] = useState();
      useEffect(() => {
            fetch("/blog.json")
                  .then((res) => res.json())
                  .then((data) => setBlogs(data));
      }, []);
      console.log(blogs);

      return (
            <div className="container-class my-20">
                  <div className="flex flex-col gap-2 mb-5">
                        <h2 className={`text-[34px] font-medium`}>
                              <span className="text-[#00CBB8]">Latest</span>{" "}
                              <span className="text-[#101828]">Blogs</span>
                        </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                        {blogs?.map((item, index) => (
                              <Link key={index}>
                                    <div className="drop-shadow-xl bg-[#f8fafc] border">
                                          <img src={item.image} alt="" />
                                          <div className="mx-5 pt-2 pb-10">
                                                <h2 className="text-xl font-bold mt-4 mb-6">
                                                      {item.title}
                                                </h2>
                                                <div className="flex items-center gap-6">
                                                      <p className="flex items-center gap-2 text-gray-500">
                                                            <RiContactsLine className="text-[#4bc0c0] text-xl font-bold" />{" "}
                                                            {item.admin}
                                                      </p>
                                                      <p className="flex items-center gap-2 text-gray-500">
                                                            <LuBookUp className="text-[#4bc0c0] text-xl font-bold" />{" "}
                                                            {item.category}
                                                      </p>
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