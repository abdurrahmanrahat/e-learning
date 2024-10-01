import Features from "../../components/Home/Features/Features";
import Hero from "../../components/Home/Hero/Hero";
import LastestNews from "../../components/Home/LastestNews/LastestNews";
import OurCategory from "../../components/Home/OurCategory/OurCategory";
import Success from "../../components/Home/Success/Success";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import Totc from "../../components/Home/Totc/Totc";
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

      <div className="pb-24 container-class">
       <OurCategory/>
      </div>

      <div className="pb-24 container-class">
        <Totc />
      </div>

      <div className="pb-24 container-class">
        <Features />
      </div>

      <div className="pb-24 container-class">
        <Testimonial />
      </div>

      <div className="pb-24 container-class">
        <TestimonialsForHome />
      </div>

      <div className="pb-24 container-class">
        <LastestNews />
      </div>
    </div>
  );
};

export default Home;
