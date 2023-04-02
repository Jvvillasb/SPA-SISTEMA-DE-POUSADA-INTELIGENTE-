import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './auth/pages/login';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;