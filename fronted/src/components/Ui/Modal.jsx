import { useState } from "react";
import Select from "react-select";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Modal toggle */}
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Open modal
      </button>

      {/* Main modal */}
      <div
        className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
          isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleModal}
        ></div>

        {/* Modal box */}
        <div
          className={`relative p-4 w-full max-w-6xl bg-white rounded-lg shadow dark:bg-gray-700 transform transition-transform duration-300 ${
            isModalOpen ? "scale-100" : "scale-75"
          }`}
        >
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-[80vh] overflow-y-auto overflow-x-auto">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6">
              <h1 className="text-center text-4xl font-bold my-5">
                Add Course
              </h1>
              <div className="border bg-[#e0f2fe] mb-20 rounded-lg max-w-full mx-auto p-8 overflow-x-auto">
                <form
                  // onSubmit={handleSubmit(handleAddCourse)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 min-w-[600px]" // ensure enough width for horizontal scrolling
                >
                  {/* Title */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-xl text-gray-600">
                        Course Title
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="text-left w-full rounded py-3 px-5 mt-3 text-sm"
                      required
                    />
                  </div>

                  {/* Price */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-xl text-gray-600">
                        Price
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Price"
                      className="text-left w-full rounded py-3 px-5 mt-3 text-sm"
                      required
                    />
                  </div>

                  {/* Select Category */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-xl text-gray-600">
                        Select Category
                      </span>
                    </label>
                    <Select
                      options={categoryOptions}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm"
                      placeholder="Select category"
                      required
                    />
                  </div>

                  {/* Select Duration */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-xl text-gray-600">
                        Select Duration
                      </span>
                    </label>
                    <Select
                      options={durationOptions}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm"
                      placeholder="Select duration"
                      required
                    />
                  </div>

                  {/* Short Description */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-xl text-gray-600">
                        Short Description
                      </span>
                    </label>
                    <textarea
                      placeholder="Short description"
                      className="w-full rounded p-2 mt-3"
                      rows="2"
                    ></textarea>
                  </div>

                  {/* Choice Image */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-xl text-gray-600">
                        Choice Image
                      </span>
                    </label>
                    <input
                      type="file"
                      placeholder="Image file"
                      className="w-full rounded p-4 mt-3 bg-white"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text font-semibold text-xl text-gray-600">
                        Description
                      </span>
                    </label>
                    <textarea
                      placeholder="Your description"
                      className="w-full rounded p-5 mt-3"
                      rows="4"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="form-control mt-5 w-[200px]">
                    <button
                      type="submit"
                      className="px-7 py-3 text-xl font-bold text-white bg-[#49BBBD] rounded-lg hover:bg-emerald-500"
                    >
                      Add Course
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
