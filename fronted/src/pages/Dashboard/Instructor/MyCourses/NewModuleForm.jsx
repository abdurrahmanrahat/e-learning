import { useForm } from "react-hook-form";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import Button from "../../../../components/Ui/Button";
import { FaPlus } from "react-icons/fa";
import useAxios from "../../../../Hooks/useAxios";
import toast from "react-hot-toast";

export default function NewModuleForm({courseId}) {
  const apiHandler = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddModule = (data) => {
    const newModule = {
      moduleName : `${data?.moduleNumber + `:` + ` ` + data?.moduleName}`,
      description: data?.description,
      resources: data?.resources,
      notes: data?.notes,
      content : [
        {
          title: data?.title,
          duration: data?.duration,
          contentLink: data?.contentLink
        }
      ]
    }
    console.log(newModule);
    apiHandler.post(`/courses/${courseId}/course-modules/create-course-module`, newModule)
    .then(res => {
      console.log(res.data);
      toast.success('New Module is added successfully');
      reset();
    })
    .catch(err => {
      console.log(err.message);
      toast.error(err.message);
    })
  };

  return (
    <div className="p-6">
      <PrimaryTitle
        headingPart1={"New"}
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
              <div className="flex gap-0 items-center">
                <div className="w-[30%] flex flex-col gap-2">
                  <select
                    name="moduleNumber"
                    {...register("moduleNumber", { required: true })}
                    className="px-2 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-l-xl cursor-pointer"
                  >
                    <option value="" disabled selected>
                      Module Number
                    </option>
                    {[
                      "Module-1",
                      "Module-2",
                      "Module-3",
                      "Module-4",
                      "Module-5",
                      "Module-6",
                      "Module-7",
                      "Module-8",
                      "Module-9",
                      "Module-10",
                    ]?.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.moduleNumber && (
                    <span className="text-red-600">Required</span>
                  )}
                </div>
                <div className="w-[70%] flex flex-col gap-2">
                  <input
                    type="text"
                    name="moduleName"
                    placeholder="Module name"
                    className="px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-r-xl"
                    {...register("moduleName", { required: true })}
                  />
                  {errors.moduleName && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
              </div>
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
          {/*  Notes */}
          <div className="mt-10">
            <label className="text-[#5B5B5B] font-semibold">Notes</label>
            <textarea
              type="text"
              placeholder="Notes Add here.."
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl h-[75px]"
              {...register("notes", { required: false })}
            ></textarea>
            {errors.notes && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/*  Resources */}
          <div className="mt-10">
            <label className="text-[#5B5B5B] font-semibold">Resources</label>
            <textarea
              type="text"
              placeholder="Resources add here.."
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl h-[75px]"
              {...register("resources", { required: false })}
            ></textarea>
            {errors.resources && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/*  Description */}
          <div className="mt-10">
            <label className="text-[#5B5B5B] font-semibold">Description</label>
            <textarea
              type="text"
              placeholder="description here.."
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl h-[75px]"
              {...register("description", {
                required: "Description is required",
                validate: (value) => {
                  const wordCount = value
                    .trim()
                    .split(/\s+/)
                    .filter((word) => word.length > 0).length;
                  if (wordCount < 200) {
                    return "Description must be at least 200 words.";
                  }
                  return true;
                },
              })}
            ></textarea>
            {errors.description && (
              <span className="text-red-600">{errors.description.message}</span>
            )}
          </div>

          <div className="flex flex-start items-center w-full mt-5">
            <Button type="submit" bgBtn className="flex items-center gap-6">
              <span className="text-xl">
                <FaPlus />
              </span>
              <span>Add Module</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
