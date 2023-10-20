import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import AuthChecker from './components/AuthChecker/AuthChecker';
import { useCookies } from 'react-cookie';
import NavBar from './components/Nav/NavBar';
import Listing from './pages/Listing';

const Routers = () => {
    const [cookies] = useCookies(['access_token']);
    const isAuthenticated = !!cookies.access_token;

    return (
        <>
            <AuthChecker />
            <NavBar />
            <Routes>
                {!isAuthenticated && (
                    <Route path="/login" element={<Login />} />
                )}
                {isAuthenticated && (
                    <>
                        <Route path="/list" element={<Listing />} />
                        <Route path="/logout" element={<>asd</>} />
                    </>
                )}
            </Routes>
        </>
    );
};

export default Routers;
