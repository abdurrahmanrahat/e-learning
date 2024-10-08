import BrainWave from "../../components/Home/BrainWave/BrainWave";
import Features from "../../components/Home/Features/Features";
import Hero from "../../components/Home/Hero/Hero";
import LatestBlogs from "../../components/Home/LatestBlogs/LatestBlogs";
import OurCategory from "../../components/Home/OurCategory/OurCategory";
import Success from "../../components/Home/Success/Success";
import TestimonialsForHome from "../../components/Ui/Testimonials/TestimonialsForHome/TestimonialsForHome";
import WebsiteTitle from "../../components/Ui/WebsiteTitle";

const Home = () => {
  return (
    <WebsiteTitle title={'Home'}>
      <div className="bg-[#F6F7FB]">
        <Hero />
      </div>

      <div className="py-14 lg:py-24 container-class">
        <Success />
      </div>

      <div className="pb-14 lg:pb-24 container-class" id="Category">
        <OurCategory />
      </div>

      <div className="pb-14 lg:pb-24 container-class">
        <BrainWave />
      </div>

      <div className="pb-14 lg:pb-24 container-class " id="Features">
        <Features />
      </div>

      <div className="pb-14 lg:pb-24 container-class">
        <TestimonialsForHome />
      </div>

      <div className="pb-14 lg:pb-24 container-class">
        <LatestBlogs />
      </div>
    </WebsiteTitle>
  );
};

export default Home;
