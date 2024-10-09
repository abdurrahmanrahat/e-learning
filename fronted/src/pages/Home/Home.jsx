import BrainWave from "../../components/Home/BrainWave/BrainWave";
import Features from "../../components/Home/Features/Features";
import Hero from "../../components/Home/Hero/Hero";
import LatestBlogs from "../../components/Home/LatestBlogs/LatestBlogs";
import OurCategory from "../../components/Home/OurCategory/OurCategory";
import Success from "../../components/Home/Success/Success";
import TestimonialsForHome from "../../components/Ui/Testimonials/TestimonialsForHome/TestimonialsForHome";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#F6F7FB]">
        <Hero />
      </div>

      <div className="py-24 container-class">
        <Success />
      </div>

      <div className="pb-24 container-class" id="Category">
       <OurCategory/>
      </div>

      <div className="pb-24 container-class">
        <BrainWave />
      </div>

      <div className="pb-24 container-class " id="Features">
        <Features />
      </div>

      <div className="pb-24 container-class">
        <TestimonialsForHome />
      </div>

      <div className="pb-24 container-class">
        <LatestBlogs />
      </div>
    </div>
  );
};

export default Home;
