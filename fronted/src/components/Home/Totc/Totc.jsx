import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import card1 from "../../../../public/Rectangle 19.png";
import card2 from "../../../../public/Rectangle 21.png";
import classDemo from "../../../../public/class_demo_1.png";

export default function Totc() {
  return (
    <div className="flex flex-col gap-10">
      <PrimaryTitle
        headingPart1={"What is"}
        headingPart2={"TOTC"}
        subtext={
          "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
        }
      />
      <div className="flex gap-10">
        <div className="rounded-xl relative">
          <figure>
            <img src={card1} alt="" />
          </figure>
          <div className="absolute w-full top-[45%] left-0 text-center text-white">
            <h4 className="text-xl">For Instructors</h4>
            <button className="rounded-full border-[2px] border-[white] text-white px-7 py-3">
              Start a class today
            </button>
          </div>
        </div>
        <div className="rounded-xl relative">
          <figure>
            <img src={card2} alt="" />
          </figure>
          <div className="absolute w-full top-[45%] left-0 text-center text-white">
            <h4 className="text-xl">For Students</h4>
            <button className="rounded-full border-[2px] border-[white]  px-7 py-3">
              Enter Access course
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-10 mt-16">
        <div className="w-full lg:w-1/2">
          <PrimaryTitle
            headingPart1={"Everything you can do in a physical classroom,"}
            headingPart2={" you can do with TOTC"}
            subtext={
              "TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system."
            }
          />
        </div>
        <div className="relative w-full lg:w-1/2 p-4">
        <div className="absolute top-0 left-0 h-[100px] w-[100px] bg-[#23BDEE] rounded-xl z-[-1]"></div>
        <div className="absolute bottom-0 right-0 h-[150px] w-[150px] bg-[#33EFA0] rounded-xl z-[-1]"></div>
        <figure>
          <img src={classDemo} alt="" />
        </figure>
        </div>
      </div>
    </div>
  );
}
