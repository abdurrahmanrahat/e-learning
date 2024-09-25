import TableCourseCard from "./TableCourseCard";

const AllCourses = () => {
  return (
    <div>
      <div className="mt-5 mb-10">
        <h2 className="text-4xl font-bold ">All Courses</h2>
      </div>
      
      <div>
        <TableCourseCard></TableCourseCard>
      </div>

    </div>
  );
};

export default AllCourses;
