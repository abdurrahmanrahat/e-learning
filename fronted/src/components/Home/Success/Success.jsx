import { useUsers } from "../../../Hooks/api/useUsers";
import PrimaryTitle from "../../Ui/PrimaryTitle";
import { useCourses } from "../../../Hooks/api/useCourses";


export default function Success() {

  // All students
  const { users } = useUsers();
  const students = users?.filter(user => user?.role === 'student');

  // All Instructor
  const instructor = users?.filter(user => user?.role === 'instructor');

  // All courses
  const query = { page: 1, limit: 100, category: '', duration: '', searchTerm: '' };
  const { courses } = useCourses(query);
  const allCourses = courses?.data;

  // Dynamic "Years of experience"
  const startingYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startingYear;


  const states = [
    {
      title: "Students",
      value: students?.length,
    },
    {
      title: "Total Success",
      value: "75%",
    },
    {
      title: "Total Courses",
      value: allCourses?.length,
    },
    {
      title: "Total Instructor",
      value: instructor?.length,
    },
    {
      title: "Years of experience",
      value: yearsOfExperience,
    },
  ];


  return (
    <div className=" flex flex-col gap-10 px-10">
      <PrimaryTitle
        headingPart1={"Our"}
        headingPart2={"Success"}
        style={"text-center"}
        subtext={
          "Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 justify-between items-center">
        {states.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 items-center w-full">
            <span className="text-6xl text-[#49BBBD]">{item.value}</span>
            <span className="text-lg">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
