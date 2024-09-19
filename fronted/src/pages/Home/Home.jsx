import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-[#49BBBD]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
