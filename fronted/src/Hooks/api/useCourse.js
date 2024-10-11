import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export default function useCourse(id) {
    const [course, setCourse] = useState()
    const apiHandler = useAxios();

    const fetchCourse = () => {
        apiHandler.get(`/courses/${id}`)
            .then(res => setCourse(res?.data?.data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        if(id) fetchCourse();
    }, [id])
    return { course, fetchCourse };
}
