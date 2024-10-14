import { FaArrowRightLong, FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function InstructorCard({ item }) {
  const { name, email, photoUrl, title, ratings, numOfCourses, about } = item;

  return (
    <div className="group p-6 shadow-myCustomShadow rounded-xl flex flex-col justify-between h-[500px] cursor-pointer">
      {/*  <!-- Image --> */}
      <figure className="overflow-hidden relative mb-5 h-[70%]">
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-full rounded-xl group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="p-6 h-[20%]">
        <header className="mb-4 flex flex-col items-center gap-1">
          <h3 className="text-xl font-medium text-slate-700">{name}</h3>
          <p className="text-sm text-slate-400">{title || ""}</p>
          <span className="text-center">
            <Rating value={ratings} />
          </span>
        </header>
        <p className="text-center">{about?.slice(0, 110) || ""} . . .</p>
      </div>
      {/*  <!-- Action base sized link button --> */}
      <div className="flex justify-between items-center gap-2 p-6 pt-0 text-md h-[10%]">
        <div className="flex gap-2 items-center justify-center">
          <span className="text-primary text-xl">
            <FaCirclePlay />
          </span>
          <span>{numOfCourses || 0} Courses</span>
        </div>
        <Link to={`/instructor-details/${email}`}>
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
