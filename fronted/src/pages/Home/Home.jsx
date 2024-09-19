import Testimonial from "../../components/Shared/Testimonial/Testimonial";
import Banner from "../../components/Banner/Banner";
import LastestNews from "../../components/Home/LastestNews/LastestNews";
import Totc from "../../components/Home/Totc/Totc";
import Features from "../../components/Home/Features/Features";
import Success from "../../components/Home/Success/Success";
import AllInOne from "../../components/Home/AllInOne/AllInOne";

const Home = () => {
  return (
    <div className="max-w-full lg:max-w-7xl mx-auto">
      <Banner></Banner>

      <div className="py-24">
        <Success />
      </div>

      <div className="py-24">
        <AllInOne />
      </div>

      <div className="py-24">
        <Totc />
      </div>

      <div className="py-24">
        <Features />
      </div>


      <div className="py-24">
        <Testimonial />
      </div>
      
      <div className="py-24">
        <LastestNews />
      </div>
    </div>
  );
};

export default Home;
