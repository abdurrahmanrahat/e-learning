import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";

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
        <header className="mb-4 flex justify-center gap-4">
          <div className="text-center">
            <h3 className="text-xl font-medium text-slate-700">
              {name}
            </h3>
            <p className="text-sm text-slate-400">{title}</p>
          </div>
        </header>
        <p className="text-center">{about.slice(0, 110)}{" "}. . .</p>
      </div>
      {/*  <!-- Action base sized link button --> */}
      <div className="flex justify-between items-center gap-2 p-6 pt-0">
        <div className="flex gap-2 items-center justify-center">
            <span><FaStar /></span>
            <span>{ratings}{" "}Ratings</span>
        </div>
        <div className="flex gap-2 items-center justify-center">
            <span><FaCirclePlay /></span>
            <span>{numOfCourses}{" "}Courses</span>
        </div>
        <button className="inline-flex h-10 items-center justify-center gap-2 hover:text-[#00CBB8]">
          <span>Details</span>
          <span>
          <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
}
