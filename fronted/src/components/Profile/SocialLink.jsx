import { useState } from "react";
import { useForm } from "react-hook-form";

const SocialLink = () => {
      const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
      } = useForm();

      // add modal
      const [isModalOpen, setIsModalOpen] = useState(false);
      const toggleModal = () => {
            setIsModalOpen(!isModalOpen);
      };
      // edit modal
      const [addModalOpen, setAddModalOpen] = useState(false);
      const addToggleModal = () => {
            setAddModalOpen(!addModalOpen);
      };

      const handleAddInstructorLink = (data) => {
            const editProfile = {
                  studentName: data?.name,
                  studentProjectLink: data?.link,
            };
            console.log(editProfile);
      };
      return (
            <div className="py-10">
                  <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-600">Github Profile link</h2>
                        <p className="font-semibold mt-2">
                              open link:{" "}
                              <a
                                    className="ml-2 underline underline-offset-2 text-[#c084fc]"
                                    href="https://github.com/your-username"
                              >
                                    {" "}
                                    https://github.com/your-username
                              </a>
                        </p>
                  </div>
                  <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-600">Portfolio link</h2>
                        <p className="font-semibold mt-2">
                              open link:{" "}
                              <a
                                    className="ml-2 underline underline-offset-2 text-[#c084fc]"
                                    href="https://github.com/your-username"
                              >
                                    {" "}
                                    https://portfolio.com/your-username
                              </a>
                        </p>
                  </div>
                  <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-600">
                              LinkedIn Profile link
                        </h2>
                        <p className="font-semibold mt-2">
                              open link:{" "}
                              <a
                                    className="ml-2 underline underline-offset-2 text-[#c084fc]"
                                    href="https://github.com/your-username"
                              >
                                    {" "}
                                    https://linkedIn.com/your-username
                              </a>
                        </p>
                  </div>
                  <div className="mb-5">
                        <h2 className="text-xl font-bold text-gray-600">
                              Facebook Profile link
                        </h2>
                        <p className="font-semibold mt-2">
                              open link:{" "}
                              <a
                                    className="ml-2 underline underline-offset-2 text-[#c084fc]"
                                    href="https://github.com/your-username"
                              >
                                    {" "}
                                    https://facebook.com/your-username
                              </a>
                        </p>
                  </div>
                  <div className="flex flex-col lg:flex-row md:flex-row gap-4 items-center">
                        <button
                              onClick={addToggleModal}
                              className="border px-4 py-2 font-bold mt-5 hover:bg-[#4bc0c0]  border-[#4bc0c0] hover:text-white"
                        >
                              <span className="text-[#4bc0c0] hover:text-white ">+</span> Add
                              Project link
                        </button>
                        {/* modal  add link*/}
                        <div
                              className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${addModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                    }`}
                        >
                              {/* Background overlay */}
                              <div
                                    className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${addModalOpen ? "opacity-100" : "opacity-0"
                                          }`}
                                    onClick={addToggleModal}
                              ></div>
                              {/* modal box  */}
                              <div
                                    className={`relative p-4 w-full max-w-[500px] bg-white rounded-lg shadow dark:bg-gray-700 transform transition-transform duration-300 ${addModalOpen ? "scale-100" : "scale-75"
                                          }`}
                              >
                                    {/* modal content  */}
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-[80vh]  overflow-y-auto overflow-x-auto">
                                          {/* Modal header */}
                                          <div className="flex items-center justify-between p-4 md:p-3 border-b rounded-t dark:border-gray-600">
                                                <button
                                                      type="button"
                                                      onClick={addToggleModal}
                                                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                      <svg
                                                            className="w-4 h-4 text-red-600 font-bold"
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
                                    </div>

                                    {/* modal body  */}
                                    <div className="p-6">
                                          <h1 className=" text-xl font-bold mb-5">Add Project Link</h1>
                                          <div>
                                                <form onSubmit={handleSubmit(handleAddInstructorLink)}>
                                                      <div className="w-full mb-3">
                                                            <label className="label">
                                                                  <span className="label-text font-semibold text-md text-gray-600">
                                                                        Link Name :
                                                                  </span>
                                                            </label>
                                                            <input
                                                                  type="text"
                                                                  placeholder="Link Name"
                                                                  className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                  required
                                                                  {...register("name", { required: true })}
                                                            />
                                                      </div>
                                                      <div className="w-full">
                                                            <label className="label">
                                                                  <span className="label-text font-semibold text-md text-gray-600">
                                                                        Link :
                                                                  </span>
                                                            </label>
                                                            <input
                                                                  type="link"
                                                                  placeholder="Link"
                                                                  className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                  required
                                                                  {...register("link", { required: true })}
                                                            />
                                                      </div>

                                                      <button className="rounded border hover:bg-white hover:text-black px-4 py-2 font-bold mt-10 bg-[#4bc0c0] border-[#4bc0c0] text-white text-xl">
                                                            Save
                                                      </button>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <button
                              onClick={toggleModal}
                              className="border px-4 py-2 font-bold mt-5 hover:bg-[#4bc0c0]  border-[#4bc0c0] hover:text-white"
                        >
                              Edit link
                        </button>
                        <div>
                              <div
                                    className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                          }`}
                              >
                                    {/* Background overlay */}
                                    <div
                                          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isModalOpen ? "opacity-100" : "opacity-0"
                                                }`}
                                          onClick={toggleModal}
                                    ></div>
                                    {/* model box  */}
                                    <div
                                          className={`relative p-4 w-full max-w-4xl bg-white rounded-lg shadow dark:bg-gray-700 transform transition-transform duration-300 ${isModalOpen ? "scale-100" : "scale-75"
                                                }`}
                                    >
                                          {/* modal content  */}
                                          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-[80vh]  overflow-y-auto overflow-x-auto">
                                                {/* Modal header */}
                                                <div className="flex items-center justify-between p-4 md:p-3 border-b rounded-t dark:border-gray-600">
                                                      <button
                                                            type="button"
                                                            onClick={toggleModal}
                                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                      >
                                                            <svg
                                                                  className="w-4 h-4 text-red-600 font-bold"
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
                                          </div>
                                          {/* modal body  */}
                                          <div className="p-6">
                                                <h1 className=" text-xl font-bold mb-5">Edit Link</h1>
                                                <div>
                                                      <form>
                                                            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mb-5">
                                                                  <div className="w-full lg:w-[50%]">
                                                                        <label className="label">
                                                                              <span className="label-text font-semibold text-md text-gray-600">
                                                                                    Github Profile link :
                                                                              </span>
                                                                        </label>
                                                                        <input
                                                                              type="text"
                                                                              placeholder="Github link"
                                                                              className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                              required
                                                                        />
                                                                  </div>
                                                                  <div className="w-full lg:w-[50%]">
                                                                        <label className="label">
                                                                              <span className="label-text font-semibold text-md text-gray-600">
                                                                                    Portfolio link :
                                                                              </span>
                                                                        </label>
                                                                        <input
                                                                              type="text"
                                                                              placeholder="Portfolio link"
                                                                              className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                              required
                                                                        />
                                                                  </div>
                                                            </div>
                                                            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
                                                                  <div className="w-full lg:w-[50%]">
                                                                        <label className="label">
                                                                              <span className="label-text font-semibold text-md text-gray-600">
                                                                                    LinkedIn Profile link
                                                                              </span>
                                                                        </label>
                                                                        <input
                                                                              type="text"
                                                                              placeholder="linked link"
                                                                              className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                              required
                                                                        />
                                                                  </div>
                                                                  <div className="w-full lg:w-[50%]">
                                                                        <label className="label">
                                                                              <span className="label-text font-semibold text-md text-gray-600">
                                                                                    Facebook Profile link :
                                                                              </span>
                                                                        </label>
                                                                        <input
                                                                              type="text"
                                                                              placeholder="Facebook link"
                                                                              className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                              required
                                                                        />
                                                                  </div>
                                                            </div>

                                                            <button className="rounded border hover:bg-white hover:text-black px-4 py-2 font-bold mt-10 bg-[#4bc0c0] border-[#4bc0c0] text-white text-xl">
                                                                  Save
                                                            </button>
                                                      </form>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SocialLink;
