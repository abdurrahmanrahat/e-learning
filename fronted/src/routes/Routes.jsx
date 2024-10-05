import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CourseDetail from "../components/CourseDetails/CourseDetail/CourseDetail";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import About from "../pages/About/About";
import Checkout from "../pages/Checkout/Checkout";
import Courses from "../pages/Courses/Courses";
import AdminDashboardHome from "../pages/Dashboard/Admin/AdminDashboardHome/AdminDashboardHome";
import AllCourses from "../pages/Dashboard/Admin/AllCourses/AllCourses";
import UsersManagement from "../pages/Dashboard/Admin/UsersManagement/UsersManagement";
import AddCourse from "../pages/Dashboard/Instructor/AddCourse/AddCourse";
import Home from "../pages/Home/Home";
import InstructorDetails from "../pages/InstructorDetails/InstructorDetails";
import Instructors from "../pages/Instructors/Instructors";
import PaymentSuccess from "../components/Checkout/AfterPayment/PaymentSuccess";
import PaymentFailed from "../components/Checkout/AfterPayment/PaymentFailed";
import RoleChange from "../pages/RoleChange/RoleChange";
import Charts from "../components/Charts/Charts";
import Authentication from "../pages/Authentication/Authentication";
import EnrolledCourses from "../pages/Dashboard/Student/EnrolledCourses/EnrolledCourses";
import InstructorsProfile from "../pages/Dashboard/Profile/IstructorProfile/InstructorsProfile";
import CourseClassroom from "../pages/Dashboard/Student/CourseClassroom/CourseClassroom";
<<<<<<< HEAD
import AddModule from "../pages/Dashboard/AddModule/AddModule";
import AllBlogs from "../pages/Dashboard/AllBlogs/AllBlogs";
=======
import Profile from "../pages/Dashboard/Profile/Profile/Profile";
>>>>>>> 43f700befc8ed27b409ac79e103085d79bfb6307


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
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "all-courses",
        element: <AllCourses />,
      },
      {
        path: "all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "users-management",
        element: <UsersManagement />,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "enrolled-courses",
        element: <EnrolledCourses/>,
      },
      {
        path: "course-classroom/:id",
        element: <CourseClassroom/>,
      },
      {
        path: "instructor-profile",
        element: <InstructorsProfile></InstructorsProfile>,
      },
      
      {
        path: "charts",
        element: <Charts/>,
      },
    ],
  },
]);

export default router;
