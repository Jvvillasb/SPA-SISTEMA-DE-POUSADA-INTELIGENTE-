import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './auth/pages/login';
import AuthChecker from './auth/components/AuthChecker/authChecker';
import { useCookies } from 'react-cookie';
import NavBar from './auth/components/Nav/NavBar';
import Listing from './auth/pages/Listing';

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
}

export default Routers;