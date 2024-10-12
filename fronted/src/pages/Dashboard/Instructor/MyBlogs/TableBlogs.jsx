import { useState } from "react";
import Modal from "../../../../components/Ui/Modal";
import EditBlogForm from "./EditBlogForm";
import { FaEdit, FaTrash } from "react-icons/fa";
import Rating from "../../../../components/Ui/Rating";
import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxios";
import toast from "react-hot-toast";

export default function TableBlogs({ blog, index, fetchInstructorBlogs }) {
  const [openModal, setOpenModal] = useState(false);
  const [blogBtn, setBlogBtn] = useState(false);
  const apiHandler = useAxios();

  // handle edit btn
  const handleEditBtn = () => {
    setOpenModal(true);
    setBlogBtn(true);
  };

  //   handleDeleteBtn
  const handleDeleteBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        apiHandler
          .delete(`/blogs/${blog?._id}`)
          .then((res) => {
            if (res) {
              toast.success("Blog delete successfully");
              fetchInstructorBlogs();
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error(err?.message || "Please try again.");
          });
      }
    });
  };

  return (
    <>
      <tr className="border-b border-slate-200 hover:bg-gray-50">
        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          {index + 1}
        </td>

        <td className="text-sm transition duration-300 border-slate-200">
          <img
            className="w-[80px] h-[60px] rounded-lg "
            src={blog?.image}
            alt=""
          />
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 overflow-hidden w-52">
          <p className="text-[#2F327D] font-medium">{blog?.title}</p>
          <span className="text-slate-500">{blog?.category}</span>
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          {blog?.author_details?.authorName}
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          {(
            <span className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
              <Rating value={blog?.totalRatings || 0} />
              <span className="text-sm text-[#969696]">
                ({blog?.totalRatings || 0})
              </span>
            </span>
          ) || blog?.author_details?.authorEmail}
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          Active
        </td>
        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 flex justify-start items-center">
          <div className="flex gap-4 justify-center items-center">
            <span
              onClick={handleEditBtn}
              className="cursor-pointer text-[#FFF] rounded-md p-3 bg-primary hover:scale-[1.1] transition-all duration-300 ease-in-out text-xl"
            >
              <FaEdit />
            </span>
            <span
              onClick={handleDeleteBtn}
              className="cursor-pointer text-[#fff] bg-red-500 p-3 rounded-md hover:scale-[1.1] transition-all duration-300 ease-in-out text-xl"
            >
              <FaTrash />
            </span>
          </div>
        </td>
      </tr>
      {blogBtn && (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <EditBlogForm
            fetchInstructorBlogs={fetchInstructorBlogs}
            blogId={blog?._id}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </>
  );
}
