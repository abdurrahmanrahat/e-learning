
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Home/Features/Features";
import LastestNews from "../../components/Home/LastestNews/LastestNews";
import Totc from "../../components/Home/Totc/Totc";

const Home = () => {
  return (
    <div className="max-w-full lg:max-w-7xl mx-auto">
      <Banner></Banner>
    
      {/* TOTC */}
      <Totc />

      {/* features */}
      <Features />

      <LastestNews />

    </div>
  );
};

export default Home;
