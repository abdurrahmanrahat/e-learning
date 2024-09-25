import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useCourses = () => {
    const [courses, setCourses] = useState()
    const apiHandler = useAxios();

    useEffect(() => {
        apiHandler.get("/users").then(res => {
            console.log(res);
            setCourses(res?.data.data)
        })
    }, [apiHandler])

    return courses
}