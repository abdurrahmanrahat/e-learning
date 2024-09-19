import Features from "../../components/Home/Features/Features";
import Totc from "../../components/Home/Totc/Totc";

const Home = () => {
  return (
    <div className="max-w-full lg:max-w-7xl mx-auto">
      {/* TOTC */}
      <div className="py-24">
        <Totc />
      </div>

      {/* features */}
      <div className="py-24">
        <Features />
      </div>
    </div>
  );
};

export default Home;
