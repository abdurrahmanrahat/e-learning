import { useForm } from "react-hook-form";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import Button from "../../../../components/Ui/Button";
import { FaPlus } from "react-icons/fa";
import useCourseModules from "../../../../Hooks/api/useCourseModules";
import useAxios from "../../../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ExistingModuleForm({ courseId }) {
  const { courseModules } = useCourseModules(courseId);
  const [moduleId, setModuleId] = useState("");
  const apiHandler = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // select module Id stored
  const handleChange = (event) => {
    const selectedModuleId = courseModules.find(
      (item) => item.moduleName === event.target.value
    )._id;
    console.log(selectedModuleId)
    setModuleId(selectedModuleId);
  };

  console.log(courseModules);
  const handleAddModule = (data) => {
    const existingModule = {
      title: data?.title,
      contentLink: data?.contentLink,
      duration: data?.duration,
    };
    console.log(data?.title);
    apiHandler
      .post(
        `/courses/${courseId}/course-modules/${moduleId}/add-content`,
        existingModule
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Module Added Successfully");
        reset();
        setModuleId("")
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  console.log(moduleId)

  return (
    <div className="p-6">
      <PrimaryTitle
        headingPart1={"Existing"}
        headingPart2={"Module"}
        style={"text-center mb-5"}
      />
      <div>
        <form onSubmit={handleSubmit(handleAddModule)}>
          <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mb-7">
            {/* module name  */}
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label
                className="text-[#5B5B5B] font-semibold"
                htmlFor="moduleName"
              >
                Module Name
              </label>
              <select
                name="moduleName"
                {...register("moduleName", { required: true })}
                className="w-full px-2 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-l-xl cursor-pointer"
                onChange={handleChange}
                >
                <option value="" disabled selected>
                  Module Name
                </option>
                {courseModules?.map((item, index) => (
                  <option onClick={()=> setModuleId(item._id)} key={index} value={item.moduleName}>
                    {item.moduleName}
                  </option>
                ))}
              </select>
              {errors.moduleName && (
                <span className="text-red-600">This filed is Required</span>
              )}
            </div>
            {/* content title  */}
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label
                className="text-[#5B5B5B] font-semibold"
                htmlFor="contentTitle"
              >
                Title
              </label>
              <input
                type="text"
                name="contentTitle"
                placeholder="Content title"
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
            {/* content link  */}
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label
                className="text-[#5B5B5B] font-semibold"
                htmlFor="contentLink"
              >
                Video Link
              </label>
              <input
                type="text"
                name="contentLink"
                placeholder="Your content link"
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("contentLink", { required: true })}
              />
              {errors.contentLink && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* video duration  */}
            <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
              <label
                className="text-[#5B5B5B] font-semibold"
                htmlFor="duration"
              >
                Video Duration
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Video Duration"
                className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                {...register("duration", { required: true })}
              />
              {errors.duration && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-start items-center w-full mt-5">
            <Button type="submit" bgBtn className="flex items-center gap-6">
              <span className="text-xl">
                <FaPlus />
              </span>
              <span>Add Content</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
