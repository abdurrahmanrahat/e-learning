import TableCourseCard from "./TableCourseCard";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import { useCourses } from "../../../../Hooks/api/useCourses";

const AllCourses = () => {

  const query = { page: 1, limit: 9, category: '', duration: '', searchTerm: '' };
  const { courses } = useCourses(query);

  return (
    <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
      <div className="mb-6">
        <PrimaryTitle
          headingPart1={"All"}
          headingPart2={"Courses"}
          style={"text-center"}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold"></th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Title & Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Instructor</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Duration</th>
              <th className="px-6 py-3 text-left text-sm font-semibold"></th>
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


  );
};

export default AllCourses;
