import { useEffect, useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";

export default function useEnrolledCourseById(courseId) {
    const [enrolledCourse, setEnrolledCourse] = useState();
    const apiHandler = useAxios();

    useEffect(() => {
        const fetchEnrolledCourse = async () => {
            await apiHandler.get(`/enrolled-courses/${courseId}`)
                .then(res => {
                    // console.log(res.data);
                    setEnrolledCourse(res.data?.data);
                })
                .catch(err => {
                    console.log(err.message);
                    toast.error(err.message);
                })
        }

        if (courseId) {
            fetchEnrolledCourse();
        }
    }, [apiHandler, courseId])

    return {enrolledCourse};
}
