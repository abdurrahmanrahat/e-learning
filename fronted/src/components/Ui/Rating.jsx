import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

export default function Rating({ value, max = 5 }) {
    const stars = [];
    for (let i = 1; i <= max; i++) {
    if (value >= i) {
      // Full star
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (value >= i - 0.5) {
      // Half star
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      // Empty star
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return <div className="flex gap-1">{stars}</div>;
}
