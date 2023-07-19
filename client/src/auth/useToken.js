import { useState } from "react"

export const useToken = () => {
    const [token, setInternalToken] = useState(() => localStorage.getItem('token'));

    const setToken = (newToken) => {
        setInternalToken(newToken);
        localStorage.setItem('token', newToken);
    }

    return [token, setToken];
}