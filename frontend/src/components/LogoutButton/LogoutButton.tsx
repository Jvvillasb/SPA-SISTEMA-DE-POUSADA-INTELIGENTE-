import React from 'react';
import { useCookies } from 'react-cookie';

const LogoutButton = () => {
    const [, , removeCookie] = useCookies(['access_token']);

    const handleLogout = () => {
        removeCookie('access_token');
        window.location.href = '/login';
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
