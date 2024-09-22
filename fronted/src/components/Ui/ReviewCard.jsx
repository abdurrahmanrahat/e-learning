import { FaRegClock } from "react-icons/fa";

export default function ReviewCard({ review }) {
  const { name, image, email, instructorEmail, comment, date, rating } = review;

  return (
    <div className="bg-white text-slate-500 shadow-md rounded-xl w-[70%] p-6 flex flex-col gap-6 justify-between">
      <header className="mb-4 flex justify-between gap-4">
        <div className="flex gap-4 items-center justify-center">
          <figure className="w-20 rounded-full">
            <img className="w-full rounded-full" src={image} alt="" />
          </figure>
          <div className="flex flex-col gap-1 justify-center items-center">
            <h3 className="text-xl font-medium text-slate-700">{name}</h3>
            <p className="text-sm text-slate-400">{email}</p>
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
  );
}
