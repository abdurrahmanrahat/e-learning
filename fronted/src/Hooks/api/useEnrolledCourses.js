import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useEnrolledCourses = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const apiHandler = useAxios();
    const fetchEnrolledCourses = async () => {
        try {
            const response = await apiHandler.get("/enrolled-courses");
            setEnrolledCourses(response?.data?.data || []);
        } catch (error) {
            console.log(error?.message);
        }
    };

    useEffect(() => {
      fetchEnrolledCourses();
    }, [apiHandler])

    return { enrolledCourses, fetchEnrolledCourses }
}