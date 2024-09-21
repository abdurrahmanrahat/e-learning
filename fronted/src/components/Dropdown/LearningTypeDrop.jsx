import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const LearningTypeDrop = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 text-xl font-bold px-5 py-3 rounded-xl bg-white text-gray-600 tracking-wider "
      >
        Learning 
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
            <li className="hover:text-[#49BBBD] mb-3 border p-2 rounded">Full Stack </li>
            <li className="hover:text-[#49BBBD] mb-3 border p-2 rounded">CSE Engineer</li>
            <li className="hover:text-[#49BBBD] mb-3 border p-2 rounded">Software Engineer</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LearningTypeDrop;

