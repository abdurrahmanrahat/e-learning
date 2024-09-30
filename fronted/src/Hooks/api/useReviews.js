import { useEffect, useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";

export default function useReviews(id) {
    const [reviews, setReviews] = useState();
    const apiHandler = useAxios();

    const fetchReviews = () => {
        apiHandler.get(`/courses/${id}/reviews`)
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
       if(id) fetchReviews();
    }, [id])

    return { reviews, fetchReviews }
}
