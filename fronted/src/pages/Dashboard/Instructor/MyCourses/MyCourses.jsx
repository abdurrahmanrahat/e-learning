import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import WebsiteTitle from "../../../../components/Ui/WebsiteTitle";
import { useCoursesByEmail } from "../../../../Hooks/api/useCoursesByEmail";
import useUser from "../../../../Hooks/api/useUser";
import TableCourse from "./TableCourse";

const MyCourses = () => {
  const { user } = useUser();

  const courses = useCoursesByEmail(user?.email);
  console.log(courses);

  return (
    <WebsiteTitle title={'My-Courses'}>
      <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
        <div className="mb-6">
          <PrimaryTitle
            headingPart1={"My"}
            headingPart2={"Courses"}
            style={"text-center"}
          />
        </div>

        <div className="custom-scrollbar h-[80vh] overflow-y-scroll overflow-x-auto bg-white rounded">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0">
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
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Action
                </th>
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
    </WebsiteTitle>
  );
};

export default MyCourses;
