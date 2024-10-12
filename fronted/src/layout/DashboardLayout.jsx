import { useState } from "react";
// import { GrUploadOption } from "react-icons/gr";
import { IoListSharp, IoSettingsOutline } from "react-icons/io5";
// import { PiUsersThreeDuotone } from "react-icons/pi";
import { RxCross2, RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import DashboardActiveLink from "../components/Ui/DashboardActiveLink";
import { getUser } from "../utils/getUser";
import { FaBlog } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { LuListPlus } from "react-icons/lu";

export default function DashboardLayout() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  const user = getUser();

  return (
    <>
      {/* Mobile trigger */}
      <div className="flex justify-between items-center p-[4%] shadow-myCustomShadow lg:hidden">
        <button onClick={handleNavToggle}>
          {isSideNavOpen ? (
            <RxCross2 className="text-[24px]" />
          ) : (
            <RxHamburgerMenu className="text-[24px]" />
          )}
        </button>
        <div className="">
          <Link to="/">
            <h2 className="text-[24px] md:text-[28px] font-semibold text-primary">
              BrainWave
            </h2>
          </Link>
        </div>
      </div>

      <div className="lg:flex">
        {/* Side Navigation */}
        <aside
          id="nav-menu-2"
          aria-label="Side navigation"
          className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-myGray border-opacity-30 bg-white transition-transform lg:translate-x-0 ease-in-out duration-500 ${
            isSideNavOpen ? "translate-x-0 " : " -translate-x-full"
          }`}
        >
          <div className="flex justify-center items-center h-20 mt-6">
            <Link to="/">
              <h2 className="text-[24px] md:text-[28px] font-semibold text-primary">
                BrainWave
              </h2>
            </Link>
          </div>

          <nav
            aria-label="side navigation"
            className="flex-1 divide-y divide-slate-100 overflow-auto"
          >
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="">
                <DashboardActiveLink to={`/dashboard/${user?.role}/charts`}>
                  <span className="flex items-center gap-3 rounded py-3 px-6  transition-colors duration-300 ">
                    <RxDashboard className="block text-[18px]" />
                    <span className="block text-[17px]">Dashboard</span>
                  </span>
                </DashboardActiveLink>
              </li>
              {user?.role === "student" && (
                <li className="">
                  <DashboardActiveLink to="/dashboard/student/enrolled-courses">
                    <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                      <IoListSharp className="block text-[18px]" />
                      <span className="block text-[17px]">
                        Enrolled Courses
                      </span>
                    </span>
                  </DashboardActiveLink>
                </li>
              )}
              {user?.role === "instructor" && (
                <>
                  <li className="">
                    <DashboardActiveLink to="/dashboard/instructor/my-courses">
                      <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                        <IoListSharp className="block text-[18px]" />
                        <span className="block text-[17px]">My Courses</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li className="">
                    <DashboardActiveLink to="/dashboard/instructor/add-course">
                      <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                        <LuListPlus className="block text-[18px]" />
                        <span className="block text-[17px]">Add Course</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li className="">
                    <DashboardActiveLink to="/dashboard/instructor/my-blogs">
                      <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                        <FaBlog className="block text-[18px]" />
                        <span className="block text-[17px]">My Blogs</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                  <li className="">
                    <DashboardActiveLink to="/dashboard/instructor/add-blog">
                      <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                        <ImBlog className="block text-[18px]" />
                        <span className="block text-[17px]">Add Blog</span>
                      </span>
                    </DashboardActiveLink>
                  </li>
                </>
              )}
              {user?.role === "admin" && (
                <>
                <li className="">
                  <DashboardActiveLink to="/dashboard/admin/course-management">
                    <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                      <IoListSharp className="block text-[18px]" />
                      <span className="block text-[17px]">Course Management</span>
                    </span>
                  </DashboardActiveLink>
                </li>
                <li className="">
                  <DashboardActiveLink to="/dashboard/admin/users-management">
                    <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                      <IoListSharp className="block text-[18px]" />
                      <span className="block text-[17px]">User Management</span>
                    </span>
                  </DashboardActiveLink>
                </li>
                <li className="">
                  <DashboardActiveLink to="/dashboard/admin/blog-management">
                    <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                      <IoListSharp className="block text-[18px]" />
                      <span className="block text-[17px]">Blog Management</span>
                    </span>
                  </DashboardActiveLink>
                </li>
                </>
              )}
            </ul>
          </nav>

          <footer className="border-t border-slate-200 p-3">
            <Link
              to={`/dashboard/${user?.role}/profile`}
              href="/dashboard/admin/profile"
              className="flex items-center gap-3 rounded p-3 text-secondary transition-colors hover:text-primary"
            >
              <IoSettingsOutline />
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </footer>
        </aside>

        {/* Main Content Area */}
        <div
          className={`flex-1 text-black border-opacity-50 w-full ${
            isSideNavOpen ? "" : "lg:ml-72"
          }`}
        >
          {/* Page content will be rendered here based on the route */}
          <Outlet />
        </div>
      </div>

      {/* Backdrop for mobile */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors lg:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
}
