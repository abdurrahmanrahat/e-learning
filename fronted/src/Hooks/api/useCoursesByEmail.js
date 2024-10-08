import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useCoursesByEmail = (email) => {
    const [courses, setCourses] = useState(null);
    const apiHandler = useAxios();

    useEffect(() => {
        if (!email) return;

        const fetchCourses = async () => {
            try {
                const res = await apiHandler.get(`/courses/email/${email}`);
                setCourses(res?.data?.data || []);
            } catch (error) {
                console.log("Error fetching courses:", error);
            }
        };

        fetchCourses();

    }, [email, apiHandler]);

    return courses;
};
