import { useState } from "react";
import Rating from "../../../../components/Ui/Rating";
import Modal from "../../../../components/Ui/Modal";
import Button from "../../../../components/Ui/Button";
import NewModuleForm from "./NewModuleForm";
import ExistingModuleForm from "./ExistingModuleForm";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import EditCourseForm from "./EditCourseForm";

const TableCourse = ({ course, index, blog, fetchCourses}) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModuleModal, setOpenModuleModal] = useState(false);
  const [moduleType, setModuleType] = useState("empty");
  const [editBtn, setEditBtn] = useState(false);

  // handle edit button
  const handleEditBtn = () => {
    setOpenModal(true);
    setEditBtn(true);
    setOpenModuleModal(false);
  };

  // handle add button
  const handleAddBtn = () => {
    setOpenModal(true);
    setOpenModuleModal(true);
    setEditBtn(false);
  }

  console.log('moduelType',moduleType, 'openModal', openModal, 'openModuleModal', openModuleModal, 'editBtn', editBtn)

  return (
    <>
      <tr className="border-b border-slate-200 hover:bg-gray-50">
        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          {index + 1}
        </td>

        <td className="text-sm transition duration-300 border-slate-200">
          <img
            className="w-[80px] h-[60px] rounded-lg "
            src={course?.image || blog?.image}
            alt=""
          />
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200 overflow-hidden w-52">
          <p className="text-[#2F327D] font-medium">
            {course?.title || blog?.title}
          </p>
          <span className="text-slate-500">
            {course?.category || blog?.category}
          </span>
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          ${course?.price || blog?.author_details?.authorName}
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          {(
            <span className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
              <Rating value={course?.totalRatings} />
              <span className="text-sm text-[#969696]">
                ({course?.totalRatings})
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
              onClick={handleAddBtn}
              className="cursor-pointer text-[#fff] bg-[#101828] p-3 rounded-md hover:scale-[1.1] transition-all duration-300 ease-in-out text-xl"
            >
              <IoMdAdd />
            </span>
            <span
              onClick={handleEditBtn}
              className="cursor-pointer text-[#FFF] rounded-md p-3 bg-primary hover:scale-[1.1] transition-all duration-300 ease-in-out text-xl"
            >
              <FaEdit />
            </span>
            <span className="cursor-pointer text-[#fff] bg-red-500 p-3 rounded-md hover:scale-[1.1] transition-all duration-300 ease-in-out text-xl">
              <FaTrash />
            </span>
          </div>
        </td>
      </tr>
      {openModuleModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setModuleType={setModuleType}
        >
          {moduleType === "existing" && (
            <ExistingModuleForm courseId={course._id} />
          )}
          {moduleType === "new" && <NewModuleForm courseId={course._id} />}
          {moduleType === "empty" && (
            <div className="w-[60%] mx-auto h-full flex justify-center items-center gap-10">
              <Button handler={() => setModuleType("new")} bgBtn>
                New Module
              </Button>
              <Button handler={() => setModuleType("existing")} outlineBtn>
                Existing Module
              </Button>
            </div>
          )}
          {editBtn && <EditCourseForm />}
        </Modal>
      )}
      {editBtn && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
        >
          <EditCourseForm setOpenModal={setOpenModal} courseId={course?._id} fetchCourses={fetchCourses}/>
        </Modal>
      )}
    </>
  );
};

export default TableCourse;
