import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import useAxios from "../../../../Hooks/useAxios";
import useUser from "../../../../Hooks/api/useUser";
import RichTextEditor from "../../../../components/Ui/RichTextEditor";

// category data
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

// duration data
const duration = [
  "1 Months",
  "2 Months",
  "3 Months",
  "6 Months",
  "9 Months",
  "12 Months",
];

const AddCourse = () => {
  const { user } = useUser();
  const apiHandler = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState("");
  const [sortDes, setSortDes] = useState("");

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

  // handle description
  const handleEditorChange = (content) => {
    setDescription(content);
    setSortDes(content);
  }
  const handleAddCourse = async (data) => {
    const newCourse = {
      instructorName: user?.name,
      instructorEmail: user?.email,
      instructorImg: user?.photoUrl,
      title: data?.title,
      price: Number(data?.price),
      image: imageUrl,
      description: sortDes,
      bigDescription: description,
      courseDuration: data?.duration,
      category: data?.category,
    };
    console.log(newCourse);

    apiHandler
      .post("/courses/create-course", newCourse)
      .then((res) => {
        if (res) {
          toast.success("Course Added successfully");
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Please try again.");
      });
  };

  return (
    <div className="bg-[#FFF] w-11/12 shadow-myCustomShadow p-10 rounded-2xl mx-auto my-10">
      <PrimaryTitle
        headingPart1={"Add"}
        headingPart2={"Course"}
        style={"text-center"}
      />
      <form
        onSubmit={handleSubmit(handleAddCourse)}
        className="space-y-8 py-10 "
      >
        <div className="space-y-8">
          <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4 items-center space-y-6 lg:space-y-0 xl:space-y-0">
            {/* title  */}
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label className="text-[#5B5B5B] font-semibold" htmlFor="title">
                Course Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Course title"
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* price  */}
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label className="text-[#5B5B5B] font-semibold">
                Course Price
              </label>
              <input
                type="number"
                placeholder="Course price"
                name="price"
                step="any"
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("price", { required: true })}
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
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("category", { required: true })}
              >
                {/* Disabled placeholder option */}
                <option value="" disabled selected hidden>
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
              <label className="text-[#5B5B5B] font-semibold">
                Course Duration
              </label>
              <select
                placeholder="Course Duration"
                name="duration"
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("duration", { required: true })}
              >
                {/* Disabled placeholder option */}
                <option value="" disabled selected hidden>
                  Course duration
                </option>
                {duration?.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.duration && (
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

          {/* sort description */}
          <div className="space-y-2">
            <label className="text-[#5B5B5B] font-semibold">
              Short Description
            </label>
            <RichTextEditor hight={200} handleEditorChange={handleEditorChange}/>
          </div>

          {/* description */}
          <div className="space-y-2">
            <label className="text-[#5B5B5B] font-semibold">Description</label>
            <RichTextEditor hight={250} handleEditorChange={handleEditorChange}/>
          </div>

          {/* button */}
          <div className="space-y-2 flex justify-center lg:justify-start xl:justify-start">
            <button
              type="submit"
              className="bg-[#49BBBD] px-12 py-4 rounded-xl text-white cursor-pointer flex justify-center items-center gap-2 uppercase w-full lg:w-0 xl:w-0"
            >
              <span>
                <FaPlus />
              </span>
              <span>Add</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
