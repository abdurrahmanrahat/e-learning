import { NavLink } from "react-router-dom";

const DashboardActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      end // This ensures that the active class only applies to exact matches
      className={({ isActive }) =>
        isActive
          ? "text-primary"
          : "text-secondary hover:text-primary hover:bg-[#dbf4f9]"
      }
    >
      {children}
    </NavLink>
  );
};

export default DashboardActiveLink;
