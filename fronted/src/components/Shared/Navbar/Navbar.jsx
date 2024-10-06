import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../../utils/getUser";
import { removeUserInfo } from "../../../utils/removeUserInfo";
import ActiveLink from "../../Ui/ActiveLink";
import Button from "../../Ui/Button";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const user = getUser();

  // handle logout button
  const handleLogoutBtn = () => {
    removeUserInfo();
    window.location.reload();
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
              ${isToggleOpen
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
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:bg-white/0 lg:px-0 lg:py-0 lg:opacity-100 text-black ${isToggleOpen
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
                <ActiveLink to={`/dashboard/${user?.role}`}>
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
                    <Button bgBtn >
                      Login
                    </Button>
                  </Link>

                </>
              ) : (
                <>
                  {/* User profile */}
                  <div className="relative" ref={dropdownRef}>
                    <figure
                      className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
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
                      className={`absolute -right-14 md:right-0 mt-2 w-80 md:w-96 py-2 bg-white rounded-md shadow-lg transform transition-all duration-300 ${isDropdownOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                        }`}
                    >
                      {/* Dropdown head */}
                      <div className="flex flex-col items-center">
                        <figure className="w-16 h-16 rounded-full">
                          <img
                            className="w-16 h-16 rounded-full"
                            src={user?.photoUrl}
                            alt="User Profile"
                          />
                        </figure>

                        <h4 className="text-2xl text-center font-nunito font-bold">
                          {user?.name}
                        </h4>
                        <p className="text-[#646464] text-center">
                          Email: {user?.email}
                        </p>

                        <Link to="/dashboard/admin/student-profile">
                          <li className="flex items-stretch mt-2">
                            <Button bgBtn >
                              View Profile
                            </Button>
                          </li>
                        </Link>
                      </div>

                      <div className="pl-6">
                        {/* Dropdown Content */}
                        <li className="flex items-stretch">
                          <ActiveLink to={"/my-courses"}>
                            <span className="flex font-poppins font-medium items-center gap-2 py-4 transition-colors duration-300 hover:text-primary">
                              My Courses
                            </span>
                          </ActiveLink>
                        </li>
                        <li className="flex items-stretch">
                          <ActiveLink to={"/charts"}>
                            <span className="flex font-poppins font-medium items-center gap-2 pb-4 transition-colors duration-300 hover:text-primary">
                              Student Analytics
                            </span>
                          </ActiveLink>
                        </li>
                        <li className="flex items-stretch">
                          <ActiveLink to={"/leaderboard"}>
                            <span className="flex font-poppins font-medium items-center gap-2 pb-4 transition-colors duration-300 hover:text-primary">
                              Leaderboard
                            </span>
                          </ActiveLink>
                        </li>
                        <li className="flex items-stretch">
                          <ActiveLink to={"/settings"}>
                            <span className="flex font-poppins font-medium items-center gap-2 pb-4 transition-colors duration-300 hover:text-primary">
                              Settings
                            </span>
                          </ActiveLink>
                        </li>

                        {/* Log out Button with Gradient and Hover */}
                        <div className="w-fit mb-3" onClick={handleLogoutBtn}>
                          <Button bgBtn>
                            Log out
                          </Button>
                        </div>
                      </div>
                    </div>
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
