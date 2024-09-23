import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const SubjectDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full max-w-xs mx-auto">
      <label
        htmlFor="select"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-center items-center gap-3 font-medium px-2 py-2 rounded-xl bg-white text-gray-600 tracking-wider text-sm"
      >
        <span>Subject</span>
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8"></AiOutlineCaretDown>
        ) : (
          <AiOutlineCaretUp className="h-8"></AiOutlineCaretUp>
        )}
      </label>
      {isOpen && (
        <select
          id="select"
          className="block w-full mt-1 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        >
          {["Full Stack", "CSE Engineer", "Software Engineer"].map(
            (item, index) => (
              <option
                key={index}
                value={item}
                className="hover:text-[#49BBBD] mb-3 border p-2 rounded cursor-pointer text-center"
              >
                {item}
              </option>
            )
          )}
        </select>
      )}
    </div>
  );
};

export default SubjectDropdown;

{
  /* <select className="">
      

      <button
        
      >
        Subject
        
      </button>
      { (
        <div className="bg-white mt-2">
          <select className="p-3  font-semibold text-gray-500">
            
          </select>
        </div>
      )}
    </select> */
}
