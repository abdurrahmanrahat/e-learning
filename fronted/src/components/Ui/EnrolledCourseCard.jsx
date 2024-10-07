import { Link } from "react-router-dom";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

export default function EnrolledCourseCard({enrolledCourse}) {
    const {course, studentName, completedPercentage} = enrolledCourse;

  return (
    <div
      className="p-6 shadow-myCustomShadow rounded-xl flex flex-col gap-4"
    >
      {/* card image */}
      <figure className="overflow-hidden relative">
        <img
          className="w-full h-full object-cover rounded"
          src={'#'}
          alt="course"
        />
      </figure>
      {/* card body */}
      <div className="flex flex-col justify-between gap-6">
        {/* Conditionally truncate the title */}
        <div className="flex flex-col items-start justify-between">
          <h2 className="text-2xl text-[#2F327D] font-bold font-nunito">
            {'dkfjkd'}
          </h2>
          <h4 className="text-[#2F327D] font-medium">{studentName}</h4>
        </div>
        {/* progress bar */}
        <ProgressBar value={completedPercentage} width={completedPercentage} />

        {/* button */}
        <div className="flex justify-between gap-8 lg:gap-16 xl:gap-16 items-center">
          <Link
            className="w-full"
            to={`/dashboard/student/course-classroom/${course}`}
          >
            <Button bgBtn>Continue</Button>
          </Link>
          <Button outlineBtn>Outline</Button>
        </div>
      </div>
    </div>
  );
}
