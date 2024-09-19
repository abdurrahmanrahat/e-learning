import Testimonial from "../../components/Shared/Testimonial/Testimonial";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Home/Features/Features";
import LastestNews from "../../components/Home/LastestNews/LastestNews";
import Totc from "../../components/Home/Totc/Totc";

const Home = () => {
  return (
    <div className="max-w-full lg:max-w-7xl mx-auto">
      <Banner></Banner>
    
      {/* TOTC */}
      <div className="py-24">
        <Totc />
      </div>

      {/* features */}
      <div className="py-24">
        <Features />
      </div>
      <Features />

      <LastestNews />

      <Testimonial />
    </div>
  );
};

export default Home;
