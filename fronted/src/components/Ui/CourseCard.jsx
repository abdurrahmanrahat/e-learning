import { GoPerson } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const CourseCard = ({ popularCourse }) => {
  const {
    _id,
    title,
    description,
    bigDescription,
    instructorName,
    instructorImg,
    instructorEmail,
    courseDuration,
    image,
    category,
    averageRatings,
    price,
  } = popularCourse || {};

  return (
    <div className="border flex flex-col justify-between">
      <figure className="overflow-hidden relative">
        <img
          className="hover:scale-110 transition-all duration-500"
          src={image}
          alt=""
        />
        <div className="bg-[#49bbbd] w-fit px-6 py-2 absolute bottom-0 right-0">
          <span className="text-white font-medium font-nunito text-xl">
            <span className="text-2xl">$</span>
            {price}
          </span>
        </div>
      </figure>
      <div className="p-4">
        <span className="text-[#6E7697] flex items-center gap-2">
          <GoPerson className="text-xl" /> {instructorName}
        </span>
        <h2 className="text-2xl text-[#2F327D] hover:text-[#00CBB8] font-bold font-nunito mb-3 transition delay-100 cursor-pointer">
          {title}
        </h2>
        <p className="mb-4 text-[#6E7697]">{description}</p>
        <div className="flex items-center justify-between ">
          <div className="flex gap-1 justify-center text-[#6E7697]">
            <Rating value={averageRatings} />
            <span>({averageRatings})</span>
          </div>
          <span className="flex items-center gap-2 text-[#6E7697]">
            <HiUserGroup className="text-xl" /> {courseDuration}
          </span>
        </div>
        <Link to={`/courseDetails/${_id}`}>
          <button className="mt-6 border-[2px] w-full text-[#2F327D] hover:text-white px-7 py-3 hover:bg-[#23BDEE] hover:border-[#23BDEE] transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
