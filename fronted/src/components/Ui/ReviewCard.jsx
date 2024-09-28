import { FaRegClock } from "react-icons/fa";
import Rating from "./Rating";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useUser } from "../../Hooks/api/useUser";
import { useForm } from "react-hook-form";

export default function ReviewCard({
  review,
  handleRemoveBtn,
  onSubmit,
  handler,
}) {
  const { _id, name, photoUrl, email, comment, createdAt, rating, course } =
    review;
  const [clickedInput, setClickedInput] = useState(comment);
  const { user } = useUser();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const date = new Date(createdAt);
  const [newRating, setNewRating] = useState(rating);

  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  // Format the date as "DD/MM/YYYY"
  const formattedDate = `${day}-${month}-${year}`;

  const handleEditBtn = () => {
    handler?.setClickedEdit(!handler?.clickedEdit);
  };

  const handleInputChange = (e) => {
    setClickedInput(e.target.value);
    setValue("comments", e.target.value);
  };

  return (
    <>
      {handler?.clickedEdit && (
        <form
          className="space-y-8 px-6 pb-16 flex gap-2 justify-between items-center"
          onSubmit={handleSubmit(() =>
            onSubmit(course?._id, _id, { comment: clickedInput })
          )}
        >
          <figure className="w-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user?.photoUrl}
              alt=""
            />
          </figure>
          <div className="w-full bg-white p-2 text-[#000] flex flex-col gap-2 items-end">
            <textarea
              type="text"
              name="comments"
              id="comments"
              placeholder="Add a comment..."
              className="w-full px-2 py-3 border-b-[2px] focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none h-[10%] overflow-y-hidden resize-none"
              onChange={handleInputChange}
            >
              {clickedInput}
            </textarea>
            {errors.comments && (
              <p className="text-red-500">Comment is required.</p>
            )}
            <div className="flex justify-between w-full items-center">
              <Rating
                value={newRating}
                onChange={(newRating) => setNewRating(newRating)}
                readOnly={false}
              />
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    handler?.setClickedEdit(false);
                    handler?.setClickedOptions(false);
                  }}
                  type="button"
                  className="px-4 py-2 rounded-xl text-[#000] cursor-pointer w-full text-sm"
                >
                  Cancel
                </button>
                <button
                  disabled={!clickedInput}
                  className={`${
                    clickedInput ? "bg-[#49BBBD]" : "bg-[#9d9b9bbb]"
                  }  px-4 py-2 rounded-xl text-white cursor-pointer w-full text-sm`}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      {!handler?.clickedEdit && (
        <div className="text-slate-500 rounded-xl w-full p-4 flex gap-2 items-start">
          <figure className="w-16 rounded-full">
            <img className="w-full rounded-full" src={photoUrl} alt="" />
          </figure>
          <div className="w-full relative">
            <header className="mb-4 flex flex-col lg:flex-row xl:flex-row justify-between">
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
                <span>{formattedDate}</span>
                { user &&
                  <span
                    onClick={() =>
                      handler?.setClickedOptions(!handler?.clickedOptions)
                    }
                    className="cursor-pointer"
                  >
                    <BsThreeDotsVertical />
                  </span>
                }
                {handler?.clickedOptions && (
                  <div className="absolute bottom-0 right-0 bg-white text-black px-4 py-2 rounded shadow-lg flex flex-col items-start gap-2">
                    <p className="cursor-pointer" onClick={handleEditBtn}>
                      Edit
                    </p>
                    <p
                      className="cursor-pointer"
                      onClick={() => handleRemoveBtn(course?._id, _id)}
                    >
                      Remove
                    </p>
                  </div>
                )}
              </div>
            </header>
            {/* body */}
            <div className="">
              <p className="text-start text-sm">{comment}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
