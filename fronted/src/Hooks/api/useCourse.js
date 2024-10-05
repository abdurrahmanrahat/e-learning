import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export default function useCourse(id) {
    const [course, setCourse] = useState({})
const apiHandler = useAxios();

const fetchCourse = async() => {
    await apiHandler.get(`/courses/${id}`)
            .then(res => setCourse(res?.data))
            .catch(err => console.error(err));
}

useEffect(() => {
    if(id){
        fetchCourse();
    }
},[id])
  return {course, fetchCourse};
}
