import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="bg-primary shadow-myCustomShadow p-6">
      <div className="w-full rounded-xl focus:outline-none focus:border-[#49BBBD] border text-[#000] flex items-center bg-white shadow-myCustomShadow">
        <div className="text-[#9D9B9B] cursor-pointer text-2xl w-[10%] flex justify-center">
          <span>
            <FaSearch />
          </span>
        </div>
        <input
          type="text"
          name="searchKeyword"
          id="searchKeyword"
          placeholder="Search your favorite course"
          className="w-[90%] py-3 border-none focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-r-xl"
          //   onChange={(e) => handleSearch(e)}
        />
      </div>
    </div>
  );
}
