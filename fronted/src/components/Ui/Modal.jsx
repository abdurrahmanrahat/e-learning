import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ children, setOpenModal, openModal, setModuleType }) => {
  // category data
  const categoryOptions = [
    { value: "education", label: "education" },
    { value: "programming", label: "programming" },
    { value: "webDevelopment", label: "webDevelopment" },
    { value: "general", label: "general" },
    { value: "softwareDevelopment", label: "softwareDevelopment" },
    { value: "computer", label: "computer" },
    { value: "technology", label: "technology" },
  ];

  // duration data
  const durationOptions = [
    { value: "1 Months", label: "1 Month" },
    { value: "2 Months", label: "2 Months" },
    { value: "3 Months", label: "3 Months" },
    { value: "4 Months", label: "4 Months" },
    { value: "5 Months", label: "5 Months" },
  ];
  // handle close button
  const handleCloseBtn = () => {
    setOpenModal(false);
    setModuleType("");
  };

  return (
    <>
      {/* Main modal */}
      <div
        className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
          openModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            openModal ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpenModal(false)}
        ></div>

        {/* Modal box */}
        <div
          className={`relative p-4 w-full max-w-6xl bg-white rounded-lg shadow dark:bg-gray-700 transform transition-transform duration-300 h-[80vh] flex flex-col items-center overflow-y-scroll ${
            openModal ? "scale-100" : "scale-75"
          }`}
        >
          <span
            onClick={handleCloseBtn}
            className="w-full flex justify-end cursor-pointer text-3xl"
          >
            <IoIosCloseCircle />
          </span>
          {/* Modal content */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;