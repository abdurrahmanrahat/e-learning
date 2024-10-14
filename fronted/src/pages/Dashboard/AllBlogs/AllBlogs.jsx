import PrimaryTitle from "../../../components/Ui/PrimaryTitle";
import WebsiteTitle from "../../../components/Ui/WebsiteTitle";
import BlogTableRow from "../../../components/AllBlogs/BlogTableRow/BlogTableRow";
import { useBlogs } from "../../../Hooks/api/useBlogs";

const AllBlogs = () => {
  const { blogs, fetchBlogs } = useBlogs();

  console.log(blogs);

  return (
    <WebsiteTitle title={"All-Blogs"}>
      <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
        <div className="mb-6">
          <PrimaryTitle
            headingPart1={"All"}
            headingPart2={"Blogs"}
            style={"text-center text-4xl font-semibold text-[#2F327D]"}
          />
        </div>

        {/* Blog Table */}
        <div className="custom-scrollbar h-[80vh] overflow-y-auto overflow-x-auto bg-white rounded-lg shadow">
          <table className="table-auto w-full">
            <thead className="sticky top-0">
              <tr className="bg-primary text-white">
                <th className="px-6 py-6 text-left text-sm font-semibold">#ID</th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Image
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Title
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Author
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Publish Date
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Action
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {blogs?.map((blog, idx) => (
                <BlogTableRow key={blog._id} blog={blog} fetchBlogs={fetchBlogs} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WebsiteTitle>
  );
};

export default AllBlogs;
