import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar2 from "../components/Shared/Navbar/Navbar2";

const MainLayout = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
