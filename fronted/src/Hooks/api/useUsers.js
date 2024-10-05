import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useUsers = () => {
    const [users, setUsers] = useState([]);

    const apiHandler = useAxios();
    const fetchUsers = async () => {
        try {
            const response = await apiHandler.get("/users");
            setUsers(response?.data?.data || []);
        } catch (error) {
            console.log(error?.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [apiHandler])

    return { users, fetchUsers }
}