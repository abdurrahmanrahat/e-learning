import { useState } from "react";
import { GrUploadOption } from "react-icons/gr";
import { IoListSharp, IoSettingsOutline } from "react-icons/io5";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { RxCross2, RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import DashboardActiveLink from "../components/Ui/DashboardActiveLink";

export default function DashboardLayout() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile trigger */}
      <div className="py-4 flex justify-between items-center px-[4%] shadow-myCustomShadow lg:hidden">
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
              {/* Add your navigation items */}

              <li className="">
                <DashboardActiveLink to="/dashboard/admin/charts">
                  <span className="flex items-center gap-3 rounded py-3 px-6  transition-colors duration-300 ">
                    <RxDashboard className="block text-[18px]" />
                    <span className="block text-[17px]">Dashboard</span>
                  </span>
                </DashboardActiveLink>
              </li>

              <li className="">
                <DashboardActiveLink to="/dashboard/admin/add-course">
                  <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                    <GrUploadOption className="block text-[18px]" />
                    <span className="block text-[17px]">Add Course</span>
                  </span>
                </DashboardActiveLink>
              </li>

              <li className="">
                <DashboardActiveLink to="/dashboard/admin/all-courses">
                  <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                    <IoListSharp className="block text-[18px]" />
                    <span className="block text-[17px]">All Courses</span>
                  </span>
                </DashboardActiveLink>
              </li>

              <li className="">
                <DashboardActiveLink to="/dashboard/admin/enrolled-courses">
                  <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                    <IoListSharp className="block text-[18px]" />
                    <span className="block text-[17px]">Enrolled Courses</span>
                  </span>
                </DashboardActiveLink>
              </li>

              <li className="">
                <DashboardActiveLink to="/dashboard/admin/users-management">
                  <span className="flex items-center gap-3 rounded py-3 px-6 transition-colors duration-300">
                    <PiUsersThreeDuotone className="block text-[18px]" />
                    <span className="block text-[17px]">User Management</span>
                  </span>
                </DashboardActiveLink>
              </li>
            </ul>
          </nav>

          <footer className="border-t border-slate-200 p-3">
            <Link to="/dashboard/admin/profile"
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
