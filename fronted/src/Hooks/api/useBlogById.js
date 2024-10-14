import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export default function useBlogById(blogId) {
    const [instructorBlog, setInstructorBlog] = useState({});
    const apiHandler = useAxios();

    const fetchInstructorBlog = async () => {
        if(!blogId) return;
        try {
            const res = await apiHandler.get(`/blogs/${blogId}`);
            console.log(res);
            setInstructorBlog(res?.data?.data);
        } catch (error) {
            console.log(error?.message);
        }
    };

    useEffect(() => {
        if (blogId) fetchInstructorBlog();
    }, [apiHandler, blogId]);

    return { instructorBlog, fetchInstructorBlog };
}
