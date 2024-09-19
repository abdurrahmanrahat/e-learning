import Features from "../../components/Home/Features/Features";
import LastestNews from "../../components/Home/LastestNews/LastestNews";
import Totc from "../../components/Home/Totc/Totc";

const Home = () => {
  return (
    <div className="max-w-full lg:max-w-7xl mx-auto">
      {/* TOTC */}
      <Totc />

      {/* features */}
      <Features />

      <LastestNews />
    </div>
  );
};

export default Home;
