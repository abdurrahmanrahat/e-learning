import { useForm } from "react-hook-form";
import Select from "react-select";
import { useState } from "react";
const AddCourse = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const { register, handleSubmit, reset,formState: { errors } } =useForm();
// category 
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };
  // duration 
  const handleDurationChange = (selectedOption) => {
    setSelectedDuration(selectedOption);
  };

  const handleAddCourse=async(data)=>{
    const title =data.title;
    const price = data.price;
    const shortDescription =data.shortDescription;
    const image =data.image;
    const description =data.description;
    const categoryOptions = selectedCategory ? selectedCategory.value : null;
    const durationOptions = selectedDuration ? selectedDuration.value : null;

    const newCourse={title,price,shortDescription,image,description,categoryOptions,durationOptions}
    console.log(newCourse);
  }

  // category data
  const categoryOptions = [
    { value: "Digital Technology", label: "Digital Technology" },
    { value: "programming", label: "programming" },
    { value: "Management", label: "Management" },
    { value: "Skill Development", label: "Skill Development" },
    { value: "Languages", label: "Languages" },
    { value: "computer", label: "computer" },
    { value: "Science", label: "Science" },
    { value: "Academic Studies", label: "Academic Studies" },
    { value: "Basic Computer", label: "Basic Computer" },
    { value: "Health & Fitness", label: "Health & Fitness" },
  ];
  // duration data
  const durationOptions = [
    { value: "1 Months", label: "1 Months" },
    { value: "2 Months", label: "2 Months" },
    { value: "3 Months", label: "3 Months" },
    { value: "4 Months", label: "4 Months" },
    { value: "5 Months", label: "5 Months" },
  ];

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-5 ">Add Course</h1>
      <div className="border bg-[#e0f2fe] mb-20 rounded-lg max-w-4xl mx-auto p-8">
        <form onSubmit={handleSubmit(handleAddCourse)} className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
            {/* title  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-gray-600">
                  Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="text-left w-full rounded py-3 px-5 mt-3 text-sm"
                required
                {...register('title')}
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
                className=" text-left w-full rounded py-3 px-5 mt-3 text-sm"
                required
                {...register('price')}
              />
            </div>
            {/* select category */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-xl text-gray-600">
                  Category
                </span>
              </label>
              <Select
                options={categoryOptions}
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="text-left w-full rounded py-3  mt-2 text-sm "
                placeholder="Select category"
                required
              />
            </div>
            {/* select Duration */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-xl text-gray-600">
                  Duration
                </span>
              </label>
              <Select
                options={durationOptions}
                value={selectedDuration}
                onChange={handleDurationChange}
                className="text-left w-full rounded py-3  mt-2 text-sm"
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
                {...register('shortDescription')}
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
                {...register('image')}
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
