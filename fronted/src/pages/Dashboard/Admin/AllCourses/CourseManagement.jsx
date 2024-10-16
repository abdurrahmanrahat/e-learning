import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import { useCourses } from "../../../../Hooks/api/useCourses";
import WebsiteTitle from "../../../../components/Ui/WebsiteTitle";
import TableCourseCard from "../../../../components/AllCourses/TableCourseCard";

const CourseManagement = () => {
  const query = {
    page: 1,
    limit: 9,
    category: "",
    duration: "",
    searchTerm: "",
  };
  const { courses } = useCourses(query);

  return (
    <WebsiteTitle title={'All-Courses'}>
      <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
        <div className="mb-6">
          <PrimaryTitle
            headingPart1={"All"}
            headingPart2={"Courses"}
            style={"text-center"}
          />
        </div>

        <div className="custom-scrollbar h-[80vh] overflow-y-auto overflow-x-auto bg-white rounded">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0">
              <tr className="bg-primary text-white">
                <th className="px-6 py-6 text-left text-sm font-semibold">#</th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Image
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Title & Category
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Instructor
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Price
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Duration
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {courses?.data?.map((course, idx) => (
                <TableCourseCard key={course?._id} course={course} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WebsiteTitle>
  );
};

export default CourseManagement;
