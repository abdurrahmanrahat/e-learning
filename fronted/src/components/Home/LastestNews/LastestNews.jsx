import { IMAGES } from "../../../image-data";

const LastestNews = () => {
  const news = [
    {
      image: IMAGES.HOMEImages.news2,
      title:
        "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      desc: "Class Technologies Inc., the company that created Class,...",
      tag: "press release",
    },
    {
      image: IMAGES.HOMEImages.news3,
      title:
        "Zoom’s earliest investors are betting millions on a better Zoom for schools",
      desc: "Zoom was never created to be a consumer product. Nonetheless, the...",
      tag: "news",
    },
    {
      image: IMAGES.HOMEImages.news4,
      title:
        "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      desc: "This year, investors have reaped big financial returns from betting on Zoom...",
      tag: "news",
    },
  ];

  return (
    <div className="mt-10">
      {/* title section */}
      <div className="flex flex-col justify-center items-center gap-0 text-center">
        <h2 className="text-[28px] font-medium leading-[50px]">
          Lastest News and Resources
        </h2>
        <p className="text-myGray text-[16px] md:text-[18px]">
          See the developments that have occurred to TOTC in the world
        </p>
      </div>

      {/* blogs */}
      <div className="grid grid-cols-12 mt-[40px] md:mt-[60px]">
        <div className="col-span-12 md:col-span-5 mb-10 sm:mb-0">
          <img src={IMAGES.HOMEImages.news1} alt="latest blog 01" />
          <div className="space-y-4 mt-6">
            <span className="inline-block bg-primary px-6 py-[6px] text-[16px] text-white uppercase rounded-full">
              News
            </span>
            <h4 className="text-[20px] lg:text-[22px] font-medium text-secondary">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h4>
            <p className="text-myGray text-[17px] tracking-[0.2]">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a className="inline-block text-[17px] tracking-[0.2] underline text-myGray cursor-pointer">
              Read more
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-start-7 md:col-span-6">
          <div className="flex flex-col gap-12 ">
            {news.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-4 flex justify-center items-center  relative">
                  <img
                    src={item.image}
                    alt={`news blog 0${index + 2}`}
                    className="w-full h-auto"
                  />
                  <span className="inline-block bg-primary px-4 py-[4px] text-[12px] text-white uppercase rounded-full absolute bottom-4 right-4 sm:bottom-3 sm:right-3">
                    {item.tag}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-8 flex flex-col justify-between gap-4">
                  <h4 className="text-[19px] font-medium text-secondary">
                    {item.title}
                  </h4>
                  <p className="text-myGray text-[16px] tracking-[0.2] mb-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default LastestNews;
