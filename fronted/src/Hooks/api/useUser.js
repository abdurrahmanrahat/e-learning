import { useEffect, useState } from "react";

export const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('userInfo');
        if (data) {
            setUser(JSON.parse(data));
        }
    }, [])

    return user
}