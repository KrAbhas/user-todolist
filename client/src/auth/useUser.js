import { useCallback, useEffect, useState } from "react";
import { useToken } from "./useToken"

export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = useCallback((token) => {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    }, [token]);

    const [user, setUser] = useState(()=>{
        if (!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(() => {
        if (!token)
            setUser(null);
        else setUser(getPayloadFromToken(token));
    }, [token]);

    return user;
}