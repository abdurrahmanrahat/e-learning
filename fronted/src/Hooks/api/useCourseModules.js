import { useEffect, useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";

export default function useCourseModules(courseId) {
    const [courseModules, setCourseModules] = useState([]);
    const apiHandler = useAxios();

    useEffect(() => {
        const getCourseModules = async () => {
            await apiHandler.get(`/courses/${courseId}/course-modules`)
                .then(res => {
                    console.log(res?.data);
                    setCourseModules(res?.data?.data)
                })
                .catch(err => {
                    console.error(err);
                    toast.error(err.message);
                });
        }
        getCourseModules();

    }, [courseId, apiHandler])
    
    return { courseModules };
}
