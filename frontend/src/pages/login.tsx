import React from 'react';
import LoginForm from './../auth/components/Login/loginForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

interface CookieOptions {
    path?: string;
    expires?: Date;
    maxAge?: number;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax';
}

const Login = () => {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['access_token']);
    useEffect(() => {
        const token = cookies.access_token;
        if (token) {
            navigate('/');
        }
    }, [cookies, navigate]);

    return (
        <LoginForm
            setCookie={
                setCookie as (
                    name: string,
                    value: string,
                    options?: CookieOptions
                ) => void
            }
        />
    );
};

export default Login;
