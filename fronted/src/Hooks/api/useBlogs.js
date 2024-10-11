import { useEffect, useState } from "react";
import axios from "axios";

export const useBlogs = () => {
      const [blogs, setBlogs] = useState([]);

      const fetchBlogs = async () => {
            try {
                  const response = await axios.get("/blogs.json");
                  setBlogs(response?.data || []);
            } catch (error) {
                  console.log(error?.message);
            }
      };

      useEffect(() => {
            fetchBlogs();
      }, [])

      return { blogs, fetchBlogs }
}