import { useEffect, useState } from "react";
import useAxios from "../useAxios";

export default function useUserByEmail(email) {
    const [user, setUser] = useState([]);
    const apiHandler = useAxios();


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await apiHandler.get(`/users/${email}`);
                setUser(response?.data?.data || []);
            } catch (error) {
                console.log(error?.message);
            }
        };
        if (email) {
            fetchUsers();
        }
    }, [apiHandler, email])

    return { user }
}
