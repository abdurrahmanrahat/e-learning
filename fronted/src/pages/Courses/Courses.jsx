import { useState } from "react";
import '../../css/coursesBgImg.css';
import { useEffect } from "react";
import Course from "./Course/Course";
import Creators from "./Creators/Creators";
import OfferCourse from "./OfferCourse/OfferCourse";
import SubjectDropdown from "../../components/Dropdown/SubjectDropdown";
import PartnerDropdown from "../../components/Dropdown/PartnerDropdown";
import ProgramDropdown from "../../components/Dropdown/ProgramDropdown";
import LanguageDropdown from "../../components/Dropdown/LanguageDropdown";
import AbaliabilityDrop from "../../components/Dropdown/AbaliabilityDrop";
import LearningTypeDrop from "../../components/Dropdown/LearningTypeDrop";

const Courses = () => {
  const [courses, SetCourses] = useState([]);
  const [dataLength,setDataLength]=useState(6);

  useEffect(() => {
    fetch("coursesData.json")
      .then((res) => res.json())
      .then((data) => SetCourses(data));
  }, []);

  return (
    <div className="">
      {/* courses banner  */}
      <div className="courses-bg-img ">
        <div className="text-center pt-28 mb-10">
          <div className="relative">
            <input
              className="bg-[#FFFFFF] border lg:w-[60%] w-[90%] md:w-[80%] p-5 rounded-2xl
"
              type="search"
              name=""
              id=""
              placeholder="Search your favourite course"
            />
            <div className="absolute lg:end-[330px] end-[30px] md:end-[90px] top-2">
              <button className="px-8 py-3 rounded-xl text-xl font-bold text-white bg-[#49BBBD] hover:bg-emerald-600 ">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8 px-3 md:px-10 lg:px-0 max-w-7xl mx-auto">
          {/* dropdown btn 1  */}
          <div className="">
            <SubjectDropdown></SubjectDropdown>
          </div>
          <div className="">
            <PartnerDropdown></PartnerDropdown>
          </div>
          <div className="">
            <ProgramDropdown></ProgramDropdown>
          </div>
          <div className="">
            <LanguageDropdown></LanguageDropdown>
          </div>
          <div className="">
            <AbaliabilityDrop></AbaliabilityDrop>
          </div>
          <div className="">
            <LearningTypeDrop></LearningTypeDrop>
          </div>
        </div>
      </div>
      {/* courses map section  */}
      <div className="max-w-7xl mx-auto  mt-10">
        <div className="text-right mb-6">
        <div className={dataLength===courses.length ?"hidden":""}>
          <button onClick={()=>setDataLength(courses.length)} className="px-6 py-3 rounded-lg font-bold bg-[#49BBBD] hover:bg-emerald-500 text-white">See All Course</button>
        </div>
        </div>
      <div
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 
"
      >
        {courses.slice(0,dataLength).map((course) => (
          <Course course={course} key={course._id}></Course>
        ))}
      </div>
      </div>
      {/* Know about learning learning platform section  */}
      <div className="lg:max-w-7xl mx-auto  lg:my-20 my-20 md:px-5 lg:px-0 ">
        <div
          className="flex flex-col lg:flex-row md:flex-row lg:py-10 md:py-10 bg-[#e0f2fe]
 items-center lg:gap-32 rounded-3xl"
        >
          <div className="w-full lg:w-[40%] mt-5 lg:mt-0 flex items-center justify-center">
            <div className="">
              <h2 className="text-[30px] font-bold mb-7 ">
                Know about learning <br /> learning platform
              </h2>
              <div className="flex items-center gap-3">
                <button
                  className="bg-[#55EFC4] p-3 rounded-full
"
                ></button>
                <h2 className="text-[18px] font-semibold text-gray-500">
                  Free E-book, video & consolation
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-[#55EFC4] p-3 rounded-full
"
                ></button>
                <h2 className="text-[18px] font-semibold text-gray-500 py-3">
                  Top instructors from around world
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-[#55EFC4] p-3 rounded-full
"
                ></button>
                <h2 className="text-[18px] font-semibold text-gray-500">
                  Top courses from your team
                </h2>
              </div>
              <button
                className="px-5 py-3 text-xl font-bold text-white mt-10 rounded-xl bg-[#49BBBD]
"
              >
                Start learning now
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:w-[50%] ">
            <img
              className="w-[650px] mt-10"
              src="https://i.ibb.co.com/Hh0VX58/Group-71.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Classes tought by real creators section  */}
      <div className="max-w-7xl mx-auto">
        <Creators></Creators>
      </div>
      {/* Top Education offers and deals are listed here */}
      <div className="max-w-7xl mx-auto  lg:my-20 my-20">
        <OfferCourse></OfferCourse>
      </div>
    </div>
  );
};

export default Courses;
