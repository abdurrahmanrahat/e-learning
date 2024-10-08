import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Charts from "../components/Charts/Charts";
import PaymentFailed from "../components/Checkout/AfterPayment/PaymentFailed";
import PaymentSuccess from "../components/Checkout/AfterPayment/PaymentSuccess";
import CourseDetail from "../components/CourseDetails/CourseDetail/CourseDetail";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import About from "../pages/About/About";
import Authentication from "../pages/Authentication/Authentication";
import Checkout from "../pages/Checkout/Checkout";
import Courses from "../pages/Courses/Courses";
import AdminDashboardHome from "../pages/Dashboard/Admin/AdminDashboardHome/AdminDashboardHome";
import AllCourses from "../pages/Dashboard/Admin/AllCourses/AllCourses";
import UsersManagement from "../pages/Dashboard/Admin/UsersManagement/UsersManagement";
import AllBlogs from "../pages/Dashboard/AllBlogs/AllBlogs";
import AddCourse from "../pages/Dashboard/Instructor/AddCourse/AddCourse";
import AddModule from "../pages/Dashboard/Instructor/AddModule/AddModule";
import InstructorDashboardHome from "../pages/Dashboard/Instructor/InstructorDashboardHome/InstructorDashboardHome";
import InstructorsProfile from "../pages/Dashboard/Instructor/InstructorProfile/InstructorsProfile";
import MyCourses from "../pages/Dashboard/Instructor/MyCourses/MyCourses";
import CourseClassroom from "../pages/Dashboard/Student/CourseClassroom/CourseClassroom";
import EnrolledCourses from "../pages/Dashboard/Student/EnrolledCourses/EnrolledCourses";
import StudentDashboardHome from "../pages/Dashboard/Student/StudentDashboardHome/StudentDashboardHome";
import StudentProfile from "../pages/Dashboard/Student/StudentProfile/StudentProfile";
import Home from "../pages/Home/Home";
import InstructorDetails from "../pages/InstructorDetails/InstructorDetails";
import Instructors from "../pages/Instructors/Instructors";
import RoleChange from "../pages/RoleChange/RoleChange";
import BlogPage from "../components/Blog/BlogPage/BlogPage";
import BlogDetails from "../components/Blog/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "courseDetails/:id",
        element: <CourseDetail></CourseDetail>,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "instructor-details/:id",
        element: <InstructorDetails />,
      },
      {
        path: "checkout/:id",
        element: <Checkout />,
      },
      {
        path: "payment/success/:trans_id",
        element: <PaymentSuccess />,
      },
      {
        path: "payment/failed/:trans_id",
        element: <PaymentFailed />,
      },
      {
        path: "role-change",
        element: <RoleChange />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "blog-page",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails/>,
        loader:()=>fetch('/blogCategory.json')
        
      },
    ],
  },
  {
    path: "authentication",
    element: <Authentication />,
  },
  {
    path: "/dashboard/admin/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardHome />,
      },
      {
        path: "all-courses",
        element: <AllCourses />,
      },
      {
        path: "users-management",
        element: <UsersManagement />,
      },
      {
        path: "all-blogs",
        element: <AllBlogs />,
      },
    ],
  },
  {
    path: "/dashboard/instructor/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <InstructorDashboardHome />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "add-module",
        element: <AddModule />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "instructor-profile",
        element: <InstructorsProfile></InstructorsProfile>,
      },
    ],
  },
  {
    path: "/dashboard/student/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <StudentDashboardHome />,
      },
      {
        path: "enrolled-courses",
        element: <EnrolledCourses />,
      },
      {
        path: "course-classroom/:id",
        element: <CourseClassroom />,
      },
      {
        path: "student-profile",
        element: <StudentProfile></StudentProfile>,
      },
    ],
  },
]);

export default router;
