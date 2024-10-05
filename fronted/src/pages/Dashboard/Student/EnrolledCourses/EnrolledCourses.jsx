import Button from "../../../../components/Ui/Button";
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
    <div className="p-6">
      <PrimaryTitle
        headingPart1={"Enrolled"}
        headingPart2={"Courses"}
        style={"text-start"}
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-20 my-12">
        {courses?.data.map((item) => (
          <div
            key={item._id}
            className="p-6 shadow-myCustomShadow rounded-xl flex flex-col gap-4"
          >
            {/* card image */}
            <figure className="overflow-hidden relative">
              <img
                className="w-full h-full object-cover rounded"
                src={item.image}
                alt="course"
              />
            </figure>
            {/* card body */}
            <div className="flex flex-col justify-between gap-6">
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
              <ProgressBar value={0} width={0} />

              {/* button */}
              <div className="flex justify-between gap-8 lg:gap-16 xl:gap-16 items-center">
                <Link
                  className="w-full"
                  to={`/dashboard/admin/course-classroom/${item._id}`}
                >
                  <Button bgBtn>Continue</Button>
                </Link>
                <Button outlineBtn>Outline</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
