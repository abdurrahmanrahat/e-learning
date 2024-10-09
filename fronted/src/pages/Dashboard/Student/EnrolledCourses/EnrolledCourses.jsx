import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import useEnrolledCoursesByEmail from "../../../../Hooks/api/useEnrolledCoursesByEmail";
import useUser from "../../../../Hooks/api/useUser";
import EnrolledCourseCard from "../../../../components/Ui/EnrolledCourseCard";

export default function EnrolledCourses() {
  const {user} = useUser();
  const enrolledCourses = useEnrolledCoursesByEmail(user?.email);

<<<<<<< HEAD
=======
  console.log(enrolledCourses);
>>>>>>> 39d7e661924e6413d0715fc6e0b991ecb1fdc7ac

  return (
    <div className="p-6">
      <PrimaryTitle
        headingPart1={"Enrolled"}
        headingPart2={"Courses"}
        style={"text-start"}
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-20 my-12">
<<<<<<< HEAD
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
                  to={`/dashboard/student/course-classroom/${item._id}`}
                >
                  <Button bgBtn>Continue</Button>
                </Link>
                <Button outlineBtn>Outline</Button>
              </div>
            </div>
          </div>
=======
      {enrolledCourses?.data?.map((item) => (
          <EnrolledCourseCard key={item._id} enrolledCourse={item}/>
>>>>>>> 39d7e661924e6413d0715fc6e0b991ecb1fdc7ac
        ))}
      </div>
    </div>
  );
}
