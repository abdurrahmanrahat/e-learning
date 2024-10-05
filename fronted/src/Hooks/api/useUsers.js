import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export const useUser = () => {
    const [users, setUsers] = useState([]);

    const apiHandler = useAxios();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await apiHandler.get("/users");
                setUsers(response?.data?.data || []);
            } catch (error) {
                console.log(error?.message);
            }
        };

        fetchUsers();

    }, [apiHandler])

    return {users}
}