import { useState } from "react";
import Rating from "../../../../components/Ui/Rating";
<<<<<<< HEAD
import { MdDeleteForever } from "react-icons/md";
import MyCourseModalForUpdate from "./MyCourseModalForUpdate";
import MyCourseModalForAddModule from "./MyCourseModalForAddModule";

const TableCourse = ({ course, idx }) => {
=======
import Modal from "../../../../components/Ui/Modal";
import Button from "../../../../components/Ui/Button";
import NewModuleForm from "./NewModuleForm";
import ExistingModuleForm from "./ExistingModuleForm";

const TableCourse = ({ course, idx }) => {
  const [openModal, setOpenModal] = useState(false);
  const [moduleType, setModuleType] = useState("");
>>>>>>> 39d7e661924e6413d0715fc6e0b991ecb1fdc7ac

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
<<<<<<< HEAD
        </span>
      </td>

      {/* button for edit */}
      <td className=" px-6 py-3 text-sm transition duration-300 border-slate-200 flex space-x-2">

        {/* Modal for updating course */}
        <div>
          <MyCourseModalForUpdate />
        </div>

        {/* button for add module */}
        <div>
          <MyCourseModalForAddModule />
        </div>

        {/* button for delete */}
        <button className="text-2xl font-bold bg-red-500 p-2 text-white rounded-lg hover:bg-red-700 transition duration-200">
          <MdDeleteForever />
        </button>
      </td>
    </tr>
=======
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
>>>>>>> 39d7e661924e6413d0715fc6e0b991ecb1fdc7ac
  );
};

export default TableCourse;
