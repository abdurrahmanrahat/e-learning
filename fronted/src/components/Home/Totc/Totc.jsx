import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import {HOMEImages} from "../../../image-data/home"

export default function Totc() {
  return (
    <div className="flex flex-col gap-10 px-10">
      <PrimaryTitle
        headingPart1={"What is"}
        headingPart2={"TOTC"}
        style={'text-center'}
        subtext={
          "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
        }
      />
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="rounded-xl relative">
          <figure className="bg-[#000] bg-opacity-50 rounded-xl">
            <img  className="rounded-xl w-full" src={HOMEImages.totc_1} alt="" />
          </figure>
          <div className="absolute w-full top-[45%] left-0 text-center text-white">
            <h4 className="text-xl">For Instructors</h4>
            <button className="rounded-full border-[2px] border-[white] text-white px-7 py-3 hover:bg-[#23BDEE] hover:border-[#23BDEE]">
              Start a class today
            </button>
          </div>
        </div>
        <div className="relative">
          <figure className="bg-[#000] bg-opacity-50 rounded-xl">
            <img className="rounded-xl w-full" src={HOMEImages.totc_2} alt="" />
          </figure>
          <div className="absolute w-full top-[45%] left-0 text-center text-white">
            <h4 className="text-xl">For Students</h4>
            <button className="rounded-full border-[2px] border-[white]  px-7 py-3 hover:bg-[#23BDEE] hover:border-[#23BDEE]">
              Enter Access course
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-16">
        <div className="w-full lg:w-1/2">
          <PrimaryTitle
            headingPart1={"Everything you can do in a physical classroom,"}
            headingPart2={" you can do with TOTC"}
            style={'text-start'}
            subtext={
              "TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system."
            }
          />
        </div>
        <div className="relative w-full lg:w-1/2 p-4">
        <div className="absolute top-0 left-0 h-[100px] w-[100px] bg-[#23BDEE] rounded-xl z-[-1]"></div>
        <div className="absolute bottom-0 right-0 h-[150px] w-[150px] bg-[#33EFA0] rounded-xl z-[-1]"></div>
        <figure>
          <img className="w-full" src={HOMEImages.totc_3} alt="" />
        </figure>
        </div>
      </div>
    </div>
  );
}
