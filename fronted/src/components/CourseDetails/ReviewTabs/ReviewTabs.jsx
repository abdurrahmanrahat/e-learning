import { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../../Ui/ReviewCard";

const ReviewTabs = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("../../../../public/reviews.json");
        if (response.status === 200) {
          setReviews(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div>
      {
        reviews?.map(item => <ReviewCard key={item.id} review={item}/>)
      }
    </div>
  )
};

export default ReviewTabs;
