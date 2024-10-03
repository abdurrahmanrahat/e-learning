import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useCourses = (query, id) => {
    const [courses, setCourses] = useState();
    const [course, setCourse] = useState();
    const apiHandler = useAxios();
    console.log(id)

    useEffect(() => {
        if (id) {
            apiHandler.get(`/courses/${id}`)
                .then(res => setCourse(res?.data))
                .catch(err => console.error(err));
        }
        else {
            apiHandler.get(`/courses?page=${query?.page}&limit=${query?.limit}&category=${query?.category}&courseDuration=${query?.duration}&searchTerm=${query?.searchTerm}`).then(res => {
                setCourses(res?.data.data)
            })
        }
    }, [apiHandler, query?.page, query?.limit, query?.category, query?.duration, query?.searchTerm, id])

    return { courses, course }
}