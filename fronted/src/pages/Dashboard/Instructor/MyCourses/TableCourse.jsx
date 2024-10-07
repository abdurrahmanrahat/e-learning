import { useState } from "react";
import Rating from "../../../../components/Ui/Rating";
import ModuleForm from "./ModuleForm";
import Modal from "../../../../components/Ui/Modal";

const TableCourse = ({ course, idx }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <tr className="border-b border-slate-200 hover:bg-gray-50">
        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          {idx + 1}
        </td>

        <td className="text-sm transition duration-300 border-slate-200">
          <img
            className="w-[80px] h-[60px] rounded-lg "
            src={course?.image}
            alt=""
          />
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          <p className="text-[#2F327D] font-medium">{course?.title}</p>
          <span className="text-slate-500">{course?.category}</span>
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          {course?.instructorName}
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          ${course?.price}
        </td>

        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          {course?.courseDuration}
          <span className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
            <Rating value={course?.totalRatings} />
            <span className="text-sm text-[#969696]">
              ({course?.totalRatings})
            </span>
          </span>
        </td>
        <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
          <span
            onClick={() => setOpenModal(true)}
            className="cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"
          >
            Add Module
          </span>
        </td>
      </tr>
      { openModal &&
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <ModuleForm/>
        </Modal>
      }
    </>
  );
};

export default TableCourse;
