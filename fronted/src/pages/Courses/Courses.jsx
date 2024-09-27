import SearchForm from "../../components/Course/SearchForm/SearchForm";
import CourseCard from "../../components/Ui/CourseCard";
import PageBanner from "../../components/Ui/PageBanner";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import "../../css/coursesBgImg.css";
import { SHAREDImages } from "../../image-data/shared";
import OfferCourse from "./OfferCourse/OfferCourse";
import { useCourses } from "../../Hooks/api/useCourses";
import Pagination from "../../components/Ui/Pagination";
import { useState } from "react";

const Courses = () => {
  const courses = useCourses();
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5); //set what num of pages shows

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses?.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(courses?.length / coursesPerPage);

  // Handle page change
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Form submission handler
  const onSubmit = (data) => {
    console.log(data);

    // apiHandler
    //   .post("/users/register", data)
    //   .then((res) => {
    //     console.log("Register user:", res.data?.data);
    //     toast.success("User Created Successfully");
    //     navigate("/login");
    //   })
    //   .catch((err) => {
    //     console.log(err?.message);
    //     toast.error(err?.message);
    //   });
  };

  return (
    <div className="">
      {/* courses banner  */}
      <PageBanner image={SHAREDImages.banner_2}>
        <div className="w-full lg:w-[60%] xl:w-[60%] h-full flex flex-col justify-center gap-10 px-4">
          <SearchForm onSubmit={onSubmit} />
        </div>
      </PageBanner>

      {/* courses map section  */}
      <div className="container-class px-10 flex flex-col gap-10 py-10">
        <PrimaryTitle headingPart1={"All"} headingPart2={"Courses"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentCourses?.map((item) => (
            <CourseCard popularCourse={item} key={item.id}></CourseCard>
          ))}
        </div>
        {/* Reusable Pagination Component */}
        {courses?.length > 0 ? (
          <div className="w-full flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        ) : (
          <div className="w-full flex justify-center items-center py-20">
            <p>Data Not Found</p>
          </div>
        )}
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

      {/* Top Education offers and deals are listed here */}
      <div className="max-w-7xl mx-auto  lg:my-20 my-20">
        <OfferCourse></OfferCourse>
      </div>
    </div>
  );
};

export default Courses;
