
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import useUser from "../../../Hooks/api/useUser";
import { useCoursesByEmail } from "../../../Hooks/api/useCoursesByEmail";
import { useEnrolledCourses } from "../../../Hooks/api/useEnrolledCourses";
import { useUsers } from "../../../Hooks/api/useUsers";

// Register required elements from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {


  const { user } = useUser();

  // A instructor's all courses
  const instructorCourses = useCoursesByEmail(user?.email);
  // total enrolled courses
  const { enrolledCourses } = useEnrolledCourses();

  // Filter enrolled courses if they are added by the instructor
  const instructorCoursesEnrolledByStudent = enrolledCourses?.filter(course => course?.course?.instructorEmail === user?.email);

  // Calculate percentage
  const totalInstructorCourses = instructorCourses?.length || 0;
  const totalInstructorCoursesEnrolledByStudent = instructorCoursesEnrolledByStudent?.length || 0;

  // Prevent division by zero
  const enrollmentPercentage = totalInstructorCourses > 0
    ? (totalInstructorCoursesEnrolledByStudent / totalInstructorCourses) * 100
    : 0;

  // console.log(`Enrollmnt Percentage: ${enrollmentPercentage}%`);

  // All students
  const { users } = useUsers();
  const totalStudents = users?.filter(user => user?.role === 'student');

  const studentPercentage = totalStudents?.length > 0
    ? (totalInstructorCoursesEnrolledByStudent / totalStudents?.length) * 100
    : 0;

  console.log(studentPercentage);

  // line charts
  const lineCharts1 = {
    labels: ["Enrollment Percentage", "Student Percentage", "Review By Student"],
    datasets: [
      {
        label: "Dataset 1",
        data: [enrollmentPercentage, studentPercentage, 30],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const optionsLineChart = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Instructor Analytics",
      },
    },
  };

  return (
    <div className="w-[400px] md:w-[600px] lg:w-[800px] h-[400px]">
      <Line data={lineCharts1} options={optionsLineChart} />
    </div>
  );
};

export default LineChart;
