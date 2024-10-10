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
import Loader from "../../components/Ui/Loader";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Ui/Button";
import useUser from "../../Hooks/api/useUser";
import WebsiteTitle from "../../components/Ui/WebsiteTitle";

// set navigate query system
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// TODO: text the button
const Courses = () => {
  const query = useQuery();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(query.get("category") || "");
  const [duration, setDuration] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const limit = 9;

  console.log(category)

  let courseQuery = {
    page,
    limit,
    category,
    duration,
    searchTerm,
  };

  const { courses } = useCourses(courseQuery);
  const { user } = useUser();
  // console.log(courses);

  if (!courses)
    return (
      <div className="w-full flex justify-center items-center my-20">
        <Loader />
      </div>
    );

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
    <WebsiteTitle title={"Courses"}>
      <div id="Courses">
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
          <PrimaryTitle headingPart1={`${category}` || "All"} headingPart2={"Courses"} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 lg:gap-y-20">
            {courses?.data?.map((item) => (
              <CourseCard course={item} key={item._id}></CourseCard>
            ))}
          </div>

          {/* pagination part */}
          <div className="w-full lg:mt-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel={"Next >"}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={courses?.pageCount}
              previousLabel="< Previous"
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
        <div className="lg:max-w-7xl mx-auto  lg:my-20 my-16 md:px-5 lg:px-0 ">
          <div
            className="flex flex-col lg:flex-row md:flex-row lg:py-10 md:py-10 bg-[#e0f2fe]
 items-center lg:gap-32 rounded-3xl"
          >
            <div className="w-full lg:w-[40%] mt-5 lg:mt-0 flex items-center justify-center">
              <div className="flex flex-col gap-10">
                <h2 className="text-[30px] font-bold">
                  Know about learning <br /> learning platform
                </h2>
                <div className="flex flex-col gap-2">
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
                </div>
                <Link
                  to={
                    (user?.role === "student" &&
                      "/dashboard/student/enrolled-courses") ||
                    (user?.role === "instructor" &&
                      "/dashboard/instructor/my-courses") ||
                    (user?.role === "admin" &&
                      "/dashboard/admin/all-courses") ||
                    (!user && "/authentication")
                  }
                >
                  <Button bgBtn={true}>
                    {(user?.role === "instructor" && "Your Courses") ||
                      (user?.role === "admin" && "See All The courses") ||
                      "Start learning now"}
                  </Button>
                </Link>
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
    </WebsiteTitle>
  );
};

export default Courses;
