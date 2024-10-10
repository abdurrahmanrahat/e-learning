import { HOMEImages } from "../../../image-data/home";
import PrimaryTitle from "../../Ui/PrimaryTitle";

// features_1
const features_1 = [
  {
    title:
      "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    icon: HOMEImages.feature_3,
  },
  {
    title: "TA’s and presenters can be moved to the front of the class.",
    icon: HOMEImages.feature_4,
  },
  {
    title: "Teachers can easily see all students and class data at one time.",
    icon: HOMEImages.feature_5,
  },
];

export default function Features() {
  return (
    <div className="flex flex-col gap-16">
      <PrimaryTitle
        headingPart1={"Our"}
        headingPart2={"Features"}
        style={"text-center"}
      />
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2">
          <figure>
            <img src={HOMEImages.feature_1} alt="" />
          </figure>
        </div>
        <div className="w-full lg:w-1/2 px-8">
          <PrimaryTitle
            headingPart1={"A User Interface"}
            headingPart2={"Design for the classroom"}
            style={"text-start"}
          />
          <ul className="flex flex-col gap-12">
            {features_1.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <span>
                  <img src={item.icon} alt="" />
                </span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2 pr-8">
          <PrimaryTitle
            headingPart1={"Tools For"}
            headingPart2={"Teachers And Learners"}
            style={"text-start"}
            subtext={
              "Class has a dynamic set of teaching tools built to be deployed and used during class.Teachers can handout assignments in real-time for students to complete and submit."
            }
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <figure>
            <img src={HOMEImages.feature_2} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
