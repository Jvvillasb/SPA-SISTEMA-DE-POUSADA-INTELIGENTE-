import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import AuthChecker from './components/AuthChecker/authChecker';
import { useCookies } from 'react-cookie';
import ListingClients from './pages/ListingClients';
import ListingExcursions from './pages/ListingExcursions';
import ListingClients from './pages/ListingClients';
import ListingExcursions from './pages/ListingExcursions';
import PageNotFound from './pages/NotFound/NotFound';
import Navigation from './commons/layout/Navigation/Navigation';
import ListingGuideUsers from './pages/ListingGuideUsers';

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
                        <Route path="/usuarios" element={<ListingClients />} />
                        <Route path="/" element={<ListingClients />} />
                        <Route
                            path="/caravanas"
                            element={<ListingExcursions />}
                        />
                        <Route path="/guia" element={<ListingGuideUsers />} />
                        <Route path="/logout" element={<>asd</>} />
                        <Route path="*" element={<PageNotFound />} />
                    </>
                )}
            </Routes>
        </>
    );
};

export default Routers;
