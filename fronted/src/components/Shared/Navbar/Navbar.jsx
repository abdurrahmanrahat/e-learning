import { useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../Ui/ActiveLink";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <div className="container-class">
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="relative z-20 w-full h-auto bg-white/90">
        <div className="">
          <nav
            // aria-label="main navigation"
            className="flex items-center justify-between my-6"
            // role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link to="/">
              <h2 className="text-[24px] md:text-[28px] font-semibold text-primary">
                BrainWave
              </h2>
            </Link>

            {/*<!-- Mobile trigger --> */}
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

            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 text-black ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <ActiveLink to={"/"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    Home
                  </span>
                </ActiveLink>
              </li>
              <li role="none" className="flex items-stretch">
                <ActiveLink to={"courses"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    Courses
                  </span>
                </ActiveLink>
              </li>
              <li role="none" className="flex items-stretch">
                <ActiveLink to={"instructors"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    Instructors
                  </span>
                </ActiveLink>
              </li>
              <li role="none" className="flex items-stretch">
                <ActiveLink to={"about-us"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    About
                  </span>
                </ActiveLink>
              </li>
              <li role="none" className="flex items-stretch">
                <ActiveLink to={"/dashboard/admin"}>
                  <span className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary lg:px-4">
                    Dashboard
                  </span>
                </ActiveLink>
              </li>
            </ul>

            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-primary px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200">
                <span>Login</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </div>
  );
}
