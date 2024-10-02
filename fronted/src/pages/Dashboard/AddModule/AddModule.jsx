import { useForm } from "react-hook-form";

const AddModule = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddModule = (data) => {
    const addModule = {
        title: data?.title,
        moduleName: data?.module_name,
        videoLink: data?.video_link,
        videoDuration: data?.video_duration,
        description: data?.description,
    };
    console.log(addModule);
    // console.log(data);
  };

  return (
    <div className="lg:m-12">
      <div className="bg-[#FFF] w-full lg:w-11/12 xl:w-11/12 lg:shadow-myCustomShadow xl:shadow-myCustomShadow lg:py-6 px-0 lg:px-6 xl:px-6 rounded-xl">
        <div className="lg:p-6">
          <h1 className=" lg:text-3xl md:text-3xl text-xl font-semibold mb-10 text-gray-600">
            Course Module create by Instructors
          </h1>
          <div>
            <form onSubmit={handleSubmit(handleAddModule)}>
              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mb-7">
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
                    className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
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
                  <input
                    type="text"
                    name="module_name"
                    placeholder="Module name"
                    className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                    {...register("module_name", { required: true })}
                  />
                  {errors.module_name && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
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
                    className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
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
                    type="text"
                    name="video_duration"
                    placeholder="Video Duration"
                    className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
                    {...register("video_duration", { required: true })}
                  />
                  {errors.video_duration && (
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
                  className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl h-[75px]"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-red-600">
                    {errors.description.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="rounded-xl border hover:bg-white hover:text-black px-4 py-2 font-bold mt-4 lg:mb-10 bg-[#4bc0c0] border-[#4bc0c0] text-white text-xl"
              >
                Add Module
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModule;
