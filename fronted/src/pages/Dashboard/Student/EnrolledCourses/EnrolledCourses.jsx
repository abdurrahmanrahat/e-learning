import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import ProgressBar from "../../../../components/Ui/ProgressBar";
import { useCourses } from "../../../../Hooks/api/useCourses";
import { Link } from "react-router-dom";

export default function EnrolledCourses() {
  const query = {
    page: 1,
    limit: 3,
    category: "",
    duration: "",
    searchTerm: "",
  };
  const { courses } = useCourses(query);

  console.log(courses?.data);

  return (
    <div>
      <PrimaryTitle
        headingPart1={"Enrolled"}
        headingPart2={"Courses"}
        style={"text-start"}
      />
      <div className="grid grid-cols-2 gap-x-10 gap-y-20 my-12">
        {courses?.data.map((item) => (
          <div
            key={item._id}
            className="p-6 shadow-myCustomShadow rounded-xl flex flex-col gap-4 justify-between"
          >
            {/* card image */}
            <figure className="overflow-hidden relative h-[50%]">
              <img
                className="w-full h-full object-cover rounded"
                src={item.image}
                alt="course"
              />
            </figure>
            {/* card body */}
            <div className="flex flex-col justify-between gap-4 h-[50%]">
              {/* Conditionally truncate the title */}
              <div className="flex flex-col items-start justify-between">
                <h2 className="text-2xl text-[#2F327D] font-bold font-nunito">
                  {item.title}
                </h2>
                <h4 className="text-[#2F327D] font-medium">
                  {item.instructorName}
                </h4>
              </div>
              {/* progress bar */}
              <ProgressBar value={80}/>

              {/* button */}
              <div className="flex justify-between gap-10 items-center">
                <Link className="w-1/2" to={`/dashboard/admin/course-classroom/${item._id}`}>
                  <button className="bg-[#49BBBD] px-8 py-4 rounded-xl text-white cursor-pointer w-full hover:scale-[1.2] transition-all duration-500 ease-in-out">
                    Continue Course
                  </button>
                </Link>
                <div className="w-1/2">
                  <button className="bg-[#49BBBD] px-8 py-4 rounded-xl text-white cursor-pointer w-full hover:scale-[1.2] transition-all duration-500 ease-in-out">
                    Course Outline
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
