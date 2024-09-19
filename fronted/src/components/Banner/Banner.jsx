const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center  lg:gap-10 mt-10 lg:mt-0 ">
      <div className="w-full lg:w-[50%] text-center lg:text-left  text-white">
        <h1 className="lg:text-[54px] md:text-6xl text-4xl font-bold">
          <span
            className="text-[#F48C06] ;
  "
          >
            Studying
          </span>
          Online is now much easier
        </h1>
        <p className="lg:text-[24px] md:text-[24px] lg:mt-8 md:mt-6 mt-4 lg:mb-10 md:mb-10 mb-5">
          TOTC is an interesting platform that will teach <br /> you in more an
          interactive way
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
          <img
            className="absolute lg:top-32 top-48 md:top-28 md:w-[500px] md:left-32 lg:left-7 left-0"
            src="https://i.ibb.co.com/tBMfF3b/Group-451.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
