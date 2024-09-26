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
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PaymentSuccess from "../components/Checkout/AfterPayment/PaymentSuccess";
import PaymentFailed from "../components/Checkout/AfterPayment/PaymentFailed";
import RoleChange from "../pages/RoleChange/RoleChange";
import PieCharts from "../components/PieCharts/PieCharts";

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
        loader: () => fetch("../../public/InstructorCourses.json"),
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
        path: "chart",
        element: <PieCharts/>,
      },
    ],
  },
  {
    path: "registration",
    element: <Registration />,
  },
  {
    path: "login",
    element: <Login />,
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
