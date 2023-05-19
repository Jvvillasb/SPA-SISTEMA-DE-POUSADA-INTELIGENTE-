import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Login from './auth/pages/login';
import AuthChecker from './auth/components/AuthChecker/authChecker';

const Routers = () => {

  return (
    <>
    <AuthChecker />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<h1>asdasdsa </h1>} />
    </Routes>
    </>
  );
}

export default Routers;