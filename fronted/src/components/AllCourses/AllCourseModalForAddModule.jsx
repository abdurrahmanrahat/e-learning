import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuPlus } from "react-icons/lu";
import Select from "react-select";

const AllCourseModalForAddModule = () => {

      const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
      } = useForm();

      // edit modal
      const [addModalOpen, setAddModalOpen] = useState(false);
      const addToggleModal = () => {
            setAddModalOpen(!addModalOpen);
      };


      // duration data
      const selectModule = [
            { value: "Module 1", label: "Module 1" },
            { value: "Module 2", label: "Module 2" },
            { value: "Module 3", label: "Module 3" },
            { value: "Module 4", label: "Module 4" },
            { value: "Module 5", label: "Module 5" },
            { value: "Module 6", label: "Module 6" },
            { value: "Module 7", label: "Module 7" },
            { value: "Module 8", label: "Module 8" },
            { value: "Module 9", label: "Module 9" },
            { value: "Module 10", label: "Module 10" },
      ];

      const [module, setModule] = useState("");

      const handleAddModule = (data) => {
            const addModule = {
                  title: data?.title,
                  moduleName: data?.module_name,
                  videoLink: data?.video_link,
                  videoDuration: data?.video_duration,
                  description: data?.description,
            };
            console.log(data);
      };

      return (
            <div>
                  <button
                        onClick={addToggleModal}
                        className="text-2xl font-bold
             bg-[#3A9A9A] 
             p-2 text-slate-100 rounded-lg hover:bg-[#49BBBD] transition duration-200"
                  >
                        <LuPlus />
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
                              className={`relative p-4 w-full max-w-4xl bg-white rounded-lg shadow dark:bg-gray-700 transform transition-transform duration-300 ${addModalOpen ? "scale-100" : "scale-75"
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
                                    <h1 className=" text-2xl text-gray-700 font-bold mb-5">
                                          Course Module create by Instructors
                                    </h1>
                                    <div>
                                          <form onSubmit={handleSubmit(handleAddModule)}>
                                                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mb-5">
                                                      {/* title  */}
                                                      <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                                                            <label
                                                                  className="text-[#5B5B5B] font-semibold"
                                                                  htmlFor="title"
                                                            >
                                                                  Title
                                                            </label>
                                                            <input
                                                                  type="text"
                                                                  name="title"
                                                                  placeholder="Title"
                                                                  className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                  {...register("title", { required: true })}
                                                            />
                                                            {errors.title && (
                                                                  <span className="text-red-600">
                                                                        This field is required
                                                                  </span>
                                                            )}
                                                      </div>
                                                      {/* module name  */}
                                                      <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                                                            <label
                                                                  className="text-[#5B5B5B] font-semibold"
                                                                  htmlFor="title"
                                                            >
                                                                  Module Name
                                                            </label>
                                                            <div className="flex items-center w-full ">
                                                                  <Select
                                                                        options={selectModule}
                                                                        value={selectModule.find(
                                                                              (option) => option.value === module
                                                                        )}
                                                                        onChange={(option) => setModule(option.value)}
                                                                        className="text-left  rounded-s-lg py-[3px] w-[37%] px-2 mt-2  border border-r-0 border-[#4bc0c0]"
                                                                        placeholder="Select"
                                                                        required
                                                                  />
                                                                  <input
                                                                        type="text"
                                                                        name="module_name"
                                                                        placeholder="Module name"
                                                                        className="text-left  rounded-r-lg py-3 w-[63%] mt-2 text-sm border border-l-0 pl-1 border-[#4bc0c0]"
                                                                        {...register("module_name", { required: true })}
                                                                  />
                                                            </div>
                                                            {errors.module_name && (
                                                                  <span className="text-red-600">
                                                                        This field is required
                                                                  </span>
                                                            )}
                                                      </div>
                                                </div>
                                                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mb-5">
                                                      {/* video link  */}
                                                      <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                                                            <label
                                                                  className="text-[#5B5B5B] font-semibold"
                                                                  htmlFor="title"
                                                            >
                                                                  Video Link
                                                            </label>
                                                            <input
                                                                  type="text"
                                                                  name="video_link"
                                                                  placeholder="Video link"
                                                                  className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                  {...register("video_link", { required: true })}
                                                            />
                                                            {errors.video_link && (
                                                                  <span className="text-red-600">
                                                                        This field is required
                                                                  </span>
                                                            )}
                                                      </div>
                                                      {/* video duration  */}
                                                      <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                                                            <label
                                                                  className="text-[#5B5B5B] font-semibold"
                                                                  htmlFor="title"
                                                            >
                                                                  Video Duration
                                                            </label>
                                                            <input
                                                                  type="number"
                                                                  name="video_duration"
                                                                  placeholder="Video Duration"
                                                                  className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                  {...register("video_duration", { required: true })}
                                                            />
                                                            {errors.video_duration && (
                                                                  <span className="text-red-600">
                                                                        This field is required
                                                                  </span>
                                                            )}
                                                      </div>
                                                </div>
                                                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mb-5">
                                                      {/* notes  */}
                                                      <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                                                            <label
                                                                  className="text-[#5B5B5B] font-semibold"
                                                                  htmlFor="title"
                                                            >
                                                                  Notes
                                                            </label>
                                                            <input
                                                                  type="text"
                                                                  name="notes"
                                                                  placeholder="notes"
                                                                  className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                  {...register("notes", { required: true })}
                                                            />
                                                            {errors.notes && (
                                                                  <span className="text-red-600">
                                                                        This field is required
                                                                  </span>
                                                            )}
                                                      </div>
                                                      {/* resource  */}
                                                      <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                                                            <label
                                                                  className="text-[#5B5B5B] font-semibold"
                                                                  htmlFor="title"
                                                            >
                                                                  Resource
                                                            </label>
                                                            <input
                                                                  type="text"
                                                                  name="resource"
                                                                  placeholder="Resource"
                                                                  className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                                  {...register("resource", { required: true })}
                                                            />
                                                            {errors.resource && (
                                                                  <span className="text-red-600">
                                                                        This field is required
                                                                  </span>
                                                            )}
                                                      </div>
                                                </div>
                                                {/*  description */}
                                                <div className="mt-10">
                                                      <label className="text-[#5B5B5B] font-semibold">
                                                            Description
                                                      </label>
                                                      <textarea
                                                            type="text"
                                                            placeholder="description here.."
                                                            className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                                                            {...register("description", { required: true })}
                                                      ></textarea>
                                                      {errors.description && (
                                                            <span className="text-red-600">
                                                                  This field is required
                                                            </span>
                                                      )}
                                                </div>
                                                <button
                                                      type="submit"
                                                      className="rounded border hover:bg-white hover:text-black px-4 py-2 font-bold mt-10 bg-[#4bc0c0] border-[#4bc0c0] text-white text-xl"
                                                >
                                                      Publish
                                                </button>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AllCourseModalForAddModule;