import AllInOne from "../../components/Home/AllInOne/AllInOne";
import Banner from "../../components/Home/Banner/Banner";
import ExploreCourse from "../../components/Home/ExploreCourse/ExploreCourse";
import Features from "../../components/Home/Features/Features";
import LastestNews from "../../components/Home/LastestNews/LastestNews";
import Success from "../../components/Home/Success/Success";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import Totc from "../../components/Home/Totc/Totc";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>

      <div className="py-24 container-class">
        <Success />
      </div>

      <div className="py-24 container-class">
        <AllInOne />
      </div>

      <div className="py-24 container-class">
        <Totc />
      </div>

      <div className="py-24 container-class">
        <Features />
      </div>

      <div className=" bg-[#ebf5ff] ">
        <div className="py-24 container-class">
          <ExploreCourse />
        </div>
      </div>

      <div className="py-24 container-class">
        <Testimonial />
      </div>

      <div className="py-24 container-class">
        <LastestNews />
      </div>
    </div>
  );
};

export default Home;
