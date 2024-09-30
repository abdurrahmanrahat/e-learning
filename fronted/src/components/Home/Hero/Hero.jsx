import { HOMEImages } from "../../../image-data/home";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiProgress3Line } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container-class flex justify-between items-center py-16 px-10">
      {/* left side */}
      <div className="w-full lg:w-1/2 xl:w-1/2">
        <div className="flex flex-col gap-14 justify-start ">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-6xl xl:text-6xl  text-[#101828] font-semibold lg:leading-[1.3em] xl:leading-[1.3em] leading-[1em]">
              Get where you{"'"}re getting faster with <span className="text-primary">BrainWave</span>
            </h2>
            <p className="text-[#646464] text-lg">
              Expend you skills in development, testing, analysis and desiring
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex h-14 items-center justify-center gap-2 rounded-xl  px-8 text-sm font-medium tracking-wide text-white shadow-md transition duration-300 bg-primary hover:bg-hover hover:shadow-sm">
              Start Now
            </button>
            <button className="flex justify-center items-center gap-4 rounded-xl px-8 h-14 text-xl">
              <span className="text-primary text-2xl">
                <FaPlayCircle />
              </span>
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="w-1/2 hidden lg:flex xl:flex justify-end">
        <div className="w-[80%] flex justify-end border-[2px] border-[#49BBBD] rounded-full pt-6 pl-4">
          <div className="bg-[#49BBBD] rounded-full relative">
            <div className="">
              <div className="bg-white text-[#101828] p-4  absolute left-[-20%] top-[30%] border border-[#49BBBD] rounded-xl flex justify-between items-center gap-4">
                <span className="p-3 bg-[#49BBBD] rounded-xl text-white text-2xl">
                  <HiOutlineDesktopComputer />
                </span>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <span className="text-3xl font-bold">2K+</span>
                  <span className="text-sm">Video courses</span>
                </div>
              </div>
              <div className="bg-white text-[#101828] p-4  absolute right-[-10%] bottom-[10%] border border-[#49BBBD] rounded-xl flex justify-between items-center gap-4">
                <span className="p-3 bg-[#49BBBD] rounded-xl text-white text-2xl">
                  <RiProgress3Line />
                </span>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <span className="text-3xl font-bold">5K+</span>
                  <span className="text-sm">Online courses</span>
                </div>
              </div>
              <div className="bg-white text-[#101828] py-4 px-6  absolute right-[-2%] top-[5%] border border-[#49BBBD] rounded-xl flex flex-col justify-between items-center gap-4">
                <span className="p-3 bg-[#49BBBD] rounded-xl text-white text-2xl">
                  <FaChalkboardTeacher />
                </span>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <span className="text-3xl font-bold">250+</span>
                  <span className="text-sm">Tutors</span>
                </div>
              </div>
            </div>
            <img className="" src={HOMEImages.hero_1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
