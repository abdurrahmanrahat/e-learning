import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../useAxios";

export default function useReviews(courseId) {
    const [reviews, setReviews] = useState();
    const apiHandler = useAxios();

    const fetchReviews = () => {
        apiHandler.get(`/courses/${courseId}/reviews`)
            .then(res => {
                console.log(res);
                setReviews(res.data.data);
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message);
            })
    }

    useEffect(() => {
       if(courseId) fetchReviews();
    }, [courseId])

    return { reviews, fetchReviews }
}
