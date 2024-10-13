import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import useDateFormatter from "../../Hooks/getValues/useDateFormatter";
import useBlogById from "../../Hooks/api/useBlogById";

const BlogCard = ({ blogId }) => {
  const [imageLoading, setImageLoading] = useState(false);
  const { instructorBlog } = useBlogById(blogId);

  console.log(instructorBlog);

  const {
    _id,
    title,
    image,
    category,
    shortDescription,
    author_details,
    date,
  } = instructorBlog || {};
  const createdDate = useDateFormatter(date);

  return (
    <Link to={`/blog-details/${_id}`}>
      <div className="group p-4 shadow-myCustomShadow rounded-xl flex flex-col justify-between gap-2 h-[450px]">
        {" "}
        {/* card image */}
        <figure className="overflow-hidden relative h-[45%]">
          {image && (
            <img
              onLoad={() => setImageLoading(true)}
              className="w-full h-full object-cover rounded group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
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
        <div className="flex flex-col gap-1 justify-between h-[45%]">
          {" "}
          {/* Ensure the body takes up available space */}
          <span className="text-[#00CBB8] text-sm font-semibold flex items-center gap-2">
            {category}
          </span>
          {/* Conditionally truncate the title */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-[#2F327D] font-bold font-nunito">
              {title?.length > 20 ? title.slice(0, 30) + "..." : title}
            </h2>
          </div>
          <div
            className="description-content prose leading-loose"
            dangerouslySetInnerHTML={{ __html: shortDescription?.slice(0, 40) }}
          ></div>
          <div className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
            {/* <Rating value={rating} />
            <span className="text-sm text-[#969696]">
              {rating ? `(${rating})` : "(0)"}
            </span> */}
          </div>
        </div>
        {/* author */}
        <div className="flex justify-between items-center h-[10%]">
          <div className="flex items-center gap-2">
            <img
              className="w-12 h-12 rounded-full"
              src={author_details?.authorImage}
              alt="instructor"
            />
            <div>
              <h4 className="text-[#2F327D] font-medium">
                {author_details?.authorName}
              </h4>
            </div>
          </div>

          <div>
            <span className="text-[#6E7697] text-xs">Publish Date:</span>
            <p className="text-[#00CBB8] text-sm font-bold font-nunito">
              {createdDate}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
