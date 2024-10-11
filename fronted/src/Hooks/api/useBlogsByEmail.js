import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export default function useBlogsByEmail(email) {
  const [instructorBlogs, setInstructorBlogs] = useState();
  const apiHandler = useAxios();
  
  const fetchInstructorBlogs = async () => {
    try {
      const res = await apiHandler.get(`/blogs/email/${email}`);
      console.log(res);
      setInstructorBlogs(res?.data?.data || []);
    } catch (error) {
      console.log(error?.message);
    }
  };

  useEffect(() => {
      fetchInstructorBlogs();
  }, [apiHandler, email]);

  return { instructorBlogs, fetchInstructorBlogs };
}
