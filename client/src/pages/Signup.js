import { useState } from "react";
import axios from 'axios';
import { useToken } from "../auth/useToken";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [, setToken] = useToken();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [verifyPassword, setVerifyPassword] = useState();
    const navigate = useNavigate();
    const handleSignup = async () => {
        const response = await axios.post('/api/signup', {
            email, password
        });
        const {token} = response.data;
        setToken(token);
        navigate('/');
    }
    return (
        <div className="forms">
            <input
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder="someone@domain.com"></input>
            <input 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                placeholder="password"
                type="password"></input>
            <input 
                value={verifyPassword}
                onChange={e=>setVerifyPassword(e.target.value)}
                placeholder="password"
                type="password"></input>
            <button
                disabled={!email || !password || password!==verifyPassword}
                onClick={handleSignup}
            >Sign up</button>
        </div>
    )
}