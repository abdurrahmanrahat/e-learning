import { useState } from "react";
import toast from "react-hot-toast";
import { MdModeEdit } from "react-icons/md";
import Select from "react-select";
import axios from "axios";
import PrimaryTitle from "../Ui/PrimaryTitle";


const AllCourseModalForUpdate = () => {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [imageUrl, setImageUrl] = useState(null);

      // const apiHandler = useAxios();
      // const navigate = useNavigate();

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
            <div>
                  <button
                        onClick={toggleModal}
                        className="text-2xl font-bold bg-[#49BBBD] p-2 text-white rounded-lg hover:bg-[#3A9A9A] transition duration-200"
                  >
                        <MdModeEdit />
                  </button>

                  {/* Modal for updating course */}
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

                        {/* Modal box */}
                        <div
                              className={`relative w-full max-w-5xl bg-white rounded-lg shadow transform transition-transform duration-300 ${isModalOpen ? "scale-100" : "scale-75"
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
            </div>
      );
};

export default AllCourseModalForUpdate;