import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import WebsiteTitle from "../../../../components/Ui/WebsiteTitle";
import useBlogsByEmail from "../../../../Hooks/api/useBlogsByEmail";
import useUser from "../../../../Hooks/api/useUser";
import TableBlogs from "./TableBlogs";

export default function MyBlogs() {
  const { user } = useUser();
  const { instructorBlogs, fetchInstructorBlogs } = useBlogsByEmail(user?.email);

  // console.log(instructorBlogs);
  return (
    <WebsiteTitle title={"My-Blogs"}>
      <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
        <div className="mb-6">
          <PrimaryTitle
            headingPart1={"My"}
            headingPart2={"Blogs"}
            style={"text-center"}
          />
        </div>

        <div className="custom-scrollbar h-[80vh] overflow-y-auto overflow-x-auto bg-white rounded">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0">
              <tr className="bg-primary text-white">
                <th className="px-6 py-6 text-left text-sm font-semibold">#</th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Image
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Title & Category
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Author
                </th>
                <th className="px-6 py-6 text-left text-sm font-semibold">
                  Ratting
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
              {instructorBlogs?.map((blog, index) => (
                <TableBlogs key={index} blog={blog} index={index} fetchInstructorBlogs={fetchInstructorBlogs}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WebsiteTitle>
  );
}
