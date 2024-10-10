import { useCallback, useEffect, useRef, useState } from "react";
import useAxios from "../useAxios";

export const useCourses = (query) => {
    const [courses, setCourses] = useState();
    const apiHandler = useAxios();
    const isInitialLoad = useRef(true);

    const fetchCourses = useCallback(async () => {
        try {
            const response = await apiHandler.get(`/courses?page=${query?.page || 1}&limit=${query?.limit || 10}&category=${query?.category || ''}&courseDuration=${query?.duration || ''}&searchTerm=${query?.searchTerm || ''}`);
            setCourses(response?.data?.data || []);
        } catch (error) {
            console.error('Error fetching courses:', error.message);
        }
    }, [apiHandler, query.page, query.limit, query.category, query.duration, query.searchTerm]);

    useEffect(() => {
        // Fetch courses on initial load
            if (isInitialLoad.current) {
                fetchCourses();
                isInitialLoad.current = false; // Mark the initial load as complete
                return;
            }

        // Fetch courses when query params change
        if (query.category || query.duration || query.searchTerm || query.page || query.limit) {
            fetchCourses();
        }
    }, [fetchCourses, query.page, query.limit, query.category, query.duration, query.searchTerm]);

    return { courses, fetchCourses }
}