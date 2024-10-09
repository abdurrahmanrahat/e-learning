import { LiaLanguageSolid } from "react-icons/lia";
import { SiNginxproxymanager } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineScience } from "react-icons/md";
import PrimaryTitle from "../../Ui/PrimaryTitle";
import { Link } from "react-router-dom";
import { RiMentalHealthLine } from "react-icons/ri";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdDeveloperMode } from "react-icons/md";

const popularCategory = [
  {
    name: "Technology",
    icon: <GrTechnology />,
    numOfCourses: 9,
  },
  {
    name: "Programming",
    icon: <MdDeveloperMode />,
    numOfCourses: 9,
  },
  {
    name: "Science",
    icon: <MdOutlineScience />,
    numOfCourses: 9,
  },
  {
    name: "Creatives",
    icon: <LiaLanguageSolid />,
    numOfCourses: 10,
  },
  {
    name: "Computer",
    icon: <FaComputer />,
    numOfCourses: 9,
  },
  {
    name: "Management",
    icon: <SiNginxproxymanager />,
    numOfCourses: 9,
  },
  {
    name: "Health",
    icon: <RiMentalHealthLine />,
    numOfCourses: 9,
  },
  {
    name: "Academic",
    icon: <HiOutlineAcademicCap />,
    numOfCourses: 9,
  },
];

// TODO: marquee animation will be added or not?

const OurCategory = () => {
  return (
    <div className=" px-10">
      <PrimaryTitle
        headingPart1={"Explore"}
        headingPart2={"Our category"}
        style={"text-center md:mx-0 lg:mx-48 mx-0"}
        subtext={
          "Discover diverse learning paths and unlock your potential with BrainWave's curated categories."
        }
      />
      <div className="flex flex-col gap-10 mt-16">
        <div className="overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-10">
            {popularCategory?.map((item, index) => (
              <Link key={index} to={`/courses?category=${item.name}`}>
                <div className="group flex items-center justify-start  gap-4 border border-[#49BBBD] px-4 py-2 rounded-full hover:bg-[#49BBBD] transition-all duration-500 ease-in-out">
                  <div className="bg-[#49BBBD] p-3 rounded-full text-4xl text-white">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <h2 className="text-xl font-medium group-hover:text-white transition-all duration-500 ease-in-out">
                      {item.name}
                    </h2>
                    <p className="text-md text-[#646464] group-hover:text-white transition-all duration-500 ease-in-out">
                      {item.numOfCourses} Course
                    </p>
                  </div>
                </div>
              </Link>
            ))}
           
          </div>
        </div>
        {/* this is marquee animation */}
        {/* <div className="overflow-x-hidden">
          <div className="flex gap-4">
            {popularCategory?.slice(-4)?.map((item, index) => (
              <Link key={index} to={`/courses?category=${item.name}`}>
                <div className="group flex items-center justify-start  gap-4 border border-[#49BBBD] px-4 py-2 rounded-full hover:bg-[#49BBBD] transition-all duration-500 ease-in-out">
                  <div className="bg-[#49BBBD] p-3 rounded-full text-4xl text-white">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <h2 className="text-xl font-medium group-hover:text-white transition-all duration-500 ease-in-out">
                      {item.name}
                    </h2>
                    <p className="text-md text-[#646464] group-hover:text-white transition-all duration-500 ease-in-out">
                      {item.numOfCourses} Course
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurCategory;
