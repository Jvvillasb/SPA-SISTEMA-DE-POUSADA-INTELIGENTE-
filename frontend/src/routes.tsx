import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import AuthChecker from './components/AuthChecker/authChecker';
import { useCookies } from 'react-cookie';
import Listing from './pages/Listing';
import PageNotFound from './pages/NotFound/NotFound';
import Navigation from './commons/layout/Navigation/Navigation';

const Routers = () => {
    const [cookies] = useCookies(['access_token']);
    const isAuthenticated = !!cookies.access_token;

    return (
        <>
            <AuthChecker />
            <Navigation />
            <Routes>
                {!isAuthenticated && (
                    <Route path="/login" element={<Login />} />
                )}
                {isAuthenticated && (
                    <>
                        <Route path="/list" element={<Listing />} />
                        <Route path="/logout" element={<>asd</>} />
                        <Route path="*" element={<PageNotFound/>}/>
                    </>
                )}
            </Routes>
        </>
    );
};

export default Routers;
