import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { FaRegClock } from "react-icons/fa6";
import Rating from "./Rating";

const BlogCard = ({ blog }) => {

      const [imageLoading, setImageLoading] = useState(false);

      const { id, title, image, categoryName, shortDescription, bigDescription, author, publishDate, rating
      } = blog || {};

      return (
            <Link to={`/blog-details/${id}`}>
                  <div className="group p-6 shadow-myCustomShadow rounded-xl flex flex-col justify-between h-[500px]">
                        {" "}
                        {/* card image */}
                        <figure className="overflow-hidden relative mb-5 h-[45%]">
                              {image && (
                                    <img
                                          onLoad={() => setImageLoading(true)}
                                          className="w-full object-cover rounded group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
                                          src={image}
                                          alt="course"
                                    />
                              )}
                              {!imageLoading && (
                                    <div className="flex justify-center items-center my-2">
                                          <Loader />
                                    </div>
                              )}

                        </figure>
                        {/* card body */}
                        <div className="flex-1 flex flex-col justify-between h-[45%]">
                              {" "}
                              {/* Ensure the body takes up available space */}
                              <span className="text-[#00CBB8] text-sm font-semibold mb-3 flex items-center gap-2">
                                    {categoryName}
                              </span>
                              {/* Conditionally truncate the title */}
                              <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-2xl text-[#2F327D] font-bold font-nunito">
                                          {title?.length > 20 ? title.slice(0, 20) + "..." : title}
                                    </h2>
                              </div>
                              <p className="mb-3 text-[#6E7697] line-clamp-3">
                                    {shortDescription?.length > 80
                                          ? shortDescription?.slice(0, 50) + "..."
                                          : shortDescription}
                              </p>
                              <div className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
                                    <Rating value={rating} />
                                    <span className="text-sm text-[#969696]">{rating ? `(${rating})` : '(0)'}</span>
                              </div>
                        </div>
                        {/* author */}
                        <div className="flex justify-between items-center h-[10%]">
                              <div className="flex items-center gap-2">
                                    <img
                                          className="w-12 h-12 rounded-full"
                                          src={author?.profileImage}
                                          alt="instructor"
                                    />
                                    <div>
                                          <h4 className="text-[#2F327D] font-medium">{author?.name}</h4>

                                    </div>
                              </div>

                              <div>
                                    <span className="text-[#6E7697] text-xs">Publish Date:</span>
                                    <p className="text-[#00CBB8] text-sm font-bold font-nunito">
                                          {publishDate}
                                    </p>
                              </div>
                        </div>
                  </div>
            </Link>
      );
};

export default BlogCard;