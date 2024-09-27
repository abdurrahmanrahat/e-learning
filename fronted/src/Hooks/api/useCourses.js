import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useCourses = () => {
    const [courses, setCourses] = useState();
    const apiHandler = useAxios();

    useEffect(() => {
        apiHandler.get("/courses")
        .then(res => {
            console.log(res?.data.data);
            setCourses(res?.data.data)
        })
    }, [apiHandler])

    return courses
}