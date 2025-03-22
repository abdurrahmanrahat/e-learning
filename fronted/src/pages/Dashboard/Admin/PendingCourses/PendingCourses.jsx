import { useState } from "react";
import ReactPaginate from "react-paginate";
import PendingCourseTableCard from "../../../../components/AllCourses/PendingCourseTableCard";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import WebsiteTitle from "../../../../components/Ui/WebsiteTitle";
import "../../../../css/pagination.css";
import { useCourses } from "../../../../Hooks/api/useCourses";

const PendingCourses = () => {
  const [page, setPage] = useState(1);

  const query = {
    page: page,
    limit: 9,
    category: "",
    duration: "",
    searchTerm: "",
    status: "pending",
  };
  const { courses, fetchCourses } = useCourses(query);

  const handlePageClick = (e) => {
    console.log(e);
    setPage(e.selected + 1);
  };

  return (
    <WebsiteTitle title={"Pending-Courses"}>
      <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
        <div className="mb-6">
          <PrimaryTitle
            headingPart1={"Pending"}
            headingPart2={"Courses"}
            style={"text-center"}
          />
        </div>

        {courses?.data?.length === 0 ? (
          <div className="text-2xl font-medium w-full h-screen flex items-center justify-center">
            No pending course available!!
          </div>
        ) : (
          <div className="custom-scrollbar h-[80vh] overflow-y-auto overflow-x-auto bg-white rounded">
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 z-10">
                <tr className="bg-primary text-white">
                  <th className="px-6 py-6 text-left text-sm font-semibold">
                    #
                  </th>
                  <th className="px-6 py-6 text-left text-sm font-semibold">
                    Image
                  </th>
                  <th className="px-6 py-6 text-left text-sm font-semibold">
                    Title & Category
                  </th>
                  <th className="px-6 py-6 text-left text-sm font-semibold">
                    Instructor
                  </th>
                  <th className="px-6 py-6 text-left text-sm font-semibold">
                    Price
                  </th>
                  <th className="px-6 py-6 text-left text-sm font-semibold">
                    Duration
                  </th>
                  <th className="px-6 py-6 text-left text-sm font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-6 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {courses?.data?.map((course, idx) => (
                  <PendingCourseTableCard
                    key={course?._id}
                    course={course}
                    fetchCourses={fetchCourses}
                    idx={idx}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* pagination part */}
        {courses?.data?.length !== 0 && (
          <div className="w-full lg:mt-10">
            <ReactPaginate
              breakLabel="..."
              nextLabel={"Next >"}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={courses?.pageCount}
              previousLabel="<div Previous"
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
        )}
      </div>
    </WebsiteTitle>
  );
};

export default PendingCourses;
