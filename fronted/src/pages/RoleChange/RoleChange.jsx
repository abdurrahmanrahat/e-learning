import { HOMEImages } from "../../image-data/home";

const RoleChange = () => {
  return (
    <div className="container-class py-[100px]">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="rounded-xl relative">
          <div className="relative">
            <div className="w-full h-full bg-[#000] bg-opacity-40 absolute inset-0 rounded-xl"></div>
            <figure className="rounded-xl">
              <img className=" w-full" src={HOMEImages.totc_1} alt="" />
            </figure>
          </div>

          <div className="absolute w-full top-[45%] left-0 text-center text-white">
            <h4 className="text-[24px] font-medium mb-2 ">
              Are you a Student?
            </h4>
            <button className="rounded-full border-[2px] border-[white] text-white px-7 py-3 hover:bg-[#23BDEE] hover:border-[#23BDEE] transition-colors duration-300">
              Yes
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="relative">
            <div className="w-full h-full bg-[#000] bg-opacity-40 absolute inset-0 rounded-xl"></div>
            <figure className=" rounded-xl">
              <img
                className="rounded-xl w-full"
                src={HOMEImages.totc_2}
                alt=""
              />
            </figure>
          </div>
          <div className="absolute w-full top-[45%] left-0 text-center text-white">
            <h4 className="text-[24px] font-medium mb-2 ">
              Are you a Instructor?
            </h4>
            <button className="rounded-full border-[2px] border-[white]  px-7 py-3 hover:bg-primary hover:border-primary transition-colors duration-300">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleChange;
