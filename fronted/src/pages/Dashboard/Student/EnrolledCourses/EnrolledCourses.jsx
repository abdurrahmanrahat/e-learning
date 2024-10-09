import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import useEnrolledCoursesByEmail from "../../../../Hooks/api/useEnrolledCoursesByEmail";
import useUser from "../../../../Hooks/api/useUser";
import EnrolledCourseCard from "../../../../components/Ui/EnrolledCourseCard";

export default function EnrolledCourses() {
  const {user} = useUser();
  const enrolledCourses = useEnrolledCoursesByEmail(user?.email);

  console.log(enrolledCourses);

  return (
    <div className="p-6">
      <PrimaryTitle
        headingPart1={"Enrolled"}
        headingPart2={"Courses"}
        style={"text-start"}
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-20 my-12">
      {enrolledCourses?.data?.map((item) => (
          <EnrolledCourseCard key={item._id} enrolledCourse={item}/>
        ))}
      </div>
    </div>
  );
}
