import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/careers"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Careers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="hidden lg:block md:block">
          <img src="https://i.ibb.co.com/1Ln4Pr4/Group-112.png" alt="" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-10">
            <ul className="flex items-center space-x-8 text-white lg:text-[20px]">
              {links}
            </ul>
            <div className="flex items-center lg:gap-5">
              <button className="px-8 py-2 bg-white rounded-full lg:text-[20px] md:text-[20px] font-semibold">
                Login
              </button>
              <button className="px-8 py-2 rounded-full bg-[#FFFFFF4D] text-white text-[20px] hidden lg:block md:block font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
