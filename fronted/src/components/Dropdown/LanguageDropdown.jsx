import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 text-base font-medium px-4 py-2 rounded-xl bg-white text-gray-600 tracking-wider "
      >
        Language
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8"></AiOutlineCaretDown>
        ) : (
          <AiOutlineCaretUp className="h-8"></AiOutlineCaretUp>
        )}
      </button>
      {isOpen && (
        <div className="bg-white mt-2">
          <ul
            className="p-3  font-semibold text-gray-500"
          >
            <li className="hover:text-[#49BBBD] mb-3 border p-2 rounded">JavaScript </li>
            <li className="hover:text-[#49BBBD] mb-3 border p-2 rounded">React.js</li>
            <li className="hover:text-[#49BBBD] mb-3 border p-2 rounded">Express.js</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;

