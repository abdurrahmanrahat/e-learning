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
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Blogs from "../pages/Blogs/Blogs";
import Checkout from "../pages/Checkout/Checkout";
import Courses from "../pages/Courses/Courses";
import AdminDashboardHome from "../pages/Dashboard/Admin/AdminDashboardHome/AdminDashboardHome";
import CourseManagement from "../pages/Dashboard/Admin/AllCourses/CourseManagement";
import PendingCourses from "../pages/Dashboard/Admin/PendingCourses/PendingCourses";
import UsersManagement from "../pages/Dashboard/Admin/UsersManagement/UsersManagement";
import AllBlogs from "../pages/Dashboard/AllBlogs/AllBlogs";
import AddBlog from "../pages/Dashboard/Instructor/AddBlog/AddBlog";
import AddCourse from "../pages/Dashboard/Instructor/AddCourse/AddCourse";
import InstructorDashboardHome from "../pages/Dashboard/Instructor/InstructorDashboardHome/InstructorDashboardHome";
import MyBlogs from "../pages/Dashboard/Instructor/MyBlogs/MyBlogs";
import MyCourses from "../pages/Dashboard/Instructor/MyCourses/MyCourses";
import Profile from "../pages/Dashboard/Profile/Profile";
import CourseClassroom from "../pages/Dashboard/Student/CourseClassroom/CourseClassroom";
import EnrolledCourses from "../pages/Dashboard/Student/EnrolledCourses/EnrolledCourses";
import StudentDashboardHome from "../pages/Dashboard/Student/StudentDashboardHome/StudentDashboardHome";
import Home from "../pages/Home/Home";
import InstructorDetails from "../pages/InstructorDetails/InstructorDetails";
import Instructors from "../pages/Instructors/Instructors";
import RoleChange from "../pages/RoleChange/RoleChange";

const router = createBrowserRouter([
  // Basic routes
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
        path: "instructor-details/:email",
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
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
      },
    ],
  },
  // authentication routes
  {
    path: "authentication",
    element: <Authentication />,
  },
  // admin routes
  {
    path: "/dashboard/admin/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardHome />,
      },
      {
        path: "pending-courses",
        element: <PendingCourses />,
      },
      {
        path: "course-management",
        element: <CourseManagement />,
      },
      {
        path: "users-management",
        element: <UsersManagement />,
      },
      {
        path: "blog-management",
        element: <AllBlogs />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
    ],
  },
  // instructor routes
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
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "my-blogs",
        element: <MyBlogs />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
    ],
  },
  // student routes
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
        path: "course-classroom/:courseId/:enrolledCourseId",
        element: <CourseClassroom />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
    ],
  },
]);

export default router;
