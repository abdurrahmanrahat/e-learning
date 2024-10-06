import { useEffect, useState } from "react"
import useAxios from "../useAxios";
import toast from "react-hot-toast";

export default function useEnrolledCoursesByEmail(email) {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const apiHandler = useAxios();

    useEffect(() => {
        const getEnrolledCourses = async () => {
            await apiHandler.get('/enrolled-courses', email)
                .then(res => {
                    // console.log(res.data);
                    setEnrolledCourses(res.data);
                })
                .catch(err => {
                    console.log(err.message);
                    toast.error(err.message);
                })
        }

        if (email) {
            getEnrolledCourses();
        }
    }, [apiHandler])

    return enrolledCourses;
}
