import { useForm } from "react-hook-form";
import Select from "react-select";

const AddCourse = () => {
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
    { value: "1 Months", label: "1 Months" },
    { value: "2 Months", label: "2 Months" },
    { value: "3 Months", label: "3 Months" },
    { value: "4 Months", label: "4 Months" },
    { value: "5 Months", label: "5 Months" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddCourse = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-5 ">Add Course</h1>
      <div className="border bg-[#e0f2fe] mb-20 rounded-lg max-w-4xl mx-auto p-8">
        <form onSubmit={handleSubmit(handleAddCourse)} className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
            {/* title  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-gray-600">
                  Course Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="text-left w-full rounded py-3 px-5 mt-3 text-sm"
                required
              />
            </div>
            {/* price  */}
            <div className="form-control">
              <label className="label">
                <span className="text-gray-600 label-text font-semibold text-xl">
                  Price
                </span>
              </label>
              <input
                type="number"
                placeholder="price"
                className=" text-left w-full rounded py-3 px-5 mt-3 text-sm "
                required
              />
            </div>
            {/* select category */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-xl text-gray-600">
                  Select Category:
                </span>
              </label>
              <Select
                options={categoryOptions}
                //   value={selectedTag}
                //   onChange={handleTagChange}
                className="text-left w-full rounded py-3 px-5 mt-2 text-sm "
                placeholder="Select category"
                required
              />
            </div>
            {/* select Duration */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-xl text-gray-600">
                  select Duration
                </span>
              </label>
              <Select
                options={durationOptions}
                //   value={selectedTag}
                //   onChange={handleTagChange}
                className="text-left w-full rounded py-3 px-5 mt-2 text-sm"
                placeholder="Select duration"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-gray-600 label-text font-semibold text-xl ">
                  Short Description
                </span>
              </label>
              <textarea
                type="text"
                placeholder="Short description"
                className="w-full rounded p-2 mt-3"
                id=""
                cols="30"
                rows="2"
              ></textarea>
            </div>
            {/* choice img  */}
            <div className="form-control">
              <label className="label">
                <span className="text-gray-600 label-text font-semibold text-xl">
                  Choice Image
                </span>
              </label>
              <input
                type="file"
                placeholder="image file"
                className="w-full rounded p-4 mt-3 bg-white"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-gray-600 label-text font-semibold text-xl ">
                Description
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Your description"
              className="w-full rounded p-5 mt-3"
              id=""
              cols="30"
              rows="4"
              {...register("description", { required: true })}
            ></textarea>
          </div>
          <div className="form-control mt-5 w-[200px]">
            <button
              type="submit"
              className="px-7 py-3 text-xl font-bold text-white bg-[#49BBBD] rounded-lg hover:bg-emerald-500 "
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
