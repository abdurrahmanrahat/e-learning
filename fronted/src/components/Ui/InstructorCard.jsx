import { FaArrowRightLong, FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function InstructorCard({ item }) {
  const { id, name, image, title, ratings, numOfCourses, about } = item;

  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
      {/*  <!-- Image --> */}
      <div className="w-full flex justify-center items-center">
        <figure>
          <img src={image} alt={name} className="w-full" />
        </figure>
      </div>
      {/*  <!-- Body--> */}
      <div className="p-6">
        <header className="mb-4 flex flex-col items-center gap-1">
          <h3 className="text-xl font-medium text-slate-700">{name}</h3>
          <p className="text-sm text-slate-400">{title}</p>
          <span className="text-center">
            <Rating value={ratings} />
          </span>
        </header>
        <p className="text-center">{about.slice(0, 110)} . . .</p>
      </div>
      {/*  <!-- Action base sized link button --> */}
      <div className="flex justify-between items-center gap-2 p-6 pt-0">
        <div className="flex gap-2 items-center justify-center">
          <span>
            <FaCirclePlay />
          </span>
          <span>{numOfCourses} Courses</span>
        </div>
        <Link to={`/instructor-details/${id}`}>
          <button className="inline-flex h-10 items-center justify-center gap-2 hover:text-[#00CBB8]">
            <span>Details</span>
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
