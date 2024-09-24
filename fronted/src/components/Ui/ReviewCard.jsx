import { FaRegClock } from "react-icons/fa";
import Rating from "./Rating";

export default function ReviewCard({ review }) {
  const { name, image, email, comment, date, rating } = review;

  return (
    <div className="text-slate-500 rounded-xl w-full p-6 flex justify-between gap-2">
      <figure className="w-20 rounded-full">
        <img className="w-full rounded-full" src={image} alt="" />
      </figure>
      <div>
        <header className="mb-4 flex flex-col lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between gap-4">
          <div className="flex gap-4 items-center justify-center">
            <div className="flex flex-col gap-1 items-start">
              <h3 className="text-xl font-medium text-slate-700">{name}</h3>
              <p className="text-sm text-slate-400">{email}</p>
              <span>
                <Rating value={rating} />
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <span>
              <FaRegClock />
            </span>
            <span>{date}</span>
          </div>
        </header>
        {/* body */}
        <div>
          <p className="text-start text-sm">{comment}</p>
        </div>
      </div>
    </div>
  );
}
