const Banner = () => {
  return (
    <div style={{}} className="bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:gap-10 mt-0 lg:mt-0 ">
        <div className="w-full lg:w-[50%] text-center lg:text-left  text-white">
          <h1 className="lg:text-[54px] md:text-6xl text-4xl font-bold">
            <span
              className="text-[#F48C06] ;
  "
            >
              Studying
            </span>{" "}
            Online is now much easier
          </h1>
          <p className="lg:text-[24px] md:text-[24px] lg:mt-8 md:mt-6 mt-4 lg:mb-10 md:mb-10 mb-5">
            TOTC is an interesting platform that will teach <br /> you in more
            an interactive way
          </p>
          <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center lg:justify-start lg:gap-10 md:gap-8">
            <div>
              <button
                className="px-8 py-2 rounded-full bg-[#FFFFFF4D]
   text-white text-[20px] "
              >
                Join for free
              </button>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="bg-white px-5 py-4 rounded-full"
                src="https://i.ibb.co.com/479qrfX/Polygon-2-1.png"
                alt=""
              />
              <h2 className="text-[24px] text-black font-bold">
                Watch how it works
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] ">
          <div className="relative">
            <div className="flex items-center justify-center">
              <img
                className="w-[450px] h-[650px]  "
                src="https://i.ibb.co.com/LS6thyY/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min-1.png"
                alt=""
              />
            </div>
            {/* <img
              className="absolute lg:top-32 top-48 md:top-28 md:w-[500px] md:left-32 lg:left-7 left-0"
              src="https://i.ibb.co.com/tBMfF3b/Group-451.png"
              alt=""
            /> */}
            <div className="absolute lg:top-40 md:top-44 lg:-left-10 md:left-20 top-48 ">
              <div
                className="rounded-2xl flex items-center lg:gap-3 md:gap-3 gap-1 bg-[#FFFFFFCC] p-3 text-left
  "
              >
                <img
                  className="w-[30px] lg:w-[50px] "
                  src="https://i.ibb.co.com/jV0Lcdf/Group-6.png"
                  alt=""
                />
                <div className="">
                  <h2 className="text-gray-700  lg:text-[24px] font-bold ">
                    250k
                  </h2>
                  <p className="text-gray-400 lg:text-[20px] font-semibold pt-0">
                    Assisted Student
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute lg:top-24 md:top-16 top-28 lg:end-0 md:end-28 end-4">
              <img src="https://i.ibb.co.com/FhbnnPM/Group-9.png" alt="" />
            </div>
            <div className="absolute lg:top-[320px] md:top-[350px] top-[350px] lg:-end-16 end-4 md:end-[70px]">
              <div
                className="rounded-2xl flex items-center gap-3 bg-[#FFFFFFCC] lg:p-4 md:p-4 p-2 text-left
  "
              >
                <img
                  className="bg-[#F88C3D] w-[40px] lg:w-[50px] lg:p-3 md:p-3 p-2 rounded-xl
  "
                  src="https://i.ibb.co.com/Ns87WLg/email-2-1.png"
                  alt=""
                />
                <div className="">
                  <h2 className="text-gray-700 lg:text-[24px] font-bold ">
                    Congratulations
                  </h2>
                  <p className="text-gray-400 lg:text-[20px] font-semibold">
                    Your admission completed
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute lg:bottom-20 md:bottom-28 bottom-12  lg:-left-20 md:left-20">
              <div
                className="rounded-2xl flex  lg:gap-3 gap-2 bg-[#FFFFFFCC] lg:p-4 p-2 text-left
  "
              >
                <div className="relative">
                  <img
                    className="
  "
                    src="https://i.ibb.co.com/8PjQYJh/Ellipse.png"
                    alt=""
                  />
                  <img
                    className="absolute end-0 top-[38px]"
                    src="https://i.ibb.co.com/4sZK6r8/Ellipse-4.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="text-gray-700 lg:text-[24px] font-bold ">
                    User Experience Class
                  </h2>
                  <p className="text-gray-400 lg:text-[20px] font-semibold lg:mb-4">
                    Today at 12.00 PM
                  </p>
                  <button
                    className="px-8 py-2 bg-[#D8587E]
   rounded-full lg:text-[20px]  font-semibold text-white text-[12px]"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
