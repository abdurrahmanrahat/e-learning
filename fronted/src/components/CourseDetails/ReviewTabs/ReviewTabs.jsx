import toast from "react-hot-toast";
import useReviews from "../../../Hooks/api/useReviews";
import useAxios from "../../../Hooks/useAxios";
import ReviewCard from "../../Ui/ReviewCard";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../../Hooks/api/useCourses";
import { useUser } from "../../../Hooks/api/useUser";
import { useForm } from "react-hook-form";
import Rating from "../../Ui/Rating";

const ReviewTabs = () => {
  const { id } = useParams();
  const { course } = useCourses(null, id);
  const { reviews, fetchReviews } = useReviews(id);
  const apiHandler = useAxios();
  const [rating, setRating] = useState(0);
  const { user } = useUser();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [clickedInput, setClickedInput] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [clickedEdit, setClickedEdit] = useState(
    new Array(reviews?.length).fill(false)
  );
  const [clickedOptions, setClickedOptions] = useState(
    new Array(reviews?.length).fill(false)
  );

  // Handle clicking on a specific card
  const handleEditInput = (index) => {
    const updatedClickedEdit = [...clickedEdit];
    updatedClickedEdit[index] = !setClickedEdit[index];
    setClickedOptions(updatedClickedEdit);
  };

  // Handle clicking on a specific card
  const handleThreeDotBtn = (index) => {
    const updatedClickedOptions = [...clickedOptions];
    updatedClickedOptions[index] = !updatedClickedOptions[index];
    setClickedOptions(updatedClickedOptions);
  };

  const handleReviewSubmit = (data) => {
    const { comments } = data;

    const commentsInfo = {
      name: user?.name,
      email: user?.email,
      photoUrl: user?.photoUrl,
      comment: comments,
      rating: rating,
    };

    apiHandler
      .post(`/courses/${course?.data._id}/reviews/create-review`, commentsInfo)
      .then((res) => {
        console.log("review:", res);
        toast.success("Review send Successfully");
        setClickedInput("");
        setRating(0);
        fetchReviews();
      })
      .catch((err) => {
        console.log(err?.message);
        toast.error(err?.message);
      });
  };

  const handleInputChange = (e) => {
    setClickedInput(e.target.value);
    setValue("comments", e.target.value);
  };

  const handleInputClicked = () => {
    if (!user) {
      navigate("/authentication", { state: { from: location }, replace: true });
    }
  };

  const handleRemoveBtn = (courseId, id) => {
    apiHandler
      .delete(`/courses/${courseId}/reviews/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Successfully Removed");
        fetchReviews();
        setClickedOptions(false);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleReviewEdit = (courseId, id, newData) => {
    apiHandler
      .patch(`/courses/${courseId}/reviews/${id}`, newData)
      .then((res) => {
        console.log(res);
        toast.success("Successfully Edit");
        setClickedOptions(false);
        setClickedEdit(false);
        fetchReviews();
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-medium text-start">Comments</h1>
      <form
        className="space-y-8 px-6 pb-16 flex gap-2 justify-between items-center"
        onSubmit={handleSubmit(handleReviewSubmit)}
      >
        {!user ? (
          <figure className="w-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={
                "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
              }
              alt=""
            />
          </figure>
        ) : (
          <figure className="w-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user?.photoUrl}
              alt=""
            />
          </figure>
        )}
        <div className="w-full bg-white p-2 text-[#000] flex flex-col gap-2 items-end">
          <input
            onClick={handleInputClicked}
            type="text"
            name="comments"
            id="comments"
            placeholder="Add a comment..."
            className="w-full px-6 py-3 border-b-[2px] focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none"
            value={clickedInput}
            onChange={handleInputChange} // Handle onChange manually
          />
          {errors.comments && (
            <p className="text-red-500">Comment is required.</p>
          )}
          <div className="flex justify-between w-full items-center">
            <Rating
              value={rating}
              onChange={(newRating) => setRating(newRating)}
              readOnly={false}
            />
            {user && (
              <div className="flex gap-4">
                <button
                  onClick={() => setClickedInput("")}
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
                  Comment
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-4">
        {reviews?.map((item, index) => (
          <ReviewCard
            key={item._id}
            review={item}
            index={index}
            handleRemoveBtn={handleRemoveBtn}
            handler={{
              clickedEdit,
              clickedOptions,
              setClickedEdit,
              setClickedOptions,
              handleThreeDotBtn,
              handleEditInput
            }}
            onSubmit={handleReviewEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewTabs;
