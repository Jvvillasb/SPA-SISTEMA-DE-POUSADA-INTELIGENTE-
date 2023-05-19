import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AuthChecker = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['access_token']);
  const isAuthenticated = !!cookies.access_token;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return null;
};

export default AuthChecker;