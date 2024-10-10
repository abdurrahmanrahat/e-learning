import { useState } from "react";
import ReactPaginate from "react-paginate";
import Functionality from "../../components/Course/Functionality/Functionality";
import CourseCard from "../../components/Ui/CourseCard";
import PageBanner from "../../components/Ui/PageBanner";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import "../../css/coursesBgImg.css";
import "../../css/pagination.css";
import { SHAREDImages } from "../../image-data/shared";
import OfferCourse from "../../components/Courses/OfferCourse/OfferCourse";
import { useCourses } from "../../Hooks/api/useCourses";
import Loader from "../../components/Ui/Loader";
import { useLocation } from "react-router-dom";
import WebsiteTitle from "../../components/Ui/WebsiteTitle";
import KnowAboutLearning from "../../components/Courses/KnowAboutLearning";

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
        <div className="lg:max-w-7xl mx-auto  my-16 md:px-5 lg:px-0">
          <KnowAboutLearning />
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
