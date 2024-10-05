import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useCoursesByEmail = (email) => {
    const [courses, setCourses] = useState();
    const apiHandler = useAxios();

    const fetchCourses = async () => {
        await apiHandler.get(`/courses/email?email=${email}`).then(res => {
            setCourses(res?.data.data)
        })
    }

    useEffect(() => {
        if (email) {
            fetchCourses()
        }

    }, [email])

    return courses
}