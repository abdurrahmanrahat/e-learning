import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoryBlogCard = ({ post,index }) => {

      return (
            <div
                  key={index}
                  className="drop-shadow-xl bg-[#f8fafc] border h-[560px]"
            >
                  <img className="w-full h-[260px]" src={post.img} alt="" />
                  <div className="mx-5 pt-2 pb-10">
                        <h2 className="text-xl font-bold mt-4 mb-6">
                              {post.title}
                        </h2>
                        <p>{post.shortDescription}</p>
                        <div className="flex items-center justify-between mt-4">
                              <p className=" text-xl">
                                    #{" "}
                                    <span className="text-[#4bc0c0] font-bold">
                                          {post.categoryName}
                                    </span>
                              </p>
                              <Link to={`/blog-details/${post.id}`}>
                                    <button className="hover:text-[#4bc0c0] flex items-center gap-2">
                                          See Details{" "}
                                          <span>
                                                <FaArrowRightLong className="text-[#4bc0c0]" />
                                          </span>
                                    </button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default CategoryBlogCard;