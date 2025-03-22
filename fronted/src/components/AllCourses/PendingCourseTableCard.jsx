import toast from "react-hot-toast";
import { IoMdArrowDropdown } from "react-icons/io";
import useAxios from "../../Hooks/useAxios";
import Rating from "../Ui/Rating";

const PendingCourseTableCard = ({ course, idx, fetchCourses }) => {
  const apiHandler = useAxios();

  const handleChangeCourseStatus = (courseId, status) => {
    apiHandler
      .patch(`/courses/${courseId}`, { status: status })
      .then((res) => {
        if (res) {
          toast.success("Course Update successfully");
          fetchCourses();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Please try again.");
      });
  };

  return (
    <tr className="border-b border-slate-200 hover:bg-gray-50">
      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        {idx + 1}
      </td>

      <td className="text-sm transition duration-300 border-slate-200">
        <img
          className="w-[80px] h-[60px] rounded-lg "
          src={course?.image}
          alt=""
        />
      </td>

      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        <p className="text-[#2F327D] font-medium">{course?.title}</p>
        <span className="text-slate-500">{course?.category}</span>
      </td>

      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        {course?.instructorName}
      </td>

      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        ${course?.price}
      </td>

      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        {course?.courseDuration}
        <span className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
          <Rating value={course?.totalRatings} />
          <span className="text-sm text-[#969696]">
            ({course?.totalRatings})
          </span>
        </span>
      </td>
      {/* status */}
      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        <span className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
          <span className="bg-emerald-100 capitalize text-emerald-500 px-4 py-1 rounded-full">
            {course?.status}
          </span>
        </span>
      </td>
      {/* button for edit */}
      <td className=" px-6 py-3 text-sm transition duration-300 border-slate-200 flex space-x-2">
        {/* For Update */}
        <div className="relative ">
          <select
            className="appearance-none w-full bg-gray-100 border border-gray-200 rounded px-3 py-2 pr-5 text-gray-800 focus:outline-none cursor-pointer text-[15px] z-0"
            onChange={(e) =>
              handleChangeCourseStatus(course._id, e.target.value)
            }
            defaultValue={course?.status}
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <IoMdArrowDropdown />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default PendingCourseTableCard;
