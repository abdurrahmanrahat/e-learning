import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useCourses = (query) => {
    const [courses, setCourses] = useState();
    const apiHandler = useAxios();

    const fetchCourses = async () => {
        await apiHandler.get(`/courses?page=${query?.page}&limit=${query?.limit}&category=${query?.category}&courseDuration=${query?.duration}&searchTerm=${query?.searchTerm}`).then(res => {
            setCourses(res?.data.data)
        })
    }

    useEffect(() => {
        if (query) {
            fetchCourses()
        }

    }, [query])

    return { courses, fetchCourses }
}