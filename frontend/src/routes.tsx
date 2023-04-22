import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './auth/pages/login';

const Routers = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <BrowserRouter>
{isAuthenticated ? (
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default Routers;