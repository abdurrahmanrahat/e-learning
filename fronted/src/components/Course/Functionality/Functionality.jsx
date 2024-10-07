const category = [
  "All Courses",
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
  "All Courses",
  "1 Months",
  "2 Months",
  "3 Months",
  "6 Months",
  "9 Months",
  "12 Months",
];

export default function Functionality({
  handleSelectCategory,
  handleSelectDuration,
  handleSearch,
  categoryInputValue,
  durationInputValue
}) {
  return (
    <form className="space-y-8 py-10">
      <div className="w-full bg-white p-2 rounded-xl focus:outline-none focus:border-[#49BBBD] border border-[#D9D9D9] text-[#000] flex">
        <input
          type="text"
          name="searchKeyword"
          id="searchKeyword"
          placeholder="Search your favorite course"
          className="w-[80%] px-6 py-3 border-none focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-l-xl"
          onChange={(e) => handleSearch(e)}
        />

      </div>

      <div className="w-full flex justify-center lg:flex-nowrap xl:flex-nowrap flex-wrap gap-10">
        <div className="space-y-2 w-full">
          <select
            name="country"
            value={categoryInputValue}
            className="w-full px-6 py-3 border focus:outline-none text-[#000] focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
            onChange={(e) => handleSelectCategory(e)}
          >
            {/* Placeholder option */}
            <option value="" disabled>
              Select Category
            </option>
            {category?.map((item, index) => (
              <option key={index} value={item}>
                {item === "programming" ? "Programming" : item}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2 w-full">
          <select
            placeholder="Select Programs"
            name="programs"
            value={durationInputValue}
            className="w-full px-6 py-3 border focus:outline-none text-[#000] focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
            onChange={(e) => handleSelectDuration(e)}
          >
            {/* Placeholder option */}
            <option value="" disabled>
              Select Duration
            </option>
            {duration?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
}
