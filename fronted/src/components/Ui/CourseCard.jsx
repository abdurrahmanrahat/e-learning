import { Link } from "react-router-dom";
import Rating from "./Rating";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";


const CourseCard = ({ popularCourse }) => {
  const {
    _id, title, category, image, instructorImg, instructorName, price, description, courseDuration, rating, reviews, enrollment
  } = popularCourse || {};

  // Function to conditionally truncate the title if it exceeds 20 characters
  // const sliceTitle = (title) => {
  //   return title.length > 20 ? title.slice(0, 20) + '...' : title;
  // };

  return (
    <Link to={`/courseDetails/${_id}`}>
      <div className="p-5 shadow-md rounded-lg flex flex-col justify-between h-full">

        {/* card image */}
        <figure className="overflow-hidden relative mb-5">
          <img
            className="w-full h-[240px] object-cover rounded"
            src={image}
            alt="course"
          />
          <div className=" bg-white w-fit px-5 py-2 absolute top-5 right-5 rounded">
            <span className="font-medium text-[#667085] flex items-center gap-2 font-nunito text-sm">
              <span className="text-lg"><FaRegClock /></span>
              {courseDuration}
            </span>
          </div>
        </figure>

        {/* card body */}
        <div className="flex-1">
          <span className="text-[#00CBB8] text-sm font-semibold mb-3 flex items-center gap-2">
            {category}
          </span>

          {/* Conditionally truncate the title */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl text-[#2F327D] font-bold font-nunito">
              {title?.length > 20 ? title.slice(0, 18) + '...' : title}
            </h2>
            <span className="text-3xl"><MdOutlineArrowOutward /></span>
          </div>

          <p className="mb-3 text-[#6E7697] line-clamp-3">
            {description}
          </p>

          <div className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
            <span className="text-[#00CBB8] text-sm font-medium">({rating})</span>
            <Rating value={rating} />
            <span className="text-sm text-[#969696]">({reviews})</span>
          </div>
        </div>

        <div>
          {/* author */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img className="w-12 h-12 rounded-full" src={instructorImg} alt="instructor" />
              <div>
                <h4 className="text-[#2F327D] font-medium">{instructorName}</h4>
                <span className="text-[#667085] text-sm">{enrollment} Enrolled</span>
              </div>
            </div>

            {/* price */}
            <p className="text-[#00CBB8] text-2xl font-bold font-nunito">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
