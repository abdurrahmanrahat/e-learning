import { useState } from "react";
import ReactPaginate from "react-paginate";
import Functionality from "../../components/Course/Functionality/Functionality";
import CourseCard from "../../components/Ui/CourseCard";
import PageBanner from "../../components/Ui/PageBanner";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import "../../css/coursesBgImg.css";
import "../../css/pagination.css";
import { SHAREDImages } from "../../image-data/shared";
import OfferCourse from "./OfferCourse/OfferCourse";
import { useCourses } from "../../Hooks/api/useCourses";

const Courses = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const limit = 9;

  let query = {};

  query.page = page;
  query.limit = limit;
  query.category = category;
  query.duration = duration;
  query.searchTerm = searchTerm;

  const { courses } = useCourses(query);
  // console.log(courses);

  if (!courses) return <h2>Loading...</h2>;

  const handlePageClick = (e) => {
    console.log(e);
    setPage(e.selected + 1);
  };

  // for category
  const handleSelectCategory = (e) => {
    if (e.target.value === "All Courses") {
      setCategory("");
    } else {
      setCategory(e.target.value);
    }
  };
  // for duration
  const handleSelectDuration = (e) => {
    if (e.target.value === "All Courses") {
      setDuration("");
    } else {
      setDuration(e.target.value);
    }
  };
  // for search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="">
      {/* courses banner  */}
      <PageBanner image={SHAREDImages.banner_2}>
        <div className="w-full lg:w-[60%] xl:w-[60%] h-full flex flex-col justify-center gap-10 px-4">
          <Functionality
            categoryInputValue={category}
            durationInputValue={duration}
            handleSearch={handleSearch}
            handleSelectCategory={handleSelectCategory}
            handleSelectDuration={handleSelectDuration}
          />
        </div>
      </PageBanner>

      {/* courses map section  */}
      <div className="container-class px-10 flex flex-col gap-10 py-10">
        <PrimaryTitle headingPart1={"All"} headingPart2={"Courses"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {courses?.data.map((item) => (
            <CourseCard course={item} key={item._id}></CourseCard>
          ))}
        </div>

        {/* pagination part */}
        <div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={courses.pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            marginPagesDisplayed={2}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
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

      {/* Top Education offers and deals are listed here */}
      <div className="max-w-7xl mx-auto  lg:my-20 my-20">
        <OfferCourse></OfferCourse>
      </div>
    </div>
  );
};

export default Courses;
