import PrimaryTitle from '../../../components/Ui/PrimaryTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogTableRow from './BlogTableRow';
import toast from 'react-hot-toast';
import Button from '../../../components/Ui/Button';

const AllBlogs = () => {
      const [blogs, setBlogs] = useState([]);
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
            formData.append("image", imageFile);

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

                  const { data } = res.data;
                  setImageUrl(data.url);
                  setUploading(false);

                  toast.success("Image uploaded successfully!");
            } catch (error) {
                  toast.error("Failed to upload image");
                  setUploading(false);
            }
      };


      // Function to handle form submission
      const handleAddBlog = async (e) => {
            e.preventDefault();

            if (!imageUrl) {
                  toast.error("Please upload an image");
                  return;
            }

            const formData = {
                  blogTitle,
                  shortDescription,
                  description,
                  imageUrl,
                  publishedDate,
            };

            console.log('Add Blog data', formData);

      };

      // Function to fetch blogs
      const fetchBlogs = async () => {
            try {
                  const response = await axios.get('/blogs.json');
                  setBlogs(response?.data);
            } catch (error) {
                  console.log('Fetch error:', error.message);
            }
      };

      useEffect(() => {
            fetchBlogs();
      }, []);

      return (
            <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
                  <div className="mb-6">
                        <PrimaryTitle
                              headingPart1={"All"}
                              headingPart2={"Blogs"}
                              style={"text-center text-4xl font-semibold text-[#2F327D]"}
                        />

                        {/* Add new blog button start from here */}
                        <div>
                              <div onClick={toggleModal} className='w-fit'>
                                    <Button bgBtn>
                                          Add New Blog
                                    </Button>
                              </div>

                              {/* Modal for adding blog */}
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
                                                                  headingPart1={"Add"}
                                                                  headingPart2={"New Blog"}
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
                                                                        Add Blog
                                                                  </Button>
                                                            </div>
                                                      </form>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div> {/* Add new blog button ends here */}
                  </div>

                  {/* Blog Table */}
                  <div className="overflow-auto bg-white rounded-lg shadow">
                        <table className="table-auto w-full">
                              <thead>
                                    <tr className="bg-primary text-white">
                                          <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                                          <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
                                          <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                                          <th className="px-6 py-3 text-left text-sm font-semibold">Author</th>
                                          <th className="px-6 py-3 text-left text-sm font-semibold">Publish Date</th>
                                          <th className="px-6 py-3 text-left text-sm font-semibold"></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {blogs?.map((blog, idx) => (
                                          <BlogTableRow
                                                key={blog._id}
                                                blog={blog}
                                                idx={idx}
                                          />
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default AllBlogs;
