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
const OurCategory = () => {
  return (
    <div className=" px-10">
      <PrimaryTitle
        headingPart1={"Explore"}
        headingPart2={"Our category"}
        style={"text-center md:mx-0 lg:mx-48 mx-0"}
        subtext={
          "Explore BrainWave's diverse categories, offering personalized courses in 10 category education, professional development, STEM, arts, and language learning."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 mt-16">
<Link to='/courses'>
<div className="flex items-center  gap-2 border-2 px-4 py-2 rounded-full hover:bg-[#4bc0c0] hover:text-white">
<div className="bg-[#4bc0c0] p-3 rounded-full ">
<GrTechnology className="text-5xl  text-white " />
</div>
<div>
    <h2 className="text-xl mb-3 text-gray-500 font-bold ">Technology</h2>
    <p className="text-lg text-gray-500">9 Course</p>
</div>
</div>
</Link>
<Link to='/courses'>
<div className="flex items-center  gap-2 border-2 px-4 py-2 rounded-full hover:bg-[#4bc0c0] hover:text-white">
<div className="bg-[#4bc0c0] p-3 rounded-full ">
<MdDeveloperMode className="text-5xl  text-white " />
</div>
<div>
    <h2 className="text-xl mb-3 text-gray-500 font-bold ">Programming</h2>
    <p className="text-lg text-gray-500">9 Course</p>
</div>
</div>
</Link>
<Link to='/courses'>
<div className="flex items-center  gap-2 border-2 px-4 py-2 rounded-full hover:bg-[#4bc0c0] hover:text-white">
<div className="bg-[#4bc0c0] p-3 rounded-full ">
<MdOutlineScience className="text-5xl  text-white " />
</div>
<div>
    <h2 className="text-xl mb-3 text-gray-500 font-bold ">Science</h2>
    <p className="text-lg text-gray-500">9 Course</p>
</div>
</div>
</Link>
<Link to='/courses'>
<div className="flex items-center  gap-2 border-2 px-4 py-2 rounded-full hover:bg-[#4bc0c0] hover:text-white">
<div className="bg-[#4bc0c0] p-3 rounded-full ">
<LiaLanguageSolid className="text-5xl  text-white " />
</div>
<div>
    <h2 className="text-xl mb-3 text-gray-500 font-bold ">Creatives </h2>
    <p className="text-lg text-gray-500">10 Course</p>
</div>
</div>
</Link>
<Link to='/courses'>
<div className="flex items-center  gap-2 border-2 px-4 py-2 rounded-full hover:bg-[#4bc0c0] hover:text-white">
<div className="bg-[#4bc0c0] p-3 rounded-full ">
<FaComputer className="text-5xl  text-white " />
</div>
<div>
    <h2 className="text-xl mb-3 text-gray-500 font-bold ">Computer </h2>
    <p className="text-lg text-gray-500">8 Course</p>
</div>
</div>
</Link>
<Link to='/courses'>
<div className="flex items-center  gap-2 border-2 px-4 py-2 rounded-full hover:bg-[#4bc0c0] hover:text-white">
<div className="bg-[#4bc0c0] p-3 rounded-full ">
<SiNginxproxymanager className="text-5xl  text-white " />
</div>
<div>
    <h2 className="text-xl mb-3 text-gray-500 font-bold ">Management</h2>
    <p className="text-lg text-gray-500">9 Course</p>
</div>
</div>
</Link>
<Link to='/courses'>
<div className="flex items-center  gap-2 border-2 px-4 py-2 rounded-full hover:bg-[#4bc0c0] hover:text-white">
<div className="bg-[#4bc0c0] p-3 rounded-full ">
<RiMentalHealthLine className="text-5xl  text-white " />
</div>
<div>
    <h2 className="text-xl mb-3 text-gray-500 font-bold ">Health </h2>
    <p className="text-lg text-gray-500">10 Course</p>
</div>
</div>
</Link>
<Link to='/courses'>
<div className="flex items-center  gap-2 border-2 px-4 py-2 rounded-full hover:bg-[#4bc0c0] hover:text-white">
<div className="bg-[#4bc0c0] p-3 rounded-full ">
<HiOutlineAcademicCap className="text-5xl  text-white " />
</div>
<div>
    <h2 className="text-xl mb-3 text-gray-500 font-bold ">Academic </h2>
    <p className="text-lg text-gray-500">10 Course</p>
</div>
</div>
</Link>
      </div>
    </div>
  );
};

export default OurCategory;
