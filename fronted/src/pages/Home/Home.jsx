import ExploreCourse from "../../components/ExploreCourse/ExploreCourse";
import Testimonial from "../../components/Shared/Testimonial/Testimonial";
import Banner from "../../components/Banner/Banner";
import LastestNews from "../../components/Home/LastestNews/LastestNews";
import Totc from "../../components/Home/Totc/Totc";
import Features from "../../components/Home/Features/Features";
import Success from "../../components/Home/Success/Success";
import AllInOne from "../../components/Home/AllInOne/AllInOne";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>

      <div className="py-24 max-w-full lg:max-w-7xl mx-auto">
        <Success />
      </div>

      <div className="py-24 max-w-full lg:max-w-7xl mx-auto">
        <AllInOne />
      </div>

      <div className="py-24 max-w-full lg:max-w-7xl mx-auto">
        <Totc />
      </div>

      <div className="py-24 max-w-full lg:max-w-7xl mx-auto">
        <Features />
      </div>

      <div>
        <ExploreCourse />
      </div>

      <div className="py-24">
        <Testimonial />
      </div>
      <div className="py-24 max-w-full lg:max-w-7xl mx-auto">
        <LastestNews />
      </div>
    </div>
  );
};

export default Home;
