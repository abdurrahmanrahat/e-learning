import { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { RiProgress3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HOMEImages } from "../../../image-data/home";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Button from "../../Ui/Button";

const Hero = () => {
  const [clickedPlayBtn, setClickedPlayBtn] = useState(false);

  return (
    <div className="">
      {clickedPlayBtn && (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
            clickedPlayBtn ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
              clickedPlayBtn ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setClickedPlayBtn(!clickedPlayBtn)}
          ></div>
          {/* main box */}
          <div
            className={`relative p-4 w-full max-w-6xl bg-white rounded-lg shadow dark:bg-gray-700 transform transition-transform duration-300 ${
              clickedPlayBtn ? "scale-100" : "scale-75"
            }`}
          >
            <div className="absolute text-3xl top-[-3%] right-[-1%] cursor-pointer">
              <span onClick={() => setClickedPlayBtn(!clickedPlayBtn)}>
                <MdCancel />
              </span>
            </div>
            {/* main content */}
            <div className=" bg-white rounded-lg shadow dark:bg-gray-700 h-[70vh] overflow-y-auto overflow-x-auto">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FAyKDaXEAgc?si=80a3p4hihii3wIkv"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <div className="container-class flex justify-between items-center py-16 px-10">
        {/* left side */}
        <div className="w-full lg:w-1/2 xl:w-1/2">
          <div className="flex flex-col gap-14 justify-start ">
            <div className="flex flex-col gap-8">
              <h2 className="text-6xl  text-[#101828] font-semibold leading-[1.3em] capitalize">
                Get where you{"'"}re getting faster with{" "}
                <span className="text-primary">BrainWave</span>
              </h2>
              <p className="text-[#646464] text-lg">
                Expend you skills in development, testing, analysis and desiring
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/authentication">
                <Button bgBtn={true}>
                  Start Now
                </Button>
              </Link>
              <button
                onClick={() => setClickedPlayBtn(!clickedPlayBtn)}
                className="flex justify-center items-center gap-0 rounded-xl h-14 hover:scale-[1.2] transition-all duration-500 ease-in-out"
              >
                <span className="w-44">
                <DotLottieReact src="https://lottie.host/c24c8296-4e89-470f-b0a0-5e312962b5dc/CWuzQnZgzz.lottie" loop autoplay style={{ width: "100%", height: "100%" }}/>
                </span>
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
    </div>
  );
};

export default Hero;
