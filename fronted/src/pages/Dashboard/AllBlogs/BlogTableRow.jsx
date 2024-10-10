import { useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import PrimaryTitle from "../../../components/Ui/PrimaryTitle";
import axios from "axios";
import Button from "../../../components/Ui/Button";

const BlogTableRow = ({ blog, idx }) => {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [imageUrl, setImageUrl] = useState(null);
      const [uploading, setUploading] = useState(false);
      const [publishedDate, setPublishedDate] = useState(""); // Add state for published date

      // Form fields state
      const [blogTitle, setBlogTitle] = useState("");
      const [shortDescription, setShortDescription] = useState("");
      const [description, setDescription] = useState("");

      const toggleModal = () => {
            setIsModalOpen(!isModalOpen);
      };

      // Handle image upload to ImgBB
      const handleImageUpload = async (e) => {
            const imageFile = e.target.files[0];
            if (!imageFile) return;

            const formData = new FormData();
            formData.append("image", imageFile); // Change 'file' to 'image' as per ImgBB API requirements.

            try {
                  setUploading(true);
                  const res = await axios.post(
                        "https://api.imgbb.com/1/upload?key=4fcfecc8f4191aba98fe10068a124924",
                        formData,
                        {
                              headers: {
                                    "Content-Type": "multipart/form-data",
                              },
                        }
                  );

                  const { data } = res.data; // Accessing the data field in the response
                  setImageUrl(data.url); // Getting the image URL from the response
                  setUploading(false);

                  toast.success("Image uploaded successfully!");
            } catch (error) {
                  toast.error("Failed to upload image");
                  setUploading(false);
            }
      };


      // Function to handle form submission
      const handleAddBlog = async (e) => {
            e.preventDefault(); // Prevent form reload

            if (!imageUrl) {
                  toast.error("Please upload an image");
                  return;
            }

            const formData = {
                  blogTitle,
                  shortDescription,
                  description,
                  imageUrl, // Use the uploaded image URL
                  publishedDate,
            };

            console.log('Update Blog data', formData);

      };

      return (
            <tr className="border-b border-slate-200 hover:bg-gray-50 ">
                  <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
                        {idx + 1}
                  </td>

                  <td className="text-sm transition duration-300 border-slate-200 py-4">
                        <img
                              className="w-[80px] h-[60px] rounded-lg "
                              src={blog?.image}
                              alt=""
                        />
                  </td>


                  <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
                        <p className="text-[#2F327D] font-medium">{blog?.title}</p>
                  </td>

                  <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
                        {blog?.author?.name}
                  </td>

                  <td className="h-12 px-6 py-3 text-sm transition duration-300 border-slate-200">
                        {blog?.published_date}
                  </td>


                  {/* Action buttons */}
                  <td className=" px-6 py-3 text-sm transition duration-300 border-slate-200 flex space-x-2">

                        {/* Update blog start from here */}
                        <div>
                              <button
                                    onClick={toggleModal} // Call the function with the blog data
                                    className="text-2xl font-bold bg-[#49BBBD] p-2 text-white rounded-lg hover:bg-[#3A9A9A] transition duration-200"
                              >
                                    <MdModeEdit />
                              </button>

                              {/* Modal for adding/updating blog */}
                              <div
                                    className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                              >
                                    {/* Background overlay */}
                                    <div
                                          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isModalOpen ? "opacity-100" : "opacity-0"}`}
                                          onClick={toggleModal}
                                    ></div>

                                    {/* Modal box */}
                                    <div
                                          className={`relative w-full max-w-5xl bg-white rounded-lg shadow transform transition-transform duration-300 ${isModalOpen ? "scale-100" : "scale-75"}`}
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
                                                                  headingPart2={"Blog"}
                                                                  style={"text-center"}
                                                            />
                                                      </div>
                                                      <form
                                                            onSubmit={handleAddBlog}
                                                            className="grid grid-cols-1 md:grid-cols-2 gap-6 "
                                                      >
                                                            {/* Blog Title */}
                                                            <div className="form-control">
                                                                  <label className="label">
                                                                        <span className="text-roboto text-[#2F327D] text-xl">Blog Title</span>
                                                                  </label>
                                                                  <input
                                                                        value={blogTitle}
                                                                        onChange={(e) => setBlogTitle(e.target.value)}
                                                                        type="text"
                                                                        placeholder="Title"
                                                                        className="mt-3 w-full px-6 py-3 border border-[#ACB4D3] bg-[#F4F6FB] text-[#2F327D] placeholder:text-[#8A90A5] rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] outline-none"
                                                                        required
                                                                  />
                                                            </div>

                                                            {/* Published Date */}
                                                            <div className="form-control">
                                                                  <label className="label">
                                                                        <span className="text-roboto text-[#2F327D] text-xl">Published Date</span>
                                                                  </label>
                                                                  <input
                                                                        value={publishedDate}
                                                                        onChange={(e) => setPublishedDate(e.target.value)}
                                                                        type="date"
                                                                        placeholder="Published Date"
                                                                        className="mt-3 w-full px-6 py-3 border border-[#ACB4D3] bg-[#F4F6FB] text-[#2F327D] placeholder:text-[#8A90A5] rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] outline-none"
                                                                        required
                                                                  />
                                                            </div>

                                                            {/* Upload image */}
                                                            <div className="space-y-2 md:col-span-2">
                                                                  <label htmlFor="photoUrl">Profile Photo</label>
                                                                  <input
                                                                        type="file"
                                                                        accept="image/*"
                                                                        onChange={handleImageUpload}
                                                                        className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] focus:bg-[#E8F9F9]"
                                                                  />
                                                                  {uploading && (
                                                                        <p className="text-green-600">Uploading image...</p>
                                                                  )}

                                                            </div>

                                                            {/* Short Description */}
                                                            <div className="form-control">
                                                                  <label className="label">
                                                                        <span className="text-roboto text-[#2F327D] text-xl">Short Description</span>
                                                                  </label>
                                                                  <textarea
                                                                        value={shortDescription}
                                                                        onChange={(e) => setShortDescription(e.target.value)}
                                                                        placeholder="Short description"
                                                                        className="mt-3 w-full px-6 py-3 border border-[#ACB4D3] bg-[#F4F6FB] text-[#2F327D] placeholder:text-[#8A90A5] rounded-xl focus:ring-2 focus:ring-[#49BBBD] outline-none"
                                                                        required
                                                                  ></textarea>
                                                            </div>

                                                            {/* Long Description */}
                                                            <div className="form-control">
                                                                  <label className="label">
                                                                        <span className="text-roboto text-[#2F327D] text-xl">Description</span>
                                                                  </label>
                                                                  <textarea
                                                                        value={description}
                                                                        onChange={(e) => setDescription(e.target.value)}
                                                                        placeholder="Description"
                                                                        className="mt-3 w-full px-6 py-3 border border-[#ACB4D3] bg-[#F4F6FB] text-[#2F327D] placeholder:text-[#8A90A5] rounded-xl focus:ring-2 focus:ring-[#49BBBD] outline-none"
                                                                        required
                                                                  ></textarea>
                                                            </div>

                                                            <div className="form-control w-fit">
                                                                  <Button bgBtn>
                                                                        Update Blog
                                                                  </Button>
                                                            </div>
                                                      </form>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div> {/* Update blog button ends here */}

                        {/* button for delete */}
                        <button className="text-2xl font-bold bg-red-500 p-2 text-white rounded-lg hover:bg-red-700 transition duration-200">
                              <MdDeleteForever />
                        </button>
                  </td>
            </tr>
      );
};

export default BlogTableRow;