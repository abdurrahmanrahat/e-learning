import { useForm } from "react-hook-form";

const subjects = [
  "Mathematics",
  "Computer Science",
  "Physics",
  "Chemistry",
  "Economics",
  "Biology",
  "History",
  "Business Administration",
  "Marketing",
  "Psychology",
];

const programs = [
  "Microsoft Word",
  "Adobe PhotoShop",
  "AutoCAD",
  "MATLAB",
  "Visual Studio Code",
  "PyCharm",
  "Android Studio",
  "Blender",
  "Figma",
  "Google Chrome",
];

const languages = [
  "JavaScript",
  "Python",
  "C++",
  "Java",
  "C#",
  "PHP",
  "Ruby",
  "Go",
  "Swift",
  "Rust",
];

export default function SearchForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <form className="space-y-8 py-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full bg-white p-2 rounded-xl focus:outline-none focus:border-[#49BBBD] border border-[#D9D9D9] text-[#000] flex">
        <input
          type="text"
          name="searchKeyword"
          id="searchKeyword"
          placeholder="Search your favorite course"
          className="w-[80%] px-6 py-3 border-none focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-l-xl"
          {...register("searchKeyword", { required: true })}
        />
        <input
          className="bg-[#49BBBD] px-12 py-4 rounded-xl text-white cursor-pointer w-[20%]"
          type="submit"
          value="Pay"
        />
      </div>
      <div className="w-full flex justify-center lg:flex-nowrap xl:flex-nowrap flex-wrap gap-10">
        <div className="space-y-2 w-full">
          <select
            name="country"
            {...register("country", { required: true })}
            className="w-full px-6 py-3 border focus:outline-none text-[#000] focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
          >
            {/* Placeholder option */}
            <option value="" disabled selected>
              Select Subjects
            </option>
            {subjects?.map((item, index) => (
              <option defaultValue={item[0]} key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2 w-full">
          <select
            placeholder="Select Programs"
            name="programs"
            {...register("programs", { required: true })}
            className="w-full px-6 py-3 border focus:outline-none text-[#000] focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
          >
            {/* Placeholder option */}
            <option value="" disabled selected>
              Select Programs
            </option>
            {programs?.map((item, index) => (
              <option defaultValue={item[0]} key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2 w-full">
          <select
            placeholder="Select Languages"
            name="languages"
            {...register("languages", { required: true })}
            className="w-full px-6 py-3 border focus:outline-none text-[#000] focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
          >
            {/* Placeholder option */}
            <option value="" disabled selected>
              Select Languages
            </option>
            {languages?.map((item, index) => (
              <option defaultValue={item[0]} key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <div className="flex justify-end">
        
      </div> */}
    </form>
  );
}
