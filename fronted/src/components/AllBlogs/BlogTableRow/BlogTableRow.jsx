import { MdDeleteForever } from "react-icons/md";
import UpdateBlog from "./UpdateBlog";

const BlogTableRow = ({ blog, idx }) => {
   
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
                        {blog?.author?.name}
                  </td>

                  <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
                        {blog?.published_date}
                  </td>


                  {/* Action buttons */}
                  <td className=" px-6 py-3 text-sm transition duration-300 border-slate-200 flex space-x-2">

                        {/* Update blog start from here */}
                        <div>
                              <UpdateBlog />
                        </div>

                        {/* button for delete */}
                        <button className="text-2xl font-bold bg-red-500 p-2 text-white rounded-lg hover:bg-red-700 transition duration-200">
                              <MdDeleteForever />
                        </button>
                  </td>
            </tr>
      );
};

export default BlogTableRow;