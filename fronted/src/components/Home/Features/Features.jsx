import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import feature_1 from "../../../../public/feature_1.png";
import feature_2 from "../../../../public/feature_2.png";

export default function Features() {
  return (
    <div>
      <PrimaryTitle
        headingPart1={"Our"}
        headingPart2={"Features"}
        subtext={
          "This very extraordinary feature, can make learning activities more efficient"
        }
      />
      <div className="flex gap-10">
        <div className="w-full lg:w-1/2">
          <figure>
            <img src={feature_1} alt="" />
          </figure>
        </div>
        <div className="w-full lg:w-1/2">
          <PrimaryTitle
            headingPart1={"A User Interface"}
            headingPart2={"Design for the classroom"}
          />
          <ul className="flex flex-col gap-4">
            {[
              "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
              "TA’s and presenters can be moved to the front of the class.",
              "Teachers can easily see all students and class data at one time.",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-full lg:w-1/2">
          <PrimaryTitle
            headingPart1={"Tools For"}
            headingPart2={"Teachers And Learners"}
            subtext={
              "Class has a dynamic set of teaching tools built to be deployed and used during class.Teachers can handout assignments in real-time for students to complete and submit."
            }
          />
        </div>
        <div className="w-full lg:w-1/2">
          <figure>
            <img src={feature_2} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
