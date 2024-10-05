import { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../../utils/getUser";
import { removeUserInfo } from "../../../utils/removeUserInfo";
import ActiveLink from "../../Ui/ActiveLink";
import Button from "../../Ui/Button";
import { MdLogout } from "react-icons/md";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  const user = getUser();

  // handle logout button
  const handleLogoutBtn = () => {
    removeUserInfo();
    window.location.reload();
  };

  return (
    <div className="container-class">
      <header className="relative z-20 w-full h-auto bg-white/90">
        <div className="">
          <nav className="flex items-center justify-between my-6">
            {/* Brand logo */}
            <Link to="/">
              <h2 className="text-[24px] md:text-[28px] font-semibold text-primary">
                BrainWave
              </h2>
            </Link>

            {/* Mobile trigger */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>

            {/* Navigation links */}
            <ul
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:bg-white/0 lg:px-0 lg:py-0 lg:opacity-100 text-black ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li className="flex items-stretch">
                <ActiveLink to={"/"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    Home
                  </span>
                </ActiveLink>
              </li>
              <li className="flex items-stretch">
                <ActiveLink to={"courses"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    Courses
                  </span>
                </ActiveLink>
              </li>
              <li className="flex items-stretch">
                <ActiveLink to={"instructors"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    Instructors
                  </span>
                </ActiveLink>
              </li>
              <li className="flex items-stretch">
                <ActiveLink to={"about-us"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    About
                  </span>
                </ActiveLink>
              </li>
              <li className="flex items-stretch">
                <ActiveLink to={"/dashboard/admin"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    Dashboard
                  </span>
                </ActiveLink>
              </li>
            </ul>

            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0 gap-8">
              {!user ? (
                <>
                  <Link to="/authentication">
                    <button className="inline-flex h-10 items-center justify-center gap-2 rounded px-5 text-sm font-medium tracking-wide text-white shadow-md transition duration-300 bg-primary hover:bg-hover hover:shadow-sm">
                      <span>Login</span>
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  {/* User profile */}
                  <div className="relative">
                    <figure
                      className="w-16 rounded-full overflow-hidden cursor-pointer lg:flex xl:flex hidden"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src={user?.photoUrl}
                        alt="User profile"
                      />
                    </figure>
                    {/* Dropdown menu start */}
                    <div
                      className={`hidden lg:flex xl:flex flex-col gap-4 py-4 absolute -right-14 md:right-0 mt-2 w-50 md:w-80 bg-white rounded-md shadow-lg transform transition-all duration-300 ${
                        isDropdownOpen
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      {/* Dropdown head */}
                      <div className="flex flex-col justify-center gap-2 items-center">
                        <figure className="w-20 rounded-full">
                          <img
                            className="w-full h-full rounded-full"
                            src={user?.photoUrl}
                            alt="User Profile"
                          />
                        </figure>

                        <h4 className="text-2xl text-center font-nunito font-bold">
                          {user?.name}
                        </h4>
                        <p className="text-[#646464] text-center">
                          {user?.email}
                        </p>

                        <Link to="/dashboard/admin/student-profile">
                          <li className="flex items-stretch">
                            <Button bgBtn>
                              <span className="relative">View profile</span>
                            </Button>
                          </li>
                        </Link>
                      </div>

                      <ul className="flex flex-col gap-4 items-center">
                        {/* Dropdown Content */}
                        <li>
                          <ActiveLink to={"/my-courses"}>
                            <span className="font-poppins font-medium transition-colors duration-300 hover:text-primary">
                              Enrolled Courses
                            </span>
                          </ActiveLink>
                        </li>
                        <li>
                          <ActiveLink to={"/charts"}>
                            <span className="font-poppins font-medium transition-colors duration-300 hover:text-primary">
                              Student Analytics
                            </span>
                          </ActiveLink>
                        </li>
                        {/* Log out Button with Gradient and Hover */}
                        <li className="w-[80%] flex justify-center">
                          <Button outlineBtn handler={handleLogoutBtn}>
                            <span className="text-2xl">
                              <MdLogout />
                            </span>
                            <span className="relative flex items-center">
                              Log out
                            </span>
                          </Button>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* Dropdown menu end */}
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
