import { Link } from "react-router-dom";
import Rating from "./Rating";
import { FaRegClock } from "react-icons/fa6";
import { useState } from "react";
import Loader from "./Loader";

const CourseCard = ({ course }) => {
  const [imageLoading, setImageLoading] = useState(false);
  const {
    _id,
    title,
    category,
    image,
    instructorImg,
    instructorName,
    price,
    description,
    courseDuration,
    rating,
    enrollment,
  } = course || {};

  return (
    <Link to={`/courseDetails/${_id}`}>
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
          <div className=" bg-white w-fit px-5 py-2 absolute top-5 right-5 rounded">
            <span className="font-medium text-[#667085] flex items-center gap-2 font-nunito text-sm">
              <span className="text-lg">
                <FaRegClock />
              </span>
              {courseDuration}
            </span>
          </div>
        </figure>
        {/* card body */}
        <div className="flex-1 flex flex-col justify-between h-[45%]">
          {" "}
          {/* Ensure the body takes up available space */}
          <span className="text-[#00CBB8] text-sm font-semibold mb-3 flex items-center gap-2">
            {category}
          </span>
          {/* Conditionally truncate the title */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl text-[#2F327D] font-bold font-nunito">
              {title?.length > 20 ? title.slice(0, 20) + "..." : title}
            </h2>
          </div>
          <p className="mb-3 text-[#6E7697] line-clamp-3">
            {description?.length > 80
              ? description.slice(0, 50) + "..."
              : description}
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
              src={instructorImg}
              alt="instructor"
            />
            <div>
              <h4 className="text-[#2F327D] font-medium">{instructorName}</h4>
              <span className="text-[#667085] text-sm">
                {enrollment} Enrolled
              </span>
            </div>
          </div>

          {/* price */}
          <p className="text-[#00CBB8] text-2xl font-bold font-nunito">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
