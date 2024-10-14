import { IoMdArrowDropdown } from "react-icons/io";
import useDateFormatter from "../../../Hooks/getValues/useDateFormatter";
import useAxios from "../../../Hooks/useAxios";

const BlogTableRow = ({ blog, fetchBlogs, idx }) => {
  const { author_details } = blog;
  const formattedDate = useDateFormatter(blog?.date);
  const apiHandler = useAxios();

  const handleStatusChanged = (status) => {
    apiHandler
      .patch(`/blogs/${blog?._id}`, { status: status })
      .then((res) => {
        console.log(res.data);
        if (res) {
          fetchBlogs();
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <tr className="border-b border-slate-200 hover:bg-gray-50 ">
      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        {idx + 1}
      </td>

      <td className="text-sm transition duration-300 border-slate-200 py-4">
        <img
          className="w-[80px] h-[60px] rounded-lg "
          src={blog?.image}
          alt=""
        />
      </td>

      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        <p className="text-[#2F327D] font-medium">{blog?.title}</p>
      </td>

      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        {author_details?.authorName}
      </td>

      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        {formattedDate}
      </td>
      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        <span
          className={`px-4 py-1 text-xs font-semibold rounded-full 
          ${
            blog?.status === "pending"
              ? "bg-yellow-100 text-yellow-500"
              : blog?.status === "approved"
              ? "bg-emerald-100 text-emerald-500"
              : "bg-red-100 text-red-500"
          }`}
        >
          {blog?.status}
        </span>
      </td>
      <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
        {/* For Update */}
        <div className="relative ">
          <select
            className="appearance-none w-full bg-gray-100 border border-gray-200 rounded px-3 py-2 pr-5 text-gray-800 focus:outline-none cursor-pointer text-[15px]"
            onChange={(e) => handleStatusChanged(e.target.value)}
            defaultValue={blog?.status}
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <IoMdArrowDropdown />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default BlogTableRow;
