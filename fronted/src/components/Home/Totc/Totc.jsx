import { HOMEImages } from "../../../image-data/home";
import PrimaryTitle from "../../Ui/PrimaryTitle";

export default function Totc() {
  return (
    <div className="flex flex-col gap-10 px-10">
      {/* what is brain web  */}

      <div className="flex flex-col lg:flex-row items-center gap-10 ">
        <div className="w-full lg:w-1/2">
          <PrimaryTitle
            // headingPart1={"Everything you can do in a physical classroom,"}
            // headingPart2={" you can do with TOTC"}
            // style={"text-start"}
            headingPart1={"What is"}
            headingPart2={"BrainWave"}
            style={"text-start"}
            subtext={
              "The BrainWave e-Learning Project is an innovative online educational platform designed to leverage advanced technologies like AI, machine learning, and data analytics to enhance the learning experience."
            }
          />
          <p className="mt-8 text-myGray text-lg">
            {" "}
            It aims to provide personalized learning paths for students,
            adapting content based on individual progress, learning style, and
            performance. By integrating interactive modules, virtual classrooms,
            and AI-driven assessments, BrainWave seeks to offer a highly
            engaging, customized educational journey.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 p-4">
          <div className="absolute top-0 left-0 h-[100px] w-[100px] bg-[#23BDEE] rounded-xl z-[-1]"></div>
          <div className="absolute bottom-0 right-0 h-[150px] w-[150px] bg-[#33EFA0] rounded-xl z-[-1]"></div>
          <figure>
            <img className="w-full" src={HOMEImages.totc_3} alt="" />
          </figure>
        </div>
      </div>
      {/* Mission And Vission */}
      <div className="container-class  mt-10">
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="lg:w-[50%]">
            <img
              className="rounded-xl"
              src="https://i.ibb.co.com/VJMKM9s/122864.jpg"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] mt-8 lg:mt-0">
            <PrimaryTitle
              headingPart1={"Our"}
              headingPart2={"Mission & Vision"}
              style={""}
            />
            <p className="text-[#696984] mb-10">
              Our mission is to deliver accessible, personalized e-learning
              experiences, using advanced technology to empower learners of all
              ages and backgrounds, fostering critical thinking, growth, and
              lifelong learning.
            </p>
            <p className="text-[#696984] mb-10">
              We aim to become a global leader in e-learning, creating
              inclusive, adaptive educational experiences that bridge gaps and
              revolutionize education with cutting-edge AI-driven technology.
            </p>
            <p className="text-[#696984]">
              By making learning accessible to all, BrainWave envisions a future
              where education is personalized, transformative, and empowering
              for every learner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
