import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useCoursesByEmail = (email) => {
    const [courses, setCourses] = useState([]);
    const apiHandler = useAxios();

    const fetchCourses = async () => {
        if (!email) return;
        try {
            const res = await apiHandler.get(`/courses/email/${email}`);
            setCourses(res?.data?.data || []);
        } catch (error) {
            console.log("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        if(email) fetchCourses();
    }, [email, apiHandler]);

    return {courses, fetchCourses};
};
