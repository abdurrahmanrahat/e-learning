import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../layout/DashboardLayout";
import About from "../pages/About/About";
import AddCourse from "../pages/Dashboard/Admin/AddCourse/AddCourse";
import AdminDashboardHome from "../pages/Dashboard/Admin/AdminDashboardHome/AdminDashboardHome";
import AllCourses from "../pages/Dashboard/Admin/AllCourses/AllCourses";
import UsersManagement from "../pages/Dashboard/Admin/UsersManagement/UsersManagement";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import CourseDetail from "../components/CourseDetails/CourseDetail/CourseDetail";
import Instructors from "../pages/Instructors/Instructors";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import InstructorDetails from "../pages/InstructorDetails/InstructorDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Checkout from "../pages/Checkout/Checkout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
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
        loader:()=>fetch("../../public/InstructorCourses.json")
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
    ],
  },
  {
    path: "registration",
    element: <Registration />
  },
  {
    path: "login",
    element: <Login />
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
        path: "users-management",
        element: <UsersManagement />,
      },
    ],
  },
]);

export default router;
