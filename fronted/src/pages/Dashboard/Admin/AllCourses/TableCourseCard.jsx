import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { useState } from "react";
import Select from "react-select";
import toast from "react-hot-toast";
import axios from "axios";
// import useAxios from "../../../../Hooks/useAxios";
// import { useNavigate } from "react-router-dom";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import Rating from "../../../../components/Ui/Rating";
import { LuPlus } from "react-icons/lu";
import { useForm } from "react-hook-form";

const TableCourseCard = ({ course, idx }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  // edit modal
  const [addModalOpen, setAddModalOpen] = useState(false);
  const addToggleModal = () => {
    setAddModalOpen(!addModalOpen);
  };

  // const apiHandler = useAxios();
  // const navigate = useNavigate();

  // const { _id, title, category, image, instructorImg, instructorName, instructorEmail, price, description, bigDescription, courseDuration, totalRatings, averageRatings, isDeleted, createdAt, updatedAt, __v } = course || {};

  //  add module field status

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
  
  

  // Form fields state
  const [courseTitle, setCourseTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");

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
    { value: "1 Month", label: "1 Month" },
    { value: "2 Months", label: "2 Months" },
    { value: "3 Months", label: "3 Months" },
    { value: "4 Months", label: "4 Months" },
    { value: "5 Months", label: "5 Months" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle image upload to ImageBB
  const handleImageUpload = async (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=4fcfecc8f4191aba98fe10068a124924`,
        formData
      );
      setImageUrl(res.data.data.url);
    } catch (error) {
      toast.error("Failed to upload image");
    }
  };

  // Handle image change and upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageUrl(file);
    handleImageUpload(file);
  };

  // Function to handle form submission
  const handleUpdate = (e) => {
    e.preventDefault(); // Prevent form reload

    if (!imageUrl) {
      toast.error("Please upload an image");
      return;
    }

    const formData = {
      courseTitle,
      price,
      category,
      duration,
      shortDescription,
      description,
      imageUrl, // Use the uploaded image URL
    };

    // apiHandler
    //   .patch("/courses/66f1646793b0c49d453cb60a", formData)
    //   .then((res) => {
    //     toast.success("Successfully Update the Course");

    //     if (res.data) {
    //       navigate("/dashboard/admin/all-courses");
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(err?.message);
    //   });

    // Log or submit the form data (you can replace this with API call)
    console.log(formData);
  };

  return (
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

      {/* button for edit */}
      <td className=" px-6 py-3 text-sm transition duration-300 border-slate-200 flex space-x-2">
        <button
          onClick={toggleModal}
          className="text-2xl font-bold bg-[#49BBBD] p-2 text-white rounded-lg hover:bg-[#3A9A9A] transition duration-200"
        >
          <MdModeEdit />
        </button>

        {/* Modal for updating course */}
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
            className={`relative w-full max-w-5xl bg-white rounded-lg shadow transform transition-transform duration-300 ${
              isModalOpen ? "scale-100" : "scale-75"
            }`}
          >
            {/* Modal content */}
            <div className="relative rounded-lg max-h-[90vh] overflow-y-auto">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm inline-flex justify-center items-center"
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
                <div className="mb-6">
                  <PrimaryTitle
                    headingPart1={"Update"}
                    headingPart2={"Course"}
                    style={"text-center"}
                  />
                </div>
                <form
                  onSubmit={handleUpdate}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-[600px]"
                >
                  {/* Title */}
                  <div className="form-control">
                    <label className="label">
                      <span className="text-roboto text-[#2F327D] text-xl">
                        Course Title
                      </span>
                    </label>
                    <input
                      onChange={(e) => setCourseTitle(e.target.value)}
                      type="text"
                      placeholder="Title"
                      className="mt-3 w-full px-6 py-3 border border-[#ACB4D3] bg-[#F4F6FB] text-[#2F327D] placeholder:text-[#8A90A5] rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] outline-none"
                      required
                    />
                  </div>

                  {/* Price */}
                  <div className="form-control">
                    <label className="label">
                      <span className="text-roboto text-[#2F327D] text-xl">
                        Price
                      </span>
                    </label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      placeholder="Price"
                      className="mt-3 w-full px-6 py-3 border border-[#ACB4D3] bg-[#F4F6FB] text-[#2F327D] placeholder:text-[#8A90A5] rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] outline-none"
                      required
                    />
                  </div>

                  {/* Select Category */}
                  <div className="form-control">
                    <label className="label">
                      <span className="text-roboto text-[#2F327D] text-xl">
                        Select Category
                      </span>
                    </label>
                    <Select
                      options={categoryOptions}
                      value={categoryOptions.find(
                        (option) => option.value === category
                      )}
                      onChange={(option) => setCategory(option.value)}
                      className="mt-3 w-full border border-[#ACB4D3] rounded-xl focus:ring-2 focus:ring-[#49BBBD]"
                      placeholder="Select category"
                      required
                    />
                  </div>

                  {/* Select Duration */}
                  <div className="form-control">
                    <label className="label">
                      <span className="text-roboto text-[#2F327D] text-xl">
                        Select Duration
                      </span>
                    </label>
                    <Select
                      value={durationOptions.find(
                        (option) => option.value === duration
                      )}
                      onChange={(option) => setDuration(option.value)}
                      options={durationOptions}
                      className="mt-3 w-full border border-[#ACB4D3] rounded-xl focus:ring-2 focus:ring-[#49BBBD]"
                      placeholder="Select duration"
                      required
                    />
                  </div>

                  {/* Short Description */}
                  <div className="form-control">
                    <label className="label">
                      <span className="text-roboto text-[#2F327D] text-xl">
                        Short Description
                      </span>
                    </label>
                    <textarea
                      value={shortDescription}
                      onChange={(e) => setShortDescription(e.target.value)}
                      placeholder="Short description"
                      className="mt-3 w-full px-6 py-3 border border-[#ACB4D3] bg-[#F4F6FB] text-[#2F327D] placeholder:text-[#8A90A5] rounded-xl focus:ring-2 focus:ring-[#49BBBD] outline-none"
                    ></textarea>
                  </div>

                  {/* Choice Image */}
                  <div className="form-control">
                    <label className="label">
                      <span className="text-roboto text-[#2F327D] text-xl">
                        Choice Image
                      </span>
                    </label>
                    <input
                      accept="image/*"
                      onChange={handleImageChange}
                      type="file"
                      className="mt-3 w-full px-6 py-3 border border-[#ACB4D3] bg-[#F4F6FB] text-[#2F327D] placeholder:text-[#8A90A5] rounded-xl focus:ring-2 focus:ring-[#49BBBD] outline-none"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="text-roboto text-[#2F327D] text-xl">
                        Description
                      </span>
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Your description"
                      className="mt-3 w-full px-6 py-3 border border-[#ACB4D3] bg-[#F4F6FB] text-[#2F327D] placeholder:text-[#8A90A5] rounded-xl focus:ring-2 focus:ring-[#49BBBD] outline-none"
                      rows="4"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="form-control mt-5 w-full col-span-2">
                    <button
                      type="submit"
                      className="px-7 py-3 text-xl font-bold text-white bg-[#49BBBD] rounded-lg hover:bg-emerald-500 w-full"
                    >
                      Update Course
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* button for add module */}
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
            className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
              addModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {/* Background overlay */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                addModalOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={addToggleModal}
            ></div>
            {/* modal box  */}
            <div
              className={`relative p-4 w-full max-w-4xl bg-white rounded-lg shadow dark:bg-gray-700 transform transition-transform duration-300 ${
                addModalOpen ? "scale-100" : "scale-75"
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
                  <form
                  onSubmit={handleSubmit(handleAddModule)}
                  >
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
                    <span className="text-red-600">This field is required</span>
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
                      onChange={(option) =>setModule(option.value)}
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
                    <span className="text-red-600">This field is required</span>
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
                    <span className="text-red-600">This field is required</span>
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
                    <span className="text-red-600">This field is required</span>
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
                    <span className="text-red-600">This field is required</span>
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
                    <span className="text-red-600">This field is required</span>
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
                    <span className="text-red-600">This field is required</span>
                  )}
                    </div>
                    <button type="submit" className="rounded border hover:bg-white hover:text-black px-4 py-2 font-bold mt-10 bg-[#4bc0c0] border-[#4bc0c0] text-white text-xl">
                      Publish
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* button for delete */}
        <button className="text-2xl font-bold bg-red-500 p-2 text-white rounded-lg hover:bg-red-700 transition duration-200">
          <MdDeleteForever />
        </button>
      </td>
    </tr>
  );
};

export default TableCourseCard;
