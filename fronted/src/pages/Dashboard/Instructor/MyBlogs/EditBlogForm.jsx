import Button from "../../../../components/Ui/Button";
import { FaEdit } from "react-icons/fa";
import RichTextEditor from "../../../../components/Ui/RichTextEditor";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import useBlogById from "../../../../Hooks/api/useBlogById";
import { useForm } from "react-hook-form";
import useUser from "../../../../Hooks/api/useUser";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import useAxios from "../../../../Hooks/useAxios";

// category
const category = [
  "Digital Technology",
  "programming",
  "Management",
  "Skill Development",
  "Creative Arts",
  "Languages",
  "computer",
  "Science",
  "Academic Courses",
  "Basic Computer",
  "Health & Fitness",
];

export default function EditBlogForm({ blogId, setOpenModal ,fetchInstructorBlogs}) {
  const { instructorBlog } = useBlogById(blogId);
  const { user } = useUser();
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState("");
    // const [sortDes, setSortDes] = useState("");
  const apiHandler = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: instructorBlog?.title,
      description: instructorBlog?.description,
      //   bigDescription: instructorBlog?.bigDescription,
      category: instructorBlog?.category,
    },
  });
  //   console.log(instructorBlog)

  //   handle description
  const handleEditorChange = (content) => {
    setDescription(content);
  };
  // Handle image upload to ImageBB
  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];

    if (!imageFile) return;

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      setUploading(true);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=4fcfecc8f4191aba98fe10068a124924`,
        formData
      );
      setImageUrl(res.data.data.url);
      setUploading(false);
      // toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image");
      setUploading(false);
    }
  };

  //   handle form
  const handleBlogEditBtn = (data) => {
    const updatedBlogInfo = {
      image: instructorBlog?.image || imageUrl,
      title: data?.title,
      category: data?.category,
      description: description,
      author_details: {
        authorName: user?.name,
        authorImage: user?.photoUrl,
        authorEmail: user?.email,
      },
    };
    console.log(updatedBlogInfo);

    apiHandler
      .patch(`/blogs/${blogId}`, updatedBlogInfo)
      .then((res) => {
        if (res) {
          toast.success("Course Update successfully");
          setOpenModal(false);
          fetchInstructorBlogs();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Please try again.");
      });
  };

  return (
    <div>
      <PrimaryTitle
        headingPart1={"Update"}
        headingPart2={"Blog"}
        style={"text-center"}
      />
      <form
        onSubmit={handleSubmit(handleBlogEditBtn)}
        className="space-y-8 py-10 "
      >
        <div className="space-y-8">
          <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4 items-center space-y-6 lg:space-y-0 xl:space-y-0">
            {/* name  */}
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label className="text-[#5B5B5B] font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={user?.name}
                readOnly
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("name", { required: false })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* price  */}
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label className="text-[#5B5B5B] font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={user?.email}
                readOnly
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("email", { required: false })}
              />
              {errors.price && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4 items-center space-y-6 lg:space-y-0 xl:space-y-0">
            {/* select category */}
            <div className="space-y-2">
              <label className="text-[#5B5B5B] font-semibold">Category</label>
              <select
                name="category"
                id="category"
                defaultValue={instructorBlog?.category}
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("category", { required: true })}
              >
                {/* Disabled placeholder option */}
                <option value="" disabled hidden>
                  Select Category
                </option>
                {category?.map((item, index) => (
                  <option key={index} value={item}>
                    {item === "programming" ? "Programming" : item}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="space-y-2">
              {/* select Duration */}
              <label className="text-[#5B5B5B] font-semibold">Blog Title</label>
              <input
                type="text"
                placeholder="Blog Title"
                name="title"
                defaultValue={instructorBlog?.title}
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("title", { required: false })}
              />
              {errors.title && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* choice img  */}
            <div className="space-y-2">
              <label className="text-[#5B5B5B] font-semibold">Thumbnail</label>
              <input
                type="file"
                name="photo"
                id="photoUrl"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] focus:bg-[#E8F9F9]"
              />
              {uploading && (
                <p className="text-green-600">Uploading image...</p>
              )}
              {errors.photoUrl && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          {/* description */}
          <div className="space-y-2">
            <label className="text-[#5B5B5B] font-semibold">Description</label>
            <RichTextEditor
              hight={250}
              initialValue={instructorBlog?.description}
              handleEditorChange={handleEditorChange}
            />
          </div>

          {/* button */}
          <div className="space-y-2 flex justify-center lg:justify-start xl:justify-start">
            <Button bgBtn={true} type="submit">
              <span>
                <FaEdit />
              </span>
              <span>Update</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
