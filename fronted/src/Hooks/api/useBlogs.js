import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useBlogs = () => {
      const [blogs, setBlogs] = useState([]);
      const apiHandler = useAxios();

      const fetchBlogs = async () => {
            try {
                  const res = await apiHandler.get("/blogs");
                  console.log(res)
                  setBlogs(res?.data?.data || []);
            } catch (error) {
                  console.log(error?.message);
            }
      };

      useEffect(() => {
            fetchBlogs();
      }, [apiHandler])

      return { blogs, fetchBlogs }
}