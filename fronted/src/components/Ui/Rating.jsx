import { useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

export default function Rating({ value, max = 5, onChange, readOnly = true }) {
  const [hoverValue, setHoverValue] = useState(0);

  // Determines which star to show based on value and hover value
  const getStarType = (i) => {
    if (hoverValue >= i || (!hoverValue && value >= i)) {
      return <FaStar key={i} className="text-yellow-500 cursor-pointer" />;
    } else if (hoverValue >= i - 0.5 || (!hoverValue && value >= i - 0.5)) {
      return (
        <FaStarHalfAlt key={i} className="text-yellow-500 cursor-pointer" />
      );
    } else {
      return <FaRegStar key={i} className="text-yellow-500 cursor-pointer" />;
    }
  };

  const handleClick = (i) => {
    if (!readOnly && onChange) {
      onChange(i); // Calls the onChange function with the new value
    }
  };

  const handleMouseEnter = (i) => {
    if (!readOnly) {
      setHoverValue(i);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(0);
    }
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => i + 1).map((i) => (
        <span
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          className={readOnly ? "" : "cursor-pointer"}
        >
          {getStarType(i)}
        </span>
      ))}
    </div>
  );
}
