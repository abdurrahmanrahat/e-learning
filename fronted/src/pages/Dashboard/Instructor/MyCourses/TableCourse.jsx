import { useState } from "react";
import Rating from "../../../../components/Ui/Rating";
import Modal from "../../../../components/Ui/Modal";
import Button from "../../../../components/Ui/Button";
import NewModuleForm from "./NewModuleForm";
import ExistingModuleForm from "./ExistingModuleForm";

const TableCourse = ({ course, idx }) => {
  const [openModal, setOpenModal] = useState(false);
  const [moduleType, setModuleType] = useState("");

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
      {openModal && (
        <Modal openModal={openModal} setOpenModal={setOpenModal} setModuleType={setModuleType}>
          {moduleType === "existing" && <ExistingModuleForm courseId={course._id}/>}
          {moduleType === "new" && <NewModuleForm courseId={course._id}/>}
          {moduleType === "" && (
            <div className="w-[60%] mx-auto h-full flex justify-center items-center gap-10">
              <Button handler={()=> setModuleType('new')} bgBtn>New Module</Button>
              <Button handler={()=> setModuleType('existing')} outlineBtn>Existing Module</Button>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default TableCourse;
