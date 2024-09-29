import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useCourses = (query) => {
    const [courses, setCourses] = useState()
    const apiHandler = useAxios();

    useEffect(() => {
        apiHandler.get(`/courses?page=${query?.page}&limit=${query?.limit}&category=${query?.category}&courseDuration=${query?.duration}&searchTerm=${query?.searchTerm}`).then(res => {
            setCourses(res?.data.data)
        })
    }, [apiHandler, query?.page, query?.limit, query?.category, query?.duration, query?.searchTerm])

    return courses
}