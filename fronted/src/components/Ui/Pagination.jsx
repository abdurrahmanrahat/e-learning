import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    // handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Function to handle previous page click
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Create page numbers dynamically
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex gap-8">
      <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 border border-[#D9D9D9] text-[##9D9B9B] cursor-pointer flex items-center gap-2 rounded-md hover:border-[#49BBBD] hover:text-[#49BBBD] transition-all duration-300 ease-in-out">
        <span><FaArrowLeftLong/></span>
        <span>Previous</span>
      </button>
      
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`p-2 px-4 border border-[#D9D9D9] text-[##9D9B9B] cursor-pointer rounded-md ${number === currentPage ? 'bg-[#49BBBD] text-[#FFF]' : ''}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 border border-[#D9D9D9] text-[##9D9B9B] cursor-pointer flex items-center gap-2 rounded-md hover:border-[#49BBBD] hover:text-[#49BBBD] transition-all duration-300 ease-in-out">
        <span>Next</span>
        <span><FaArrowRightLong/></span>
      </button>
    </div>
  );
};

export default Pagination;
