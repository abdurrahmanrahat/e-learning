import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import { useCoursesByEmail } from "../../../../Hooks/api/useCoursesByEmail";
import { getUser } from "../../../../utils/getUser";
import TableCourse from "./TableCourse";

const MyCourses = () => {
  const user = getUser();

  const courses = useCoursesByEmail(user?.email);
  console.log(courses);

  return (
    <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
      <div className="mb-6">
        <PrimaryTitle
          headingPart1={"My"}
          headingPart2={"Courses"}
          style={"text-center"}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Image
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Title & Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Instructor
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {courses?.map((course, idx) => (
              <TableCourse key={course?._id} course={course} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
