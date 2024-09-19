import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import feature_1 from "../../../../public/feature_1.png";
import feature_2 from "../../../../public/feature_2.png";
import featureIcon_1 from "../../../../public/Feature_icon_1.png";
import featureIcon_2 from "../../../../public/Feature_icon_2.png";
import featureIcon_3 from "../../../../public/Feature_icon_3.png";

// features_1
const features_1 = [
    {
        title: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
        icon: featureIcon_1
    },
    {
        title: "TA’s and presenters can be moved to the front of the class.",
        icon: featureIcon_2
    },
    {
        title: "Teachers can easily see all students and class data at one time.",
        icon: featureIcon_3
    },
]

export default function Features() {
  return (
    <div className="flex flex-col gap-16">
      <PrimaryTitle
        headingPart1={"Our"}
        headingPart2={"Features"}
        style={'text-center'}
      />
      <div className="flex items-center gap-10">
        <div className="w-full lg:w-1/2">
          <figure>
            <img src={feature_1} alt="" />
          </figure>
        </div>
        <div className="w-full lg:w-1/2 px-8">
          <PrimaryTitle
            headingPart1={"A User Interface"}
            headingPart2={"Design for the classroom"}
            style={'text-start'}
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
      <div className="flex items-center gap-20">
        <div className="w-full lg:w-[60%] pr-8">
          <PrimaryTitle
            headingPart1={"Tools For"}
            headingPart2={"Teachers And Learners"}
            style={'text-start'}
            subtext={
              "Class has a dynamic set of teaching tools built to be deployed and used during class.Teachers can handout assignments in real-time for students to complete and submit."
            }
          />
        </div>
        <div className="w-full lg:w-[40%] flex justify-center">
          <figure>
            <img src={feature_2} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
